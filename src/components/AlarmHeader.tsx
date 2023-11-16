import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
function AlarmHeader() {
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Serach Alarm"} />
        <Dropdown />
      </div>
    </div>
  );
}

export default AlarmHeader;
