import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../styles/Sidebar.scss";
import Images from "../images/Images";
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
            component={<Link to="/Dashboard" />}
            icon={
              <img src={Images.Dashboard} alt="demo" className="icons-side" />
            }
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="/Operators" />}
            icon={<img src={Images.serach} alt="demo" className="icons-side" />}
          >
            Serach
          </MenuItem>
          <MenuItem
            component={<Link to="/Operators" />}
            icon={
              <img src={Images.operations} alt="demo" className="icons-side" />
            }
          >
            Operations
          </MenuItem>
          <MenuItem
            component={<Link to="/Monitoring" />}
            icon={
              <img src={Images.monitor} alt="demo" className="icons-side" />
            }
          >
            Monitoring
          </MenuItem>
          <MenuItem
            component={<Link to="/Map" />}
            icon={<img src={Images.map} alt="demo" className="icons-side" />}
          >
            Map View
          </MenuItem>
          <MenuItem
            component={<Link to="/Stream" />}
            icon={<img src={Images.straen} alt="demo" className="icons-side" />}
          >
            Stream
          </MenuItem>
          <SubMenu
            component={<Link to="/Alarm" />}
            label="Alarm"
            icon={<img src={Images.alarm} alt="demo" className="icons-side" />}
          >
            <MenuItem
              component={<Link to="/alarm" />}
              icon={<img src={Images.semergency} alt="demo" className="" />}
            >
              Emergency
            </MenuItem>
            <MenuItem
              component={<Link to="/MotionAlarm" />}
              icon={<img src={Images.scam} alt="demo" className="" />}
            >
              Motion Detection{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="/Lisence" />}
              icon={<img src={Images.slisence} alt="demo" className="" />}
            >
              License plate Alerts
            </MenuItem>

            <MenuItem
              component={<Link to="/Juricdiction" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
            >
              Juricdiction{" "}
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Vehicle"
            icon={<img src={Images.car} alt="demo" className="icons-side" />}
            component={<Link to="/Vehicle" />}
          >
            <MenuItem
              component={<Link to="/VehiclePlates" />}
              icon={<img src={Images.palte} alt="demo" className="" />}
            >
              Plates
            </MenuItem>
            <MenuItem
              component={<Link to="/Block" />}
              icon={<img src={Images.block} alt="demo" className="" />}
            >
              Blocked
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Device"
            icon={<img src={Images.device} alt="demo" className="icons-side" />}
            component={<Link to="/Device" />}
          >
            <MenuItem
              component={<Link to="/VideoDevice" />}
              icon={<img src={Images.vediosvg} alt="demo" className="" />}
            >
              Video
            </MenuItem>
            <MenuItem
              component={<Link to="/AudioDevice" />}
              icon={<img src={Images.audiosvg} alt="demo" className="" />}
            >
              Audio
            </MenuItem>
            <MenuItem
              component={<Link to="/TrackingDevice" />}
              icon={<img src={Images.smap} alt="demo" className="" />}
            >
              Tracking
            </MenuItem>
          </SubMenu>

          <MenuItem
            component={<Link to="/documentation" />}
            icon={
              <img src={Images.messages} alt="demo" className="icons-side" />
            }
          >
            Messages
          </MenuItem>
          <MenuItem
            component={<Link to="/Events" />}
            icon={<img src={Images.events} alt="demo" className="icons-side" />}
          >
            Events
          </MenuItem>
          <SubMenu
            label="Media"
            icon={<img src={Images.media} alt="demo" className="icons-side" />}
            component={<Link to="/Media" />}
          >
            <MenuItem
              component={<Link to="/Photos" />}
              icon={<img src={Images.photos} alt="demo" className="" />}
            >
              Photos
            </MenuItem>
            <MenuItem
              component={<Link to="/MediaVideos" />}
              icon={<img src={Images.movies} alt="demo" className="" />}
            >
              Videos
            </MenuItem>
          </SubMenu>

          <MenuItem
            component={<Link to="/Management" />}
            icon={<img src={Images.user} alt="demo" className="icons-side" />}
          >
            User Management
          </MenuItem>
          <MenuItem
            component={<Link to="/Management" />}
            icon={
              <img src={Images.setings} alt="demo" className="icons-side" />
            }
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
    </aside>
  );
}

export default Sider;
