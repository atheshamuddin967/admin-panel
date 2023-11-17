import Items from "../../Data/ItemData";
import BlockPlatesTable from "../../components/BlockPlatesTable";
import Input from "../../components/Input";
import Images from "../../images/Images";

function Block() {
  return (
    <div>
      <div className="input">
        <Input placeholder={"search Block Device"} />
      </div>
      <div className="vehicle-table">
        <BlockPlatesTable data={Items} bg={"#bea8a8"} icon={Images.block} />
      </div>
    </div>
  );
}

export default Block;
