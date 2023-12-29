import "../Media/Media.scss";
import { useState, useEffect, useRef } from "react";
import Items from "../../Data/ItemData";
import MediaHeader from "../../components/MediaHeader";
import ReactPlayer from "react-player";
import { useApi } from "../../context/Api";
import Images from "../../images/Images";
import aud from "../../images/aud.mp3";
import { FaTrash } from "react-icons/fa";

function MediaAudio() {
  const { multimediaData, deleteMultimedia } = useApi();
  const multi: any = multimediaData;
  const allData = multi?.data?.audios;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  return (
    <div className="container">
      <div className="shead">
        <MediaHeader />
      </div>
      <div className="mediacontainer">
        <div className="heading">
          {" "}
          <h6>Videos</h6>
        </div>

        <div className="row ">
          {allData?.map((item: any, index: number) => (
            <div className="col-sm-2">
              <div className="imgList">
                <div onClick={() => handleItemClick(index)}>
                  <ReactPlayer
                    // url={item.mediaPath}
                    url={aud}
                    style={{
                      maxHeight: "100px",
                      borderRadius: "10px !important",
                    }}
                    width={"100%"}
                    controls={true}
                    playing={false}
                    loop={false}
                  />
                </div>
                <p>Device Code :{item.device?.deviceCode}</p>
                <p>Time:{item.created_at}</p>

                <button
                  className="mediadlt"
                  onClick={() => {
                    deleteMultimedia(item);
                  }}
                >
                  <FaTrash />
                </button>
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
    </div>
  );
}

export default MediaAudio;
