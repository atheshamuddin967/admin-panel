import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import { useState, useEffect } from "react";
import { useApi } from "../../context/Api";
function Alarms() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.all;
  // console.log(allAlarams);
  // const [selectedFilter, setSelectedFilter] = useState("false");
  const [selectedDeviceId, setSelectedDeviceId] = useState<any>("All");
  const [searchValue, setSearchValue] = useState("");

  const [filteredAlarms, setFilteredAlarms] = useState(allAlarams);

  const handleFilterChange = (value: any) => {
    // setSelectedFilter(value);
    if (value === "All") {
      setFilteredAlarms(allAlarams);
    } else {
      const filtered = allAlarams?.filter(
        (alarm: any) => alarm?.isResolved?.toString() === value
      );
      setFilteredAlarms(filtered);
    }
  };
  const handleDeviceChange = (deviceCode: string | null) => {
    setSelectedDeviceId(deviceCode);
  };

  useEffect(() => {
    // Update filtered alarms when liveAlarmData changes
    setFilteredAlarms(allAlarams);
  }, [liveAlarmData, allAlarams]);

  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader
          onFilterChange={handleFilterChange}
          data={filteredAlarms}
          onDeviceChange={handleDeviceChange}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="alarmlist">
        <AlarmTable
          data={filteredAlarms}
          bg={"#FFA2A2"}
          selectedDeviceId={selectedDeviceId}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default Alarms;
