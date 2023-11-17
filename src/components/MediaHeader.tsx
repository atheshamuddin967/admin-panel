import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
function MediaHeader() {
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Media"} />
        <Dropdown label={"Alarm type"} />
      </div>
    </div>
  );
}

export default MediaHeader;
