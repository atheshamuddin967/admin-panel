import "../Screens/Media/Media.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import Images from "../images/Images";
import moment from "moment";
import DeleteModal from "./DeleteModal";
import { FaTrash } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TiInfo } from "react-icons/ti";

import Infobox from "./Infobox";
interface MediaItem {
  image: string;
  mediaType: string;
  mediaPath: any;
}

interface MediaListProps {
  data: MediaItem[];
  deleteMultimedia: any;
}
function MediaList({ data, deleteMultimedia }: MediaListProps) {
  // const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
  return (
    <div>
      <div className="row ">
        {data?.map((item: any, index: number) => (
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
                    url={Images.vid1}
                    style={{
                      maxHeight: "150px",
                      // height: "200px",
                      borderRadius: "10px",
                      margin: 0,
                      maxWidth: "100%",
                      padding: 0,
                    }}
                    // width={"100%"}

                    controls={true}
                    playing={false}
                    loop={false}
                  />
                )}
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
                  <span>
                    {moment(item?.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                  </span>
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
