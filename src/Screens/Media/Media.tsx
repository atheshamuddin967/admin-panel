import MediaHeader from "../../components/MediaHeader";
import MediaList from "../../components/MediaList";
import { useState } from "react";
import { useApi } from "../../context/Api";
function Media() {
  const { multimediaData, deleteMultimedia } = useApi();
  const multi: any = multimediaData;
  const allData = multi?.data?.all;
  // console.log(allData);
  const [selectedDeviceId, setSelectedDeviceId] = useState<any>("All");

  const handleDeviceChange = (deviceCode: string | null) => {
    setSelectedDeviceId(deviceCode);
  };

  return (
    <div className="container">
      <div className="shead">
        <MediaHeader data={allData} onDeviceChange={handleDeviceChange} />
      </div>
      <div className="mediacontainer">
        <div className="headings ">
          <h6>Recent Captured</h6>
        </div>
        <MediaList
          data={allData}
          deleteMultimedia={deleteMultimedia}
          selectedDeviceId={selectedDeviceId}
        />
      </div>
    </div>
  );
}

export default Media;
