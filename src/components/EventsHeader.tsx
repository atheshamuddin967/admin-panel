import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
function EventHeader() {
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Events"} />
        <Dropdown label={"Alarm type"} />
      </div>
    </div>
  );
}

export default EventHeader;
