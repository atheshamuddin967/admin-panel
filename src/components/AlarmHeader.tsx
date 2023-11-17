import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
function AlarmHeader() {
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Serach Alarm"} />
        <Dropdown label={"Alarm type"} />
      </div>
    </div>
  );
}

export default AlarmHeader;