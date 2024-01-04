import "../Screens/Vehicle/Vehicle.scss";
import { useState } from "react";
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
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
          <button onClick={search}>
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
