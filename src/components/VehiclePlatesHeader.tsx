import Input from "../components/Input";
import "../Screens/Vehicle/Vehicle.scss";

function VehicleHeaderPlates({ openmodal, openmodalblock }: any) {
  return (
    <div className="flex">
      <Input placeholder={"Search Plates "} />

      <div className="btns">
        <button className="add" onClick={openmodal}>
          Add
        </button>{" "}
        <button className="block" onClick={openmodalblock}>
          Block
        </button>
      </div>
    </div>
  );
}

export default VehicleHeaderPlates;
