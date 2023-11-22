import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Images from "../../images/Images";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserRole from "./UserRole";
import NotifictionSetting from "./NotifictionSetting";
import MediaSettings from "./MediaSettings";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
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
              //   component={<Link to="/UserProfile" />}
            >
              <Link to="/Settings/UserProfile">User Profile</Link>
            </MenuItem>
            <MenuItem
              icon={<img src={Images.userlock} alt="icon" />}
              //   component={<Link to="/UserRole" />}
            >
              <Link to="/Settings/UserRole">Users Roles</Link>
            </MenuItem>
            <MenuItem icon={<img src={Images.notisetting} alt="icon" />}>
              <Link to="/Settings/NotificationSetting">Notifications</Link>
            </MenuItem>
            <MenuItem icon={<img src={Images.mediaset} alt="icon" />}>
              <Link to="/Settings/MediaSetting">Media Settings</Link>
            </MenuItem>
            <MenuItem icon={<img src={Images.userset} alt="icon" />}>
              User Preference
            </MenuItem>
            <MenuItem icon={<img src={Images.lock} alt="icon" />}>
              Security
            </MenuItem>
            <MenuItem icon={<img src={Images.systeminfo} alt="icon" />}>
              System Info
            </MenuItem>
          </Menu>
        </Sidebar>
        <section className="container">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="UserRole" element={<UserRole />} />
            <Route
              path="NotificationSetting"
              element={<NotifictionSetting />}
            />
            <Route path="MediaSetting" element={<MediaSettings />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default SettingsSidder;
