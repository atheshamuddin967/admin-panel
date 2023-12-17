// import Images from "../images/Images";
import "../Screens/Operations/Operation.scss";

import { useState, useEffect, useCallback, useRef } from "react";
import { GoScreenFull } from "react-icons/go";

import { useCart } from "../context/VideoContext";
import { FaRegTrashCan } from "react-icons/fa6";
import Operationslist from "./Operationslist";

import { MdHeadphones } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
function OperationsVideo({ onViewImageClick }: any) {
  const { dispatch, videoArray }: any = useCart();
  const [open, setOpen] = useState(false);

  const [dropItem, setDroppedItem] = useState([]);

  const renderIcon = (item: any) => {
    if (item.stream_type === "TX") {
      return <MdOndemandVideo className="streamicon" />;
    } else if (item.stream_type === "ATX") {
      return <MdHeadphones className="streamicon" />;
    }

    return null;
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
        {dropItem?.map((item: any, index: number) => {
          return (
            <div
              key={item.deviceCode}
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
                      handleDeleteFromArray(item);
                    }}
                  >
                    <FaRegTrashCan />
                  </button>
                  {item.name} {renderIcon(item)}
                  <span onClick={() => onViewImageClick(item)}>
                    <GoScreenFull />
                  </span>
                </p>

                <iframe
                  src={`http://66.135.24.9:5080/WebRTCAppEE/play.html?id=${item.deviceCode}`}
                  width="100%"
                  height="150px"
                  frameBorder="0"
                  className="custom-iframe"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OperationsVideo;
