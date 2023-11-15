import {
  // BrowserRouter as Router,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Home/Home";
import Sider from "./components/Sider";
import Dashboard from "./Screens/Dashboard/Dashboard";
import "./styles/global.scss";
import Navbar from "./components/Navbar";
import Operations from "./Screens/Operations/Operations";
import Monitoring from "./Screens/Monitoring/Monitoring";
import Mapview from "./Screens/Mapview/Mapview";
import Alarms from "./Screens/Alarms/Alarms";
import Stream from "./Screens/Stream/Stream";
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="containers">
          <div className="menuContainer">
            <Sider />
          </div>
          <div className="contentContainer">
            <Outlet />
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
        { path: "/", element: <Home /> },
        { path: "/Dashboard", element: <Dashboard /> },
        { path: "/Operators", element: <Operations /> },
        { path: "/Monitoring", element: <Monitoring /> },
        { path: "/Map", element: <Mapview /> },
        { path: "/Alarm", element: <Alarms /> },
        { path: "/Stream", element: <Stream /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
