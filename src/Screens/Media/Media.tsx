import MediaHeader from "../../components/MediaHeader";
import MediaList from "../../components/MediaList";
import { useState } from "react";
import { useApi } from "../../context/Api";
function Media() {
  const { multimediaData, deleteMultimedia } = useApi();
  const [searchValue, setSearchValue] = useState("");

  const multi: any = multimediaData;
  const allData = multi?.data?.all;
  // console.log(allData);
  const [selectedDeviceId, setSelectedDeviceId] = useState<any>("All");

  const handleDeviceChange = (deviceCode: string | null) => {
    setSelectedDeviceId(deviceCode);
  };
  const handleSearch = (value: string) => {
    setSearchValue(value);
    // const defaultEventType: any = eventData;
    // searchEvents(value, defaultEventType);
  };
  return (
    <div className="container">
      <div className="shead">
        <MediaHeader
          data={allData}
          onDeviceChange={handleDeviceChange}
          search={handleSearch}
        />
      </div>
      <div className="mediacontainer">
        <div className="headings ">
          <h6>Recent Captured</h6>
        </div>
        <MediaList
          data={allData}
          deleteMultimedia={deleteMultimedia}
          selectedDeviceId={selectedDeviceId}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default Media;
