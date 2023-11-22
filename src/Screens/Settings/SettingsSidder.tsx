import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Images from "../../images/Images";
import { Route, Routes, Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserRole from "./UserRole";
import NotifictionSetting from "./NotifictionSetting";
import MediaSettings from "./MediaSettings";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import UserPreference from "./UserPreference";
import Security from "./Security";
import SystemInfo from "./SystemInfo";
function SettingsSidder() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="layout">
      <div className="siders">
        <Sidebar className="sider">
          <Menu>
            <MenuItem
              icon={
                <MenuRoundedIcon
                  onClick={() => {
                    collapseSidebar();
                  }}
                />
              }
            >
              {" "}
              Menu
            </MenuItem>
            <MenuItem
              icon={<img src={Images.miniuser} alt="icon" />}
              component={<Link to="/Settings/UserProfile" />}
            >
              User Profile
            </MenuItem>
            <MenuItem
              icon={<img src={Images.userlock} alt="icon" />}
              component={<Link to="/Settings/UserRole" />}
            >
              Users Roles
            </MenuItem>
            <MenuItem
              icon={<img src={Images.notisetting} alt="icon" />}
              component={<Link to="/Settings/NotificationSetting" />}
            >
              Notifications
            </MenuItem>
            <MenuItem
              icon={<img src={Images.mediaset} alt="icon" />}
              component={<Link to="/Settings/MediaSetting" />}
            >
              Media Settings
            </MenuItem>
            <MenuItem
              icon={<img src={Images.userset} alt="icon" />}
              component={<Link to="/Settings/UserPreference" />}
            >
              User Preference
            </MenuItem>
            <MenuItem
              icon={<img src={Images.lock} alt="icon" />}
              component={<Link to="/Settings/Security" />}
            >
              Security
            </MenuItem>
            <MenuItem
              icon={<img src={Images.systeminfo} alt="icon" />}
              component={<Link to="/Settings/SystemInfo" />}
            >
              System Info
            </MenuItem>
          </Menu>
        </Sidebar>
        <section className="container">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="UserRole" element={<UserRole />} />
            <Route path="UserPreference" element={<UserPreference />} />
            <Route
              path="NotificationSetting"
              element={<NotifictionSetting />}
            />
            <Route path="MediaSetting" element={<MediaSettings />} />
            <Route path="Security" element={<Security />} />
            <Route path="SystemInfo" element={<SystemInfo />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default SettingsSidder;
