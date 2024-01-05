// import ReactPlayer from "react-player";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { MdHeadphones } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";

function ListsVideo({
  item,
  videoArray,
  handleAddToArray,
  handleDeleteFromArray,
}: any) {
  // console.log(item);
  const renderIcon = () => {
    if (item?.assignedDevice?.stream_type === "TX") {
      return <MdOndemandVideo className="streamicon" />;
    } else if (item?.assignedDevice?.stream_type === "ATX") {
      return <MdHeadphones className="streamicon" />;
    }
    return null;
  };
  // console.log(item);
  return (
    <div className="col-sm-3" key={item?._id}>
      <div className="vidlayout">
        <h6>
          <span>
            {videoArray?.some(
              (videoItem: any) => videoItem?._id === item?._id
            ) ? (
              <button
                onClick={() => {
                  handleDeleteFromArray(item);
                }}
              >
                <FaRegTrashCan />
              </button>
            ) : (
              <button onClick={() => handleAddToArray(item)}>
                <MdAdd />
              </button>
            )}
          </span>
          {item?.username} {renderIcon()}
        </h6>
        {item?.assignedDevice?.isStreaming ? (
          <iframe
            src={`https://bappmedia.creativeaid.it:5443/WebRTCAppEE/play.html?id=${item.assignedDevice.deviceCode}`}
            width="100%"
            height="150px"
            frameBorder="0"
          ></iframe>
        ) : (
          <div className="black">offline</div>
        )}
      </div>
    </div>
  );
}

export default ListsVideo;
