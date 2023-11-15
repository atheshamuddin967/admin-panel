import Googlemap from "../../components/Googlemap";
import Input from "../../components/Input";
import "../Mapview/Map.scss";
function Mapview() {
  return (
    <div>
      <div className="inp-box">
        <Input placeholder={"Search Devices"} />
      </div>

      <Googlemap height={"500px"} />
    </div>
  );
}

export default Mapview;
