import Input from "../components/Input";
import { useState } from "react";
function AlarmHeader({ onFilterChange }: any) {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (e: any) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Alarm"} />
        <select
          name="filter"
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="false" selected>
            Un Resolve
          </option>

          <option value="true">Resolve</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
}

export default AlarmHeader;
