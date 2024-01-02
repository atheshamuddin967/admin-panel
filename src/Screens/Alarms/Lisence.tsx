import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import { useState, useEffect } from "react";

import { useApi } from "../../context/Api";
function Lisence() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.mdAlarms;
  const [selectedFilter, setSelectedFilter] = useState("false");

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
  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader onFilterChange={handleFilterChange} />
      </div>
      <div className="alarmlist">
        <AlarmTable data={filteredAlarms} bg={"#FFA2A2"} />
      </div>
    </div>
  );
}

export default Lisence;
