import ReactPlayer from "react-player";
import Images from "../images/Images";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { useState } from "react";
import Items from "../Data/ItemData";
import Input from "./Input";
import { IoCloseSharp } from "react-icons/io5";
import { useCart } from "../context/VideoContext";
function OperationsVideo({ item, onViewImageClick }: any) {
  const { dispatch, videoArray }: any = useCart();
  console.log(videoArray);
  const [isMuted, setIsMuted] = useState<number | null>(null);
  const [playing] = useState(true);
  const handleMuteToggle = (vid: any) => {
    setIsMuted(vid.id === isMuted ? null : vid.id);
    console.log(vid.id);
  };
  function handleAddToArray(item: any) {
    dispatch({ type: "ADD_TO_ARRAY", payload: item });
  }
  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-sm-12">
          <div className="addbtn">
            <button>Add Device</button>
          </div>
        </div>
      </div>
      <div className="row p-0">
        {item?.map((vid: any) => (
          <div className="col-sm-4 p-0 m-0" key={vid.id}>
            <div className="itemsvid">
              <p>
                {vid.id}
                <span onClick={() => onViewImageClick(vid.video)}>
                  <img src={Images.view} alt="" />
                </span>
              </p>

              <ReactPlayer
                url={"vid.video"}
                style={{ maxHeight: "100px " }}
                width={"100%"}
                controls={false}
                playing={playing}
                loop={true}
                muted={isMuted !== vid.id}
              />
              <div className="iconsvid">
                <div>
                  <img src={Images.pause} alt="" />
                  <img src={Images.play} alt="" />
                  {isMuted === vid.id ? (
                    <button onClick={() => handleMuteToggle(vid)}>
                      <IoVolumeMediumSharp />
                    </button>
                  ) : (
                    <button onClick={() => handleMuteToggle(vid)}>
                      <IoVolumeMute />
                    </button>
                  )}

                  <img src={Images.frontcam2} alt="" />
                </div>

                <div>
                  <img src={Images.mic} alt="" />
                  <img src={Images.movie} alt="" />
                  <img src={Images.back} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="listlayout">
        <div className="list2layout">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="shead">
                  <div className="searchvid">
                    <Input placeholder={"Search Device"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {Items.map((item: any) => (
                <div
                  className="col-sm-2"
                  onClick={() => handleAddToArray(item)}
                >
                  <div className="vidlayout">
                    <h6>{item.id}</h6>
                    <ReactPlayer
                      url={item.video}
                      style={{ maxHeight: "100px " }}
                      width={"100%"}
                      controls={false}
                      playing={false}
                      loop={true}
                      muted={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="closebtn">
            <button>
              <IoCloseSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperationsVideo;
