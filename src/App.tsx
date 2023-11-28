import {
  // Outlet,
  // RouterProvider,
  Link,
  // Router,
  Routes,
  Route,
} from "react-router-dom";
// import Sider from "./components/Sider";
import Dashboard from "./Screens/Dashboard/Dashboard";
import "./styles/global.scss";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Operations from "./Screens/Operations/Operations";
import Monitoring from "./Screens/Monitoring/Monitoring";
import Mapview from "./Screens/Mapview/Mapview";
import Alarms from "./Screens/Alarms/Alarms";
import Stream from "./Screens/Stream/Stream";
import MotionAlarms from "./Screens/Alarms/MotionAlarms";
import Lisence from "./Screens/Alarms/Lisence";
import Juricdiction from "./Screens/Alarms/Juricdiction";
import VehiclePlates from "./Screens/Vehicle/Plates";
import Vehicle from "./Screens/Vehicle/Vehicle";
import Block from "./Screens/Vehicle/Block";
import Device from "./Screens/Device/Device";
import VideoDevice from "./Screens/Device/VideoDevice";
import AudioDevice from "./Screens/Device/AudioDevice";
import TrackingDevice from "./Screens/Device/TrackingDevice";
import Event from "./Screens/Events/Event";
import Media from "./Screens/Media/Media";
import Photos from "./Screens/Media/Photos";
import Mediavideos from "./Screens/Media/mediavideos";
import Management from "./Screens/Management/management";
import ManagementGroup from "./Screens/Management/ManagementGroup";
import Images from "./images/Images";
import Login from "./Screens/Login/Login";
import Singup from "./Screens/Login/Singup";
import SearchScreeen from "./Screens/Search/SearchScreeen";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useState } from "react";
import "../src/styles/global.scss";
import Navbar from "./components/Navbar";
import SettingScreen from "./Screens/Settings/SettingScreen";
import Messages from "./Screens/Messages/Messages";
import Operations2 from "./Screens/Operations/Operations2";
import Operations3 from "./Screens/Operations/Operations3";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState("/Operators");
  // const [openSubMenu, setOpenSubMenu] = useState(null);
  const handleMenuItemClick = (path: any) => {
    setActiveMenuItem(path);
    // if (!collapsed) {
    //   collapseSidebar();
    // }
  };

  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <div
      style={{
        display: "flex",
        height: "100dvh",
      }}
      className="main"
    >
      <Sidebar className="menuContainer" backgroundColor="">
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
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <img src={Images.logo} alt="logo" className="logs" />
          </MenuItem>
          <MenuItem
            component={<Link to="/Dashboard" />}
            icon={
              <img src={Images.Dashboard} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Dashboard"}
            onClick={() => handleMenuItemClick("/Dashboard")}
          >
            <Link to="/Dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem
            component={<Link to="/Search" />}
            icon={<img src={Images.serach} alt="demo" className="icons-side" />}
            active={activeMenuItem === "/Search"}
            onClick={() => handleMenuItemClick("/Search")}
          >
            Search
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
            active={activeMenuItem === "/Stream"}
            onClick={() => handleMenuItemClick("/Stream")}
          >
            Stream
          </MenuItem>
          <SubMenu
            component={<Link to="/Alarm" />}
            label="Alarm"
            icon={
              <img
                src={Images.notification}
                alt="demo"
                className="icons-side"
              />
            }
            active={activeMenuItem === "/Alarm"}
            onClick={() => handleMenuItemClick("/Alarm")}
          >
            <MenuItem
              component={<Link to="/alarm" />}
              icon={<img src={Images.semergency} alt="demo" className="" />}
              active={activeMenuItem === "/Alarm"}
              onClick={() => handleMenuItemClick("/Alarm")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Emergency
            </MenuItem>
            <MenuItem
              component={<Link to="/MotionAlarm" />}
              icon={<img src={Images.scam} alt="demo" className="" />}
              active={activeMenuItem === "/MotionAlarm"}
              onClick={() => handleMenuItemClick("/MotionAlarm")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Motion Detection{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="/Lisence" />}
              icon={<img src={Images.slisence} alt="demo" className="" />}
              active={activeMenuItem === "/Lisence"}
              onClick={() => handleMenuItemClick("/Lisence")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              License plate Alerts
            </MenuItem>

            <MenuItem
              component={<Link to="/Juricdiction" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
              active={activeMenuItem === "/Juricdiction"}
              onClick={() => handleMenuItemClick("/Juricdiction")}
              style={{ backgroundColor: "#EDEDED" }}
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
              style={{ backgroundColor: "#EDEDED" }}
            >
              Plates
            </MenuItem>
            <MenuItem
              component={<Link to="/Block" />}
              icon={<img src={Images.block} alt="demo" className="" />}
              active={activeMenuItem === "/Block"}
              onClick={() => handleMenuItemClick("/Block")}
              style={{ backgroundColor: "#EDEDED" }}
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
              style={{ backgroundColor: "#EDEDED" }}
            >
              Video
            </MenuItem>
            <MenuItem
              component={<Link to="/AudioDevice" />}
              icon={<img src={Images.audiosvg} alt="demo" className="" />}
              active={activeMenuItem === "/AudioDevice"}
              onClick={() => handleMenuItemClick("/AudioDevice")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Audio
            </MenuItem>
            <MenuItem
              component={<Link to="/TrackingDevice" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
              active={activeMenuItem === "/TrackingDevice"}
              onClick={() => handleMenuItemClick("/TrackingDevice")}
              style={{ backgroundColor: "#EDEDED" }}
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
            icon={<img src={Images.media2} alt="demo" className="icons-side" />}
            component={<Link to="/Media" />}
            active={activeMenuItem === "/Media"}
            onClick={() => handleMenuItemClick("/Media")}
          >
            <MenuItem
              component={<Link to="/Photos" />}
              icon={<img src={Images.photos} alt="demo" className="" />}
              active={activeMenuItem === "/Photos"}
              onClick={() => handleMenuItemClick("/Photos")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Photos
            </MenuItem>
            <MenuItem
              component={<Link to="/MediaVideos" />}
              icon={<img src={Images.movies} alt="demo" className="" />}
              active={activeMenuItem === "/MediaVideos"}
              onClick={() => handleMenuItemClick("/MediaVideos")}
              style={{ backgroundColor: "#EDEDED" }}
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
            component={<Link to="/Settings" />}
            icon={
              <img src={Images.setings} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Settings"}
            onClick={() => handleMenuItemClick("/Settings")}
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
      <section className={`contentcontainer  ${collapsed ? "expanded " : ""}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Singup />} />,
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Operators" element={<Operations />} />
          <Route path="/Monitoring" element={<Monitoring />} />
          <Route path="/Map/:item?" element={<Mapview />} />
          <Route path="/Alarm" element={<Alarms />} />
          <Route path="/Stream" element={<Stream />} />
          <Route path="/MotionAlarm" element={<MotionAlarms />} />
          <Route path="/Lisence" element={<Lisence />} />
          <Route path="/Juricdiction" element={<Juricdiction />} />
          <Route path="/VehiclePlates" element={<VehiclePlates />} />
          <Route path="/Vehicle" element={<Vehicle />} />
          <Route path="/Block" element={<Block />} />
          <Route path="/Device" element={<Device />} />
          <Route path="/VideoDevice" element={<VideoDevice />} />
          <Route path="/AudioDevice" element={<AudioDevice />} />
          <Route path="/TrackingDevice" element={<TrackingDevice />} />
          <Route path="/Events" element={<Event />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/MediaVideos" element={<Mediavideos />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/ManagementGroup" element={<ManagementGroup />} />
          <Route path="/Search" element={<SearchScreeen />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Singup" element={<Singup />} />
          <Route path="/Operations2" element={<Operations2 />} />
          <Route path="/Operations3" element={<Operations3 />} />
          <Route path="/Settings/*" element={<SettingScreen />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
