import "../Screens/Vehicle/Vehicle.scss";
import { useEffect } from "react";
function DeviceHeader({
  openmodal,
  openmodalEdit,
  onFilterChange,
  search,
  searchValue,
  setSearchValue,
}: any) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange(value);
  };

  // Debounced search function
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSearchClick = () => {
    debouncedSearch(searchValue);
  };
  return (
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
      <div className="btns">
        <div className="devicefilter">
          <select
            name="cars"
            id="cars"
            form="carform"
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="isLost">Lost</option>
          </select>
        </div>
        <button className="add" onClick={openmodal}>
          Add
        </button>{" "}
        <button className="block" onClick={openmodalEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default DeviceHeader;
