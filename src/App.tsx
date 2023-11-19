import {
  // BrowserRouter as Router,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import Home from "./Home/Home";
import Sider from "./components/Sider";
import Dashboard from "./Screens/Dashboard/Dashboard";
import "./styles/global.scss";
import Navbar from "./components/Navbar";
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
// import { useState, createContext} from "react";
// const AppContext = createContext({
//   selectedOption: "",
//   setSelectedOption: (value:any) => void{},
// });
function App() {
  // const [selectedOption, setSelectedOption] = useState("User");
  // const contextValue = { selectedOption, setSelectedOption };
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="containers">
          <div className="menuContainer">
            <Sider />
          </div>
          <div className="contentContainer">
            {/* <AppContext.Provider value={contextValue}> */}
            <Outlet />
            {/* </AppContext.Provider> */}
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/Dashboard", element: <Dashboard /> },
        { path: "/Operators", element: <Operations /> },
        { path: "/Monitoring", element: <Monitoring /> },
        { path: "/Map/:item?", element: <Mapview /> },
        { path: "/Alarm", element: <Alarms /> },
        { path: "/Stream", element: <Stream /> },
        { path: "/MotionAlarm", element: <MotionAlarms /> },
        { path: "/Lisence", element: <Lisence /> },
        { path: "/Juricdiction", element: <Juricdiction /> },
        { path: "/VehiclePlates", element: <VehiclePlates /> },
        { path: "/Vehicle", element: <Vehicle /> },
        { path: "/Block", element: <Block /> },
        { path: "/Device", element: <Device /> },
        { path: "/VideoDevice", element: <VideoDevice /> },
        { path: "/AudioDevice", element: <AudioDevice /> },
        { path: "/TrackingDevice", element: <TrackingDevice /> },
        { path: "/Events", element: <Event /> },
        { path: "/Media", element: <Media /> },
        { path: "/Photos", element: <Photos /> },
        { path: "/MediaVideos", element: <Mediavideos /> },
        { path: "/Management", element: <Management /> },
        { path: "/ManagementGroup", element: <ManagementGroup /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
