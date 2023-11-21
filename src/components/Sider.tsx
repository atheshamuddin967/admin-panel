import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

import { Link } from "react-router-dom";
import "../styles/Sidebar.scss";
import { useState } from "react";
import Images from "../images/Images";
function Sider() {
  // const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState("/Operators");
  const handleMenuItemClick = (path: any) => {
    setActiveMenuItem(path);
  };
  return (
    <aside>
      <Sidebar
        backgroundColor=""
        toggled={true}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "red",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: active ? "#686868" : "##686868",
                  backgroundColor: active ? "#EDEDED" : undefined,
                };
            },
          }}
        >
          <MenuItem
            component={<Link to="/Dashboard" />}
            icon={
              <img src={Images.Dashboard} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Dashboard"}
            onClick={() => handleMenuItemClick("/Dashboard")}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="Search" />}
            icon={<img src={Images.serach} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/Search"}
            onClick={() => handleMenuItemClick("/Search")}
          >
            Serach
          </MenuItem>
          <MenuItem
            component={<Link to="/Operators" />}
            icon={
              <img src={Images.operations} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Operators"}
            onClick={() => handleMenuItemClick("/Operators")}
          >
            Operations
          </MenuItem>
          <MenuItem
            component={<Link to="/Monitoring" />}
            icon={
              <img src={Images.monitor} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Monitoring"}
            onClick={() => handleMenuItemClick("/Monitoring")}
          >
            Monitoring
          </MenuItem>
          <MenuItem
            component={<Link to="/Map" />}
            icon={<img src={Images.map} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/Map"}
            onClick={() => handleMenuItemClick("/Map")}
          >
            Map View
          </MenuItem>
          <MenuItem
            component={<Link to="/Stream" />}
            icon={<img src={Images.straen} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/stream"}
            onClick={() => handleMenuItemClick("/Stream")}
          >
            Stream
          </MenuItem>
          <SubMenu
            component={<Link to="/Alarm" />}
            label="Alarm"
            icon={<img src={Images.alarm} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/Alarm"}
            onClick={() => handleMenuItemClick("/Alarm")}
          >
            <MenuItem
              component={<Link to="/alarm" />}
              icon={<img src={Images.semergency} alt="demo" className="" />}
              active={activeMenuItem === "/Alarm"}
              onClick={() => handleMenuItemClick("/Alarm")}
            >
              Emergency
            </MenuItem>
            <MenuItem
              component={<Link to="/MotionAlarm" />}
              icon={<img src={Images.scam} alt="demo" className="" />}
              active={activeMenuItem === "/MotionAlarm"}
              onClick={() => handleMenuItemClick("/MotionAlarm")}
            >
              Motion Detection{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="/Lisence" />}
              icon={<img src={Images.slisence} alt="demo" className="" />}
              active={activeMenuItem === "/Lisence"}
              onClick={() => handleMenuItemClick("/Lisence")}
            >
              License plate Alerts
            </MenuItem>

            <MenuItem
              component={<Link to="/Juricdiction" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
              active={activeMenuItem === "/Juricdiction"}
              onClick={() => handleMenuItemClick("/Juricdiction")}
            >
              Juricdiction{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Vehicle"
            icon={<img src={Images.car} alt="demo" className="icons-side" />}
            component={<Link to="/Vehicle" />}
            active={activeMenuItem === "/Vehicle"}
            onClick={() => handleMenuItemClick("/Vehicle")}
          >
            <MenuItem
              component={<Link to="/VehiclePlates" />}
              icon={<img src={Images.palte} alt="demo" className="" />}
              active={activeMenuItem === "/VehiclePlates"}
              onClick={() => handleMenuItemClick("/VehiclePlates")}
            >
              Plates
            </MenuItem>
            <MenuItem
              component={<Link to="/Block" />}
              icon={<img src={Images.block} alt="demo" className="" />}
              active={activeMenuItem === "/Block"}
              onClick={() => handleMenuItemClick("/Block")}
            >
              Blocked
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Device"
            icon={<img src={Images.device} alt="demo" className="icons-side" />}
            component={<Link to="/Device" />}
            active={activeMenuItem === "/Device"}
            onClick={() => handleMenuItemClick("/Device")}
          >
            <MenuItem
              component={<Link to="/VideoDevice" />}
              icon={<img src={Images.vediosvg} alt="demo" className="" />}
              active={activeMenuItem === "/VideoDevice"}
              onClick={() => handleMenuItemClick("/VideoDevice")}
            >
              Video
            </MenuItem>
            <MenuItem
              component={<Link to="/AudioDevice" />}
              icon={<img src={Images.audiosvg} alt="demo" className="" />}
              active={activeMenuItem === "/AudioDevice"}
              onClick={() => handleMenuItemClick("/AudioDevice")}
            >
              Audio
            </MenuItem>
            <MenuItem
              component={<Link to="/TrackingDevice" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
              active={activeMenuItem === "/TrackingDevice"}
              onClick={() => handleMenuItemClick("/AudioDevice")}
            >
              Tracking
            </MenuItem>
          </SubMenu>

          <MenuItem
            component={<Link to="/Messages" />}
            icon={
              <img src={Images.messages} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Messages"}
            onClick={() => handleMenuItemClick("/Messages")}
          >
            Messages
          </MenuItem>
          <MenuItem
            component={<Link to="/Events" />}
            icon={<img src={Images.events} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/Events"}
            onClick={() => handleMenuItemClick("/Events")}
          >
            Events
          </MenuItem>
          <SubMenu
            label="Media"
            icon={<img src={Images.media} alt="demo" className="icons-side" />}
            component={<Link to="/Media" />}
            active={activeMenuItem === "/Media"}
            onClick={() => handleMenuItemClick("/Media")}
          >
            <MenuItem
              component={<Link to="/Photos" />}
              icon={<img src={Images.photos} alt="demo" className="" />}
              active={activeMenuItem === "/Photos"}
              onClick={() => handleMenuItemClick("/Photos")}
            >
              Photos
            </MenuItem>
            <MenuItem
              component={<Link to="/MediaVideos" />}
              icon={<img src={Images.movies} alt="demo" className="" />}
              active={activeMenuItem === "/MediaVideos"}
              onClick={() => handleMenuItemClick("/MediaVideos")}
            >
              Videos
            </MenuItem>
          </SubMenu>

          <MenuItem
            component={<Link to="/Management" />}
            icon={<img src={Images.user} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/Management"}
            onClick={() => handleMenuItemClick("/Management")}
          >
            User Management
          </MenuItem>
          <MenuItem
            component={<Link to="/Singup" />}
            icon={
              <img src={Images.setings} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Singup"}
            onClick={() => handleMenuItemClick("/Singup")}
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
    </aside>
  );
}

export default Sider;
