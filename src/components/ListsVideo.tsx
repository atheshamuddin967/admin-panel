import ReactPlayer from "react-player";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { Ip } from "../context/Ip";
function ListsVideo({
  item,
  videoArray,
  handleAddToArray,

  handleDeleteFromArray,
}: any) {
  return (
    <div className="col-sm-2" key={item._id}>
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
          {item.username}
        </h6>
        {item.isStreaming ? (
          <ReactPlayer
            // key={playerKey}
            url={Ip`/live/${item.deviceCode}/index.m3u8`} // Use the dynamically set URL
            controls={true}
            playing={true}
            muted={true}
            width="100%"
            height="100px"
          />
        ) : (
          <div className="black">offline</div>
        )}
      </div>
    </div>
  );
}

export default ListsVideo;
