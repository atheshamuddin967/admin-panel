import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import { useApi } from "../../context/Api";

import { useState, useEffect } from "react";
function Juricdiction() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.anpr;
  const [selectedFilter, setSelectedFilter] = useState("false");
  const [selectedDeviceId, setSelectedDeviceId] = useState<any>("All");

  const [filteredAlarms, setFilteredAlarms] = useState(allAlarams);
  useEffect(() => {
    handleFilterChange(selectedFilter); // Initial setup on component mount
  }, [liveAlarmData]);
  const handleFilterChange = (value: any) => {
    setSelectedFilter(value);
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
  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader
          onFilterChange={handleFilterChange}
          data={filteredAlarms}
          onDeviceChange={handleDeviceChange}
        />
      </div>
      <div className="alarmlist">
        <AlarmTable
          data={filteredAlarms}
          bg={"#FFA2A2"}
          selectedDeviceId={selectedDeviceId}
        />
      </div>
    </div>
  );
}

export default Juricdiction;
