import Input from "../components/Input";
import { useState } from "react";
function AlarmHeader({ onFilterChange, data, onDeviceChange }: any) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const uniqueDeviceCodes: any = Array?.from(
    new Set(data?.map((item: any) => item?.device?.deviceCode))
  );
  const handleFilterChange = (e: any) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Alarm"} />
        <div className="alarmHeadSelect">
          {" "}
          <select
            name="filter"
            id="filter"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="false" selected>
              UnResolve
            </option>

            <option value="true">Resolve</option>
            <option value="All">All</option>
          </select>
          <select
            name="cars"
            id="cars"
            form="carform"
            onChange={(e) => onDeviceChange(e.target.value)}
          >
            <option value="All" selected>
              All Device
            </option>
            {uniqueDeviceCodes?.map((deviceCode: any) => (
              <option value={deviceCode}>{deviceCode}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default AlarmHeader;
