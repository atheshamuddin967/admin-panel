import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
function MediaHeader() {
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Media"} />
        <Dropdown label={"Media Type"} />
      </div>
    </div>
  );
}

export default MediaHeader;
