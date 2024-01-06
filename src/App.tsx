import { Link, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Screens/Dashboard/Dashboard";
import "./styles/global.scss";
import { FaCar } from "react-icons/fa";
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

import SearchScreeen from "./Screens/Search/SearchScreeen";
import Loby from "./Screens/Loby/Loby";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { useEffect, useState } from "react";
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
import MediaAudio from "./Screens/Media/MediaAudio";
import { TbMapPinOff } from "react-icons/tb";
import { MdCarCrash } from "react-icons/md";
import { MdSensors } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { TbDeviceComputerCamera } from "react-icons/tb";
import beepSound from "./images/beepsound.mp3";
import notiSound from "./images/notisound.mp3";
function App() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [notificationSound] = useState(new Audio(notiSound));
  const [EmergencySound] = useState(new Audio(beepSound));

  useEffect(() => {
    collapseSidebar();

    if (location.pathname === "/Operations2") {
      collapseSidebar(true);
    } else {
      collapseSidebar(false);
    }
  }, [location.pathname, collapseSidebar]);
  const playNotificationSound = () => {
    // Set the volume level if needed (value between 0 and 1)
    notificationSound.volume = 0.1;

    // Play the notification sound
    notificationSound.play();
  };

  const playEmergencySound = () => {
    // Set the volume level if needed (value between 0 and 1)
    EmergencySound.volume = 0.1;

    // Play the notification sound
    EmergencySound.play();
  };

  const notifyAdmin = (msg: any) => {
    playNotificationSound();
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 6000,
    });
  };
  const notifyAdminerror = (msg: any) => {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 6000,
    });
  };

  const { setMyUser } = useUser();
  const {
    data,
    eventData,
    multimediaData,
    liveAlarmData,
    dispatch,
    admin,
    fetchMultimediaData,
    fetchEventData,
  } = useApi();
  const datas: any = data;
  const Admins: any = admin;
  const livealarm: any = liveAlarmData;
  const event: any = eventData;
  const media: any = multimediaData;
  useEffect(() => {
    socket.on("admin-message-recieved", (data: any) => {
      notifyAdmin(data.message);
      playNotificationSound();
      // console.log("admin-message-recived:", data.message);
    });
    socket.on("streaming-updated", (socketUser) => {
      console.log("Received message:", socketUser);
      playNotificationSound();
      const userIndex = datas.users.findIndex(
        (user: any) => user._id === socketUser._id
      );

      if (userIndex !== -1) {
        const updatedMyUserArray: any = [...datas.users];
        updatedMyUserArray[userIndex] = socketUser;

        setMyUser(updatedMyUserArray);
      }
    });

    socket.on("livealarm-detected", (data: any) => {
      notifyAdminerror(data.message);
      playEmergencySound();
      console.log("line 104", livealarm);
      // fetchLiveAlarmData();
      const receivedAlarmType = data.alarmType;
      const updatedLiveAlarm: any = { ...liveAlarmData }; // Create a copy of the existing state

      if (receivedAlarmType === "Emergency") {
        console.log("line 108 called");

        updatedLiveAlarm.emergency = [...livealarm.emergency, data];
      } else if (receivedAlarmType === "Motion Detection") {
        console.log("line 112 called");
        updatedLiveAlarm.mdAlarms = [...livealarm.mdAlarms, data];
      } else if (receivedAlarmType === "ANPR") {
        console.log("line 117 called");
        updatedLiveAlarm.anpr = [...livealarm.anpr, data];
      } else if (receivedAlarmType === "Area of Competence") {
        console.log("line 122 called");
        updatedLiveAlarm.aoc = [...livealarm.aoc, data];
      }

      // Update the "all" array regardless of the type
      updatedLiveAlarm.all = [...livealarm.all, data];

      dispatch({
        type: "SET_LIVE_ALARMS",
        payload: updatedLiveAlarm,
      });

      console.log("Line 129", updatedLiveAlarm);

      console.log("Liene 129", liveAlarmData);
    });

    // Event listener for "event-detected"
    socket.on("event-detected", (data) => {
      notifyAdmin(data.message);
      playNotificationSound();
      fetchEventData();
      // const receivedEventType = data.eventType;
      // const updatedEvent: any = { ...eventData };
      // updatedEvent.all = [...eventData, data];

      // dispatch({
      //   type: "SET_EVENTS",
      //   payload: updatedEvent,
      // });

      // console.log("Event detected:", data);
    });

    // Event listener for "multimedia-detected"
    socket.on("multimedia-detected", (data) => {
      notifyAdmin(data.message);
      fetchMultimediaData();
      playNotificationSound();
      // const recievedMediaType = data.mediaType;
      // if (recievedMediaType == "image") {
      //   console.log("line 108 called");
      //   const updatedMedia: any = [...media.image, data];

      //   dispatch({
      //     type: "FETCH_MULTIMEDIA_SUCCESS",
      //     payload: {
      //       ...multimediaData,
      //       image: updatedMedia,
      //     },
      //   });
      // } else if (recievedMediaType == "video") {
      //   console.log("line 112 called");

      //   const updatedMedia: any = [...media.video, data];
      //   dispatch({
      //     type: "FETCH_MULTIMEDIA_SUCCESS",
      //     payload: {
      //       ...multimediaData,
      //       video: updatedMedia,
      //     },
      //   });
      // } else if (recievedMediaType == "audio") {
      //   console.log("line 117 called");

      //   const updatedMedia: any = [...media.audio, data];
      //   dispatch({
      //     type: "FETCH_MULTIMEDIA_SUCCESS",
      //     payload: {
      //       ...multimediaData,
      //       audio: updatedMedia,
      //     },
      //   });
      // }
      // const updatedMedia: any = [...media.all, data];
      // dispatch({
      //   type: "FETCH_MULTIMEDIA_SUCCESS",
      //   payload: {
      //     ...multimediaData,
      //     all: updatedMedia,
      //   },
      // });

      // Handle the multimedia-detected event, e.g., update multimedia state
      console.log("Multimedia detected:", data);
    });

    return () => {
      socket.off("streaming-updated");
      socket.off("admin-message-recieved");
      socket.off("livealarm-detected");
      socket.off("event-detected");
      socket.off("multimedia-detected");
    };
  }, [data, setMyUser]);
  const isActive = (path: string) => location.pathname === path;
  const isAuthenticated = Admins?.email;
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
                  color: active ? "#686868" : "#686868",
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
            active={isActive("/Dashboard")}
            component={<Link to="/Dashboard" />}
            icon={
              <img src={Images.Dashboard} alt="demo" className="icons-side" />
            }
            // active={activeMenuItem === "/Dashboard"}
            // onClick={() => handleMenuItemClick("/Dashboard")}
          >
            <Link to="/Dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem
            active={isActive("/Search")}
            component={<Link to="/Search" />}
            icon={<img src={Images.serach} alt="demo" className="icons-side" />}
          >
            Search
          </MenuItem>
          <MenuItem
            active={isActive("/Operations2")}
            component={<Link to="/Operations2" />}
            icon={
              <img src={Images.operations} alt="demo" className="icons-side" />
            }
          >
            Operations
          </MenuItem>
          <MenuItem
            active={isActive("/Monitoring")}
            component={<Link to="/Monitoring" />}
            icon={
              <img src={Images.monitor} alt="demo" className="icons-side" />
            }
          >
            Monitoring
          </MenuItem>
          <MenuItem
            active={isActive("/Map")}
            component={<Link to="/Map" />}
            icon={<img src={Images.map} alt="demo" className="icons-side" />}
          >
            Map View
          </MenuItem>
          <MenuItem
            active={isActive("/Stream")}
            component={<Link to="/Stream" />}
            icon={<img src={Images.straen} alt="demo" className="icons-side" />}
          >
            Stream
          </MenuItem>
          <SubMenu
            active={isActive("/Alarm")}
            component={<Link to="/Alarm" />}
            label="Alarm"
            icon={
              <img
                src={Images.notification}
                alt="demo"
                className="icons-side"
              />
            }
          >
            <MenuItem
              active={isActive("/Emergency")}
              component={<Link to="/Emergency" />}
              icon={<img src={Images.semergency} alt="demo" className="" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Emergency
            </MenuItem>
            <MenuItem
              active={isActive("/MotionAlarm")}
              component={<Link to="/MotionAlarm" />}
              icon={<TbMapPinOff className="iconsapp" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              AOC
            </MenuItem>
            <MenuItem
              active={isActive("/Lisence")}
              component={<Link to="/Lisence" />}
              icon={<MdSensors className="iconsapp" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              MD Alarms
            </MenuItem>

            <MenuItem
              active={isActive("/Juricdiction")}
              component={<Link to="/Juricdiction" />}
              icon={<MdCarCrash className="iconsapp" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              ANPR
            </MenuItem>
          </SubMenu>
          <SubMenu
            active={isActive("/Vehicle")}
            label="Vehicle"
            icon={<img src={Images.car} alt="demo" className="icons-side" />}
            component={<Link to="/Vehicle" />}
          >
            <MenuItem
              active={isActive("/VehiclePlates")}
              component={<Link to="/VehiclePlates" />}
              icon={<img src={Images.palte} alt="demo" className="" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Plates
            </MenuItem>
            <MenuItem
              active={isActive("/Block")}
              component={<Link to="/Block" />}
              icon={<img src={Images.block} alt="demo" className="" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Blocked
            </MenuItem>
          </SubMenu>
          <SubMenu
            active={isActive("/Vehicle")}
            label="Device"
            icon={<img src={Images.device} alt="demo" className="icons-side" />}
            component={<Link to="/Device" />}
          >
            <MenuItem
              active={isActive("/VideoDevice")}
              component={<Link to="/VideoDevice" />}
              icon={<BiCctv className="iconsapp" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Fixed Cam
            </MenuItem>
            <MenuItem
              active={isActive("/AudioDevice")}
              component={<Link to="/AudioDevice" />}
              icon={<FaCar className="iconsapp" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Car
            </MenuItem>
            <MenuItem
              component={<Link to="/TrackingDevice" />}
              icon={<TbDeviceComputerCamera className="iconsapp" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Scout
            </MenuItem>
          </SubMenu>

          <MenuItem
            active={isActive("/Messages")}
            component={<Link to="/Messages" />}
            icon={
              <img src={Images.messages} alt="demo" className="icons-side" />
            }
          >
            Messages
          </MenuItem>
          <MenuItem
            active={isActive("/Events")}
            component={<Link to="/Events" />}
            icon={<img src={Images.events} alt="demo" className="icons-side" />}
          >
            Events
          </MenuItem>
          <SubMenu
            active={isActive("/Media")}
            label="Media"
            icon={<img src={Images.media2} alt="demo" className="icons-side" />}
            component={<Link to="/Media" />}
          >
            <MenuItem
              active={isActive("/Photos")}
              component={<Link to="/Photos" />}
              icon={<img src={Images.photos} alt="demo" className="" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Photos
            </MenuItem>
            <MenuItem
              active={isActive("/MediaVideos")}
              component={<Link to="/MediaVideos" />}
              icon={<img src={Images.movies} alt="demo" className="" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Videos
            </MenuItem>
            <MenuItem
              active={isActive("/MediaAudio")}
              component={<Link to="/MediaAudio" />}
              icon={<img src={Images.movies} alt="demo" className="" />}
              style={{ backgroundColor: "#EDEDED" }}
            >
              Audio
            </MenuItem>
          </SubMenu>

          <MenuItem
            active={isActive("/Management")}
            component={<Link to="/Management" />}
            icon={<img src={Images.user} alt="demo" className="icons-side" />}
          >
            User Management
          </MenuItem>
          <MenuItem
            active={isActive("/Settings")}
            component={<Link to="/Settings" />}
            icon={
              <img src={Images.setings} alt="demo" className="icons-side" />
            }
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
      <section className={`contentcontainer  ${collapsed ? "expanded " : ""}`}>
        <Navbar />
        <ToastContainer />
        {/* 
        <div className="ink">
          <video
            src={Images.beep}
            controls={false}
            loop={true}
            autoPlay={true}
          />
        </div> */}

        <Routes>
          <Route path="/" element={<Login />} />,
          <Route path="/Login" element={<Login />} />
          {isAuthenticated ? (
            <>
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
              <Route path="/Operations2" element={<Operations2 />} />
              <Route path="/Operations3" element={<Operations3 />} />
              <Route path="/Settings/*" element={<SettingScreen />} />
              <Route path="/Loby" element={<Loby />} />
              <Route path="/MediaAudio" element={<MediaAudio />} />
            </>
          ) : (
            <Route path="/*" element={<Navigate to="/Login" />} />
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
