import { Link, useNavigate, Routes, Route } from "react-router-dom";

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
import Loby from "./Screens/Loby/Loby";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useState, useEffect } from "react";
import "../src/styles/global.scss";
import Navbar from "./components/Navbar";
import SettingScreen from "./Screens/Settings/SettingScreen";
import Messages from "./Screens/Messages/Messages";
import Operations2 from "./Screens/Operations/Operations2";
import Operations3 from "./Screens/Operations/Operations3";
import { toast, ToastContainer } from "react-toastify";
import { socket } from "./context/SoccketIo";
import "react-toastify/dist/ReactToastify.css";
import { useApi } from "./context/Api";
import { useUser } from "./context/Socketprovider";
import Emergency from "./Screens/Alarms/Emergency";
function App() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [activeMenuItem, setActiveMenuItem] = useState("/Operations2");
  const navigate = useNavigate();
  const handleMenuItemClick = (path: any) => {
    setActiveMenuItem(path);
  };
  const handeloperations = (path: any) => {
    setActiveMenuItem(path);
    if (!collapsed) {
      collapseSidebar();
    }
    navigate("/Operations2");
  };

  useEffect(() => {
    collapseSidebar();

    if (location.pathname === "/Operations2") {
      collapseSidebar(true);
    } else {
      collapseSidebar(false);
    }
  }, [location.pathname, collapseSidebar]);
  const notifyUserStreaming = (msg: any) => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 6000,
    });
  };
  const { setMyUser } = useUser();
  const { data } = useApi();
  const datas: any = data;
  useEffect(() => {
    socket.on("admin-message-recieved", (data: any) => {
      notifyUserStreaming(data.message);
      console.log("admin-message-recived:", data.message);
    });
    socket.on("streaming-updated", (socketUser) => {
      console.log("Received message:", socketUser);

      const userIndex = datas.users.findIndex(
        (user: any) => user._id === socketUser._id
      );

      console.log(datas);
      if (userIndex !== -1) {
        const updatedMyUserArray: any = [...datas.users];
        updatedMyUserArray[userIndex] = socketUser;

        setMyUser(updatedMyUserArray);
      }
    });

    return () => {
      socket.off("streaming-updated");
      socket.off("admin-message-recieved");
    };
  }, [data, setMyUser]);
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
            component={<Link to="/Operations2" />}
            icon={
              <img src={Images.operations} alt="demo" className="icons-side" />
            }
            active={activeMenuItem === "/Operations2"}
            onClick={() => handeloperations("/Operations2")}
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
              component={<Link to="/Emergency" />}
              icon={<img src={Images.semergency} alt="demo" className="" />}
              active={activeMenuItem === "/Emergency"}
              onClick={() => handleMenuItemClick("/Emergency")}
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
              AOC
            </MenuItem>
            <MenuItem
              component={<Link to="/Lisence" />}
              icon={<img src={Images.slisence} alt="demo" className="" />}
              active={activeMenuItem === "/Lisence"}
              onClick={() => handleMenuItemClick("/Lisence")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              mdAlarms
            </MenuItem>

            <MenuItem
              component={<Link to="/Juricdiction" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
              active={activeMenuItem === "/Juricdiction"}
              onClick={() => handleMenuItemClick("/Juricdiction")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              ANPR
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
              Fixed Cam
            </MenuItem>
            <MenuItem
              component={<Link to="/AudioDevice" />}
              icon={<img src={Images.audiosvg} alt="demo" className="" />}
              active={activeMenuItem === "/AudioDevice"}
              onClick={() => handleMenuItemClick("/AudioDevice")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Car
            </MenuItem>
            <MenuItem
              component={<Link to="/TrackingDevice" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
              active={activeMenuItem === "/TrackingDevice"}
              onClick={() => handleMenuItemClick("/TrackingDevice")}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Scout
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
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Singup />} />,
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Operators" element={<Operations />} />
          <Route path="/Monitoring" element={<Monitoring />} />
          <Route path="/Map/:item?" element={<Mapview />} />
          <Route path="/Alarm" element={<Alarms />} />
          <Route path="/Emergency" element={<Emergency />} />
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
          <Route path="/Loby" element={<Loby />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
