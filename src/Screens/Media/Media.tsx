import MediaHeader from "../../components/MediaHeader";
import MediaList from "../../components/MediaList";
import MediaVideoList from "../../components/MediaVideoList";
import Items from "../../Data/ItemData";
function Media() {
  return (
    <div className="container">
      <MediaHeader />
      <div className="mediacontainer">
        <div className="headings ">
          <h6>Recent Captured</h6>
        </div>
        <MediaList data={Items} />
      </div>
      <div className="mediacontainer">
        <div className="headings ">
          <h6>Recent Videos</h6>
        </div>
        <MediaVideoList data={Items} />
      </div>
    </div>
  );
}

export default Media;
