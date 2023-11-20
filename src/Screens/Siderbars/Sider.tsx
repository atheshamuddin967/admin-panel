import { Menu } from "antd";
import Images from "../../images/Images";
function MenuList() {
  return (
    <menu>
      <Menu.Item
        key="Dashoard"
        icon={<img src={Images.Dashboard} alt="demo" className="icons-side" />}
      ></Menu.Item>
    </menu>
  );
}

export default MenuList;
