import Items from "../../Data/ItemData";
import BlockPlatesTable from "../../components/BlockPlatesTable";
import Input from "../../components/Input";
import Images from "../../images/Images";

function Block() {
  return (
    <div className="container">
      <div className="shead">
        <div className="input">
          <Input placeholder={"Search Block Device"} />
        </div>
      </div>
      <div className="vehicle-table">
        <BlockPlatesTable data={Items} bg={"#bea8a8"} icon={Images.block} />
      </div>
    </div>
  );
}

export default Block;
