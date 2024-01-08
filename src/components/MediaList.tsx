import "../Screens/Media/Media.scss";
import ReactPlayer from "react-player";
import { useState, useRef } from "react";
import Images from "../images/Images";
import moment from "moment";
import DeleteModal from "./DeleteModal";
import { FaTrash, FaForward, FaBackward } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TiInfo } from "react-icons/ti";
import html2canvas from "html2canvas";

import Infobox from "./Infobox";
interface MediaItem {
  image: string;
  mediaType: string;
  mediaPath: any;
  device: any;
}

interface MediaListProps {
  data: MediaItem[];
  deleteMultimedia: any;
  selectedDeviceId: any;
  searchValue: any;
}
function MediaList({
  data,
  deleteMultimedia,
  selectedDeviceId,
  searchValue,
}: MediaListProps) {
  // const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);

  // console.log(data);
  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  // console.log(selectedIndex);
  const handleNavigateNext = () => {
    if (selectedIndex !== null && selectedIndex < data.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  const handleNavigateprev = () => {
    if (selectedIndex !== null && selectedIndex < data.length - 1) {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  const handleCloseButtonClick = () => {
    setSelectedIndex(null);
  };
  const handleDownloadClick = async (mediaPath: string, filename: string) => {
    try {
      const response = await fetch(mediaPath);
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger a click on the link
      link.click();

      // Remove the link from the body
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  const [deleteItem, setDeleteItem] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const openDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteItem(item);
  };
  const closeDelete = () => {
    setDeleteModal(false);
  };
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const openinfobox = (item: any) => {
    setOpenInfo(true);
    setInfoData(item);
  };
  const closeinfobox = () => {
    setOpenInfo(false);
  };

  // const filteredData: any =
  //   selectedDeviceId === "All"
  //     ? data
  //     : data.filter((item) => item.device?.deviceCode === selectedDeviceId);

  const filteredData: any = data?.filter((item: any) => {
    const searchTermLower = searchValue.toLowerCase();
    const matchesDevice =
      selectedDeviceId === "All" ||
      item?.device?.deviceCode === selectedDeviceId;
    const matchesSearch =
      searchTermLower === "" ||
      item?.mediaType?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item?.parol?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
      moment(item?.created_at)
        .format("lll")
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      item?.device?.deviceCode
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
    // Add more fields to search if needed
    // ...
    false;

    return matchesDevice && matchesSearch;
  });
  // const playerRef: any = useRef(null);
  // // const [currentTime, setCurrentTime] = useState(0);
  // const handleBackward = () => {
  //   if (playerRef.current) {
  //     const currentTime = playerRef.current.getCurrentTime();
  //     const newTime = Math.max(0, currentTime - 10);
  //     playerRef.current.seekTo(newTime, "seconds");
  //   }
  // };

  // const handleForward = () => {
  //   if (playerRef.current) {
  //     const currentTime = playerRef.current.getCurrentTime();
  //     const newTime = currentTime + 10;
  //     playerRef.current.seekTo(newTime, "seconds");
  //   }
  // };

  // const handleProgress = (progress: any) => {
  //   if (progress.playedSeconds) {
  //     setPlayedSeconds(progress.playedSeconds);
  //   }
  // };
  function useRefArray<T>(
    length: number,
    initializer: () => React.RefObject<T>
  ): React.RefObject<T>[] {
    return Array.from({ length }, initializer);
  }
  const playerRefs: React.RefObject<ReactPlayer>[] = useRefArray(
    data?.length,
    () => useRef<ReactPlayer>(null)
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  const handleRotate = (angle: number, index: number) => {
    const playerRef = playerRefs[index];
    // Rest of the rotation logic...
  };

  const handleSpeedChange = (speed: number, index: number) => {
    const playerRef = playerRefs[index];
    // Rest of the speed change logic...
  };

  // const handleScreenshot = () => {
  //   if (playerRef.current) {
  //     html2canvas(playerRef.current.getInternalPlayer() as HTMLElement, {
  //       logging: true,
  //       // letterRendering,
  //       useCORS: true,
  //     }).then((canvas: any) => {
  //       const link = document.createElement("a");
  //       link.href = canvas.toDataURL();
  //       link.download = "screenshot.png";
  //       link.click();
  //     });
  //   }
  // };

  const handleFastForward = (index: number) => {
    const playerRef = playerRefs[index];
    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime + 5, "seconds");
    }
  };

  const handleFastBackward = (index: number) => {
    const playerRef = playerRefs[index];

    if (playerRef.current) {
      const currentTime = playerRef.current.getCurrentTime();
      playerRef.current.seekTo(currentTime - 5, "seconds");
    }
  };

  return (
    <div>
      <div className="row ">
        {filteredData?.map((item: any, index: number) => (
          <div className="col-sm-3">
            <div className="imgList">
              <div onClick={() => handleItemClick(index)}>
                {item?.mediaType === "image" ? (
                  <img src={item?.mediaPath} alt={`item-${index}`} />
                ) : (
                  // <video width="100%" height="200px" controls autoPlay>
                  //   <source src={Images.vid1} type="video/mp4" />
                  // </video>

                  <ReactPlayer
                    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    style={{
                      maxHeight: "150px",
                      // height: "200px",
                      borderRadius: "10px",
                      margin: 0,
                      maxWidth: "100%",
                      padding: 0,
                      transform: `rotate(${rotationAngle}deg)`,
                    }}
                    ref={playerRefs[index]}
                    playing={false}
                    controls
                    playbackRate={playbackSpeed}
                  />
                )}
              </div>
              <div>
                <button onClick={() => handleRotate(90, index)}>
                  Rotate 90
                </button>
                <button onClick={() => handleRotate(180, index)}>
                  Rotate 180
                </button>
                <button onClick={() => handleRotate(270, index)}>
                  Rotate 270
                </button>
                <button onClick={() => handleRotate(360, index)}>
                  Rotate 360
                </button>
              </div>

              <div>
                <button onClick={() => handleSpeedChange(0.5, index)}>
                  0.5x Speed
                </button>
                <button onClick={() => handleSpeedChange(1, index)}>
                  1x Speed
                </button>
                <button onClick={() => handleSpeedChange(1.5, index)}>
                  1.5x Speed
                </button>
              </div>

              <div>
                <button onClick={() => handleFastBackward(index)}>
                  Backward
                </button>
                <button onClick={() => handleFastForward(index)}>
                  Forward
                </button>
              </div>
              <div className="det">
                <p>
                  Operator: <span> {item?.parol?.name}</span>
                </p>
                <p>
                  Device Code : <span>{item?.device?.deviceCode}</span>{" "}
                </p>
                <p>
                  Time:
                  <span>{moment(item?.created_at).format("lll")}</span>
                </p>
                <p>
                  FileSize: <span>{item?.sizeInBytes}Bytes</span>{" "}
                </p>
              </div>
              <div className="mediadlt">
                <div>
                  {" "}
                  <button
                    className="dwnl"
                    onClick={() =>
                      handleDownloadClick(item?.mediaPath, "media")
                    }
                  >
                    <IoMdDownload />
                  </button>
                  <button
                    onClick={() => {
                      openinfobox(item);
                    }}
                  >
                    <TiInfo />
                  </button>
                </div>

                <button
                  className="dlts"
                  onClick={() => {
                    openDelete(item);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <div className="medialayout">
          <div className="mediaview">
            <div className="imgscreen">
              {data[selectedIndex] && (
                <div>
                  {data[selectedIndex].mediaType === "image" ? (
                    <img
                      src={data[selectedIndex].mediaPath}
                      alt={`selected-item-${selectedIndex}`}
                    />
                  ) : (
                    <ReactPlayer
                      url={data[selectedIndex].mediaPath}
                      width={"100%"}
                      controls={false}
                      playing={true}
                    />
                  )}
                  <div className="navigatebtns">
                    <div className="flex">
                      <button onClick={handleNavigateprev}>
                        <i className="fa-solid fa-angle-left"></i>
                      </button>

                      <button onClick={handleNavigateNext}>
                        <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                  <div className="closebtn">
                    <button onClick={handleCloseButtonClick}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {deleteModal && (
        <DeleteModal
          title={"media"}
          button={deleteMultimedia}
          closeDelete={closeDelete}
          item={deleteItem}
        />
      )}

      {openInfo && (
        <Infobox
          data={infoData}
          closeinfobox={closeinfobox}
          title={"Multimedia Info"}
        />
      )}
    </div>
  );
}

export default MediaList;
