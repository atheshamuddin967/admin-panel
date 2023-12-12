import Images from "../images/Images";
import "../Screens/Operations/Operation.scss";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { useState, useEffect, useCallback, useRef } from "react";

import ReactPlayer from "react-player";
import { useCart } from "../context/VideoContext";
import { FaRegTrashCan } from "react-icons/fa6";
import Operationslist from "./Operationslist";
// import { useUser } from "../context/Socketprovider";
function OperationsVideo({ onViewImageClick }: any) {
  const { dispatch, videoArray }: any = useCart();
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState<number | null>(null);
  // const [playing] = useState(true);
  const [dropItem, setDroppedItem] = useState([]);
  // const { myuser } = useUser();

  const handleMuteToggle = (vid: any) => {
    setIsMuted(vid.id === isMuted ? null : vid.id);
  };
  const handleAddToArray = useCallback(
    (item: any) => {
      console.log(item);
      dispatch({ type: "ADD_TO_ARRAY", payload: item });
    },

    [dispatch]
  );
  let newvideoArray = [...dropItem];
  useEffect(() => {
    setDroppedItem(videoArray);
  }, [videoArray]);

  const openmodal = () => {
    setOpen(true);
  };
  const closemodal = () => {
    setOpen(false);
  };
  const handleDeleteFromArray = useCallback(
    (item: any) => {
      dispatch({ type: "DELETE_FROM_ARRAY", payload: item });
      console.log("item delete");
    },
    [dispatch]
  );
  // const playerRef = useRef(null);
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    const DragItemCont = newvideoArray.splice(dragItem.current, 1)[0];
    newvideoArray.splice(dragOverItem.current, 0, DragItemCont);
    dragItem.current = null;
    dragOverItem.current = null;
    setDroppedItem(newvideoArray);
  };

  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-sm-12">
          <div className="addbtn">
            <button onClick={openmodal}>Add Device</button>
          </div>
        </div>

        {open && (
          <div>
            <Operationslist
              handleAddToArray={handleAddToArray}
              closemodal={closemodal}
              videoArray={videoArray}
              handleDeleteFromArray={handleDeleteFromArray}
            />
          </div>
        )}
      </div>
      <div className="row p-0">
        {dropItem?.map((vid: any, index: number) => {
          return (
            <div
              key={vid.stream}
              className="col-sm-4 p-0   m-0"
              onDragEnter={() => (dragOverItem.current = index)}
              onDragStart={() => (dragItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="itemsvid" draggable>
                <p>
                  <button
                    onClick={() => {
                      handleDeleteFromArray(vid);
                    }}
                  >
                    <FaRegTrashCan />
                  </button>
                  {vid.id}
                  <span onClick={() => onViewImageClick(vid.stream)}>
                    <img src={Images.view} alt="" />
                  </span>
                </p>

                <ReactPlayer
                  url={`http://192.168.100.44:8000/live/${vid.deviceCode}/index.m3u8`} // Use the dynamically set URL
                  controls={true}
                  playing={true}
                  muted={isMuted !== vid.id}
                  width="100%"
                  height="100px"
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
          );
        })}
      </div>
    </div>
  );
}

export default OperationsVideo;
