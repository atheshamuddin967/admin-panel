import Input from "../components/Input";
import { useState } from "react";
function EventHeader({ onSelectEventType }: any) {
  const [selectedEventType, setSelectedEventType] = useState("All");
  const handleEventTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedEventType(event.target.value);
    onSelectEventType(event.target.value);
  };
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Events"} />
        <select
          name="eventType"
          id="eventType"
          value={selectedEventType}
          onChange={handleEventTypeChange}
        >
          <option value="All" selected>
            All
          </option>
          <option value="SANCTION">SANCTION</option>
          <option value="BOOKMARK">BOOKMARK</option>
          <option value="SPEED">SPEED</option>
        </select>
      </div>
    </div>
  );
}

export default EventHeader;
