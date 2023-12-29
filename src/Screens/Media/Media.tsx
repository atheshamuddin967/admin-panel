import MediaHeader from "../../components/MediaHeader";
import MediaList from "../../components/MediaList";

import { useApi } from "../../context/Api";
function Media() {
  const { multimediaData, deleteMultimedia } = useApi();
  const multi: any = multimediaData;
  const allData = multi?.data?.all;
  // console.log(allData);
  return (
    <div className="container">
      <div className="shead">
        <MediaHeader />
      </div>
      <div className="mediacontainer">
        <div className="headings ">
          <h6>Recent Captured</h6>
        </div>
        <MediaList data={allData} deleteMultimedia={deleteMultimedia} />
      </div>
    </div>
  );
}

export default Media;
