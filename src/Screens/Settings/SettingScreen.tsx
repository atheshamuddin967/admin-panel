import SettingsSidder from "./SettingsSidder";
import "../Settings/Settings.scss";
import { ProSidebarProvider } from "react-pro-sidebar";

function SettingScreen() {
  return (
    <div className="settinglayout">
      <ProSidebarProvider>
        <SettingsSidder />
      </ProSidebarProvider>
    </div>
  );
}

export default SettingScreen;
