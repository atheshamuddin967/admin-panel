import { useState, useEffect } from "react";

function EventHeader({ onSelectEventType, data, onDeviceChange, search }: any) {
  const [selectedEventType, setSelectedEventType] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  // Add a debounce if needed

  const handleEventTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedEventType(event.target.value);
    onSelectEventType(event.target.value);
  };

  const debounce = (fn: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function (...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  // Debounced search function
  const debouncedSearch = debounce((value: string) => search(value), 300);

  useEffect(() => {
    // Call the debounced search function when searchValue changes
    debouncedSearch(searchValue);
  }, [searchValue, debouncedSearch]);

  const uniqueDeviceCodes: any = Array?.from(
    new Set(data?.map((item: any) => item?.device?.deviceCode))
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    // debouncedSearch(searchValue);
  };
  return (
    <div>
      <div className="flex">
        <div className="sboxs">
          <div className="searchbox">
            <input
              type="text"
              placeholder={"Search Events"}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="alarmHeadSelect">
          <select
            name="eventType"
            id="eventType"
            value={selectedEventType}
            onChange={handleEventTypeChange}
          >
            <option value="All" selected>
              Event Type
            </option>
            <option value="SANCTION">SANCTION</option>
            <option value="BOOKMARK">BOOKMARK</option>
            <option value="SPEED">SPEED</option>
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

export default EventHeader;
