import Input from "../components/Input";
import "../Screens/Vehicle/Vehicle.scss";
import Dropdown from "./Dropdown";
function VehicleHeader({ openmodal, openmodalEdit }: any) {
  return (
    <div className="flex">
      <Input placeholder={"Search Vehicles"} />
      <div className="btns">
        <Dropdown label={" Select Vehicle"} />
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

export default VehicleHeader;
