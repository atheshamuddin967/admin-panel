import Input from "../components/Input";
import "../Screens/Vehicle/Vehicle.scss";

function DeviceHeader({ openmodal, openmodalEdit, onFilterChange }: any) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange(value);
  };
  return (
    <div className="flex">
      <Input placeholder={"Search Devices"} />
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
