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
  const renderIcon = () => {
    if (item?.stream_type === "TX") {
      return <MdOndemandVideo className="streamicon" />;
    } else if (item?.stream_type === "ATX") {
      return <MdHeadphones className="streamicon" />;
    }
    return null;
  };
  return (
    <div className="col-sm-3" key={item?._id}>
      <div className="vidlayout">
        <h6>
          <span>
            {videoArray.includes(item) ? (
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
        {item?.isStreaming ? (
          <iframe
            src={`https://bappmedia.creativeaid.it:5443/WebRTCAppEE/play.html?id=${item.deviceCode}`}
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
