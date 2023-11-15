import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../styles/Sidebar.scss";
import Dashboard from "../images/dashboard.png";
import operations from "../images/operators.png";
import monitor from "../images/laptop.png";
import map from "../images/map.png";
import straen from "../images/strean.png";
import alarm from "../images/noti.png";
import car from "../images/car.png";
import device from "../images/device.png";
import messages from "../images/messages.png";
import events from "../images/events.png";
import media from "../images/media.png";
import user from "../images/management.png";
function Sider() {
  return (
    <aside>
      <Sidebar backgroundColor="#ffff">
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  // color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? "black" : undefined,
                };
            },
          }}
        >
          <MenuItem
            // className="menu-item"
            // icon={<LuLayoutDashboard />}
            component={<Link to="/Dashboard" />}
          >
            <img src={Dashboard} alt="demo" className="icons-side" />
            Dashboard
          </MenuItem>
          <MenuItem component={<Link to="/Operators" />}>
            <img src={operations} alt="demo" className="icons-side" />{" "}
            Operations
          </MenuItem>
          <MenuItem component={<Link to="/Monitoring" />}>
            <img src={monitor} alt="demo" className="icons-side" /> Monitoring
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={map} alt="demo" className="icons-side" />
            Map View
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={straen} alt="demo" className="icons-side" />
            Stream
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={alarm} alt="demo" className="icons-side" />
            Alarm
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={car} alt="demo" className="icons-side" />
            Vehicles
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={device} alt="demo" className="icons-side" />
            Device
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={messages} alt="demo" className="icons-side" />
            Messages
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={events} alt="demo" className="icons-side" />
            Events
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            {" "}
            <img src={media} alt="demo" className="icons-side" />
            Media
          </MenuItem>
          <MenuItem component={<Link to="/documentation" />}>
            <img src={user} alt="demo" className="icons-side" /> User Management
          </MenuItem>
        </Menu>
      </Sidebar>
    </aside>
  );
}

export default Sider;
