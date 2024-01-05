import { useState, useEffect } from "react";
function AlarmHeader({
  onFilterChange,
  data,
  // search,
  onDeviceChange,
  searchValue,
  setSearchValue,
}: any) {
  // console.log(data);
  const [selectedFilter, setSelectedFilter] = useState("");
  const uniqueDeviceCodes: any = Array?.from(
    new Set(data?.map((item: any) => item?.device?.deviceCode))
  );
  const handleFilterChange = (e: any) => {
    const value = e.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };
  // const debounce = (fn: Function, delay: number) => {
  //   let timeoutId: NodeJS.Timeout;
  //   return function (...args: any[]) {
  //     clearTimeout(timeoutId);
  //     timeoutId = setTimeout(() => fn(...args), delay);
  //   };
  // };

  // Debounced search function
  // const debouncedSearch = debounce((value: string) => search(value), 300);

  // useEffect(() => {
  //   // Call the debounced search function when searchValue changes
  //   debouncedSearch(searchValue);
  // }, [searchValue, debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
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
              placeholder={"Search Devices"}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
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
