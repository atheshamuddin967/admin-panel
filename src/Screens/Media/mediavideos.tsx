import "../Media/Media.scss";
import { useState, useEffect, useRef } from "react";
import Items from "../../Data/ItemData";
import MediaHeader from "../../components/MediaHeader";
import ReactPlayer from "react-player";
import { useApi } from "../../context/Api";
import Images from "../../images/Images";
import { FaTrash } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import moment from "moment";
import DeleteModal from "../../components/DeleteModal";
import { TiInfo } from "react-icons/ti";
import Infobox from "../../components/Infobox";
function MediaVideos() {
  const [selectedDeviceId, setSelectedDeviceId] = useState<any>("All");
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [deleteItem, setDeleteItem] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const { multimediaData, deleteMultimedia } = useApi();
  const multi: any = multimediaData;
  const allData = multi?.data?.videos;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };
  useEffect(() => {
    if (selectedIndex !== null && videoRef.current) {
      videoRef.current.src = Items[selectedIndex].video;
      videoRef.current.load();
    }
    [selectedIndex, Items];
  });
  const handleNavigateNext = () => {
    if (selectedIndex !== null && selectedIndex < Items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  const handleNavigateprev = () => {
    if (selectedIndex !== null && selectedIndex < Items.length - 1) {
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

  const openDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteItem(item);
  };
  const closeDelete = () => {
    setDeleteModal(false);
  };

  const openinfobox = (item: any) => {
    setOpenInfo(true);
    setInfoData(item);
  };
  const closeinfobox = () => {
    setOpenInfo(false);
  };
  const handleDeviceChange = (deviceCode: string | null) => {
    setSelectedDeviceId(deviceCode);
  };

  const filteredData: any =
    selectedDeviceId === "All"
      ? allData
      : allData.filter(
          (item: any) => item.device?.deviceCode === selectedDeviceId
        );
  return (
    <div className="container">
      <div className="shead">
        <MediaHeader data={allData} onDeviceChange={handleDeviceChange} />
      </div>
      <div className="mediacontainer">
        <div className="heading">
          {" "}
          <h6>Videos</h6>
        </div>

        <div className="row ">
          {filteredData?.map((item: any, index: number) => (
            <div className="col-sm-3">
              <div className="imgList">
                <div onClick={() => handleItemClick(index)}>
                  <ReactPlayer
                    // url={item.mediaPath}
                    url={Images.vid1}
                    style={{
                      maxHeight: "150px",
                      borderRadius: "10px !important",
                    }}
                    width={"100%"}
                    controls={false}
                    playing={false}
                    loop={false}
                  />
                </div>
                <div className="det">
                  <p>
                    Operator: <span> {item?.parol?.name}</span>
                  </p>
                  <p>
                    Device Code : <span>{item.device?.deviceCode}</span>{" "}
                  </p>
                  <p>
                    Time:
                    <span>{moment(item.created_at).format("lll")}</span>
                  </p>
                  <p>
                    FileSize: <span>{item.sizeInBytes}Bytes</span>{" "}
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
                {allData[selectedIndex] && (
                  <div>
                    {/* <video ref={videoRef} controls>
                      <source
                        // src={allData[selectedIndex].mediaPath}
                        src={Images.vid1}
                        type="video/mp4"
                      />
                    </video> */}

                    <ReactPlayer
                      // url={data[selectedIndex].mediaPath}
                      url={Images.vid1}
                      width={"100%"}
                      controls={true}
                      playing={true}
                      refrence={videoRef}
                    />

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
      </div>

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

export default MediaVideos;
