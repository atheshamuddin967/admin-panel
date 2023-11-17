import Input from "../components/Input";
import "../Screens/Vehicle/Vehicle.scss";
import Dropdown from "./Dropdown";
function DeviceHeader({ openmodal, openmodalEdit }: any) {
  return (
    <div className="flex">
      <Input placeholder={"Serach Devices"} />
      <div className="btns">
        <Dropdown label={" Select Device"} />
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
