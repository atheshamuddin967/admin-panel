import "../Media/Media.scss";
import Items from "../../Data/ItemData";
import { useState } from "react";
import MediaHeader from "../../components/MediaHeader";
import { useApi } from "../../context/Api";
import { IoMdDownload } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

import moment from "moment";
function Photos() {
  const { multimediaData, deleteMultimedia } = useApi();
  const multi: any = multimediaData;
  const allData = multi?.data?.photos;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

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
  return (
    <div className="container">
      <div className="shead">
        <MediaHeader />
      </div>
      <div className="mediacontainer">
        <div className="heading">
          <h6>Photos</h6>
        </div>
        <div className="row ">
          {allData?.map((item: any, index: number) => (
            <div className="col-sm-3">
              <div className="imgList">
                <div onClick={() => handleItemClick(index)}>
                  <img src={item.mediaPath} alt="item" />
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
                    <span>
                      {moment(item.created_at).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </span>
                  </p>
                  <p>
                    FileSize: <span>{item.sizeInBytes}Bytes</span>{" "}
                  </p>
                </div>
                <div className="mediadlt">
                  <button
                    className="dwnl"
                    onClick={() =>
                      handleDownloadClick(item?.mediaPath, "media")
                    }
                  >
                    <IoMdDownload />
                  </button>
                  <button
                    className="dlts"
                    onClick={() => {
                      deleteMultimedia(item);
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
                    <img
                      src={allData[selectedIndex].mediaPath}
                      alt={`selected-item-${selectedIndex}`}
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
    </div>
  );
}

export default Photos;
