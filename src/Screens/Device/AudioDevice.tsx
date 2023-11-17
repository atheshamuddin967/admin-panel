import DeviceTable from "../../components/DeviceTable";

import FormsVehicle from "../../components/FormsVehicle";
import Images from "../../images/Images";
import { useState } from "react";
import Items from "../../Data/ItemData";
import DeviceHeader from "../../components/DeviceHedaer";
import "../Device/Device.scss";
function AudioDevice() {
  const video = Items.filter((item) => item.type === "audio device");

  const [open, SetOpen] = useState(false);
  const [openEdit, SetOpenEdit] = useState(false);
  const openmodal = () => {
    SetOpen(true);
  };

  const closemodal = () => {
    SetOpen(false);
  };
  const openmodalEdit = () => {
    SetOpenEdit(true);
  };

  const closemodalEdit = () => {
    SetOpenEdit(false);
  };

  return (
    <div>
      <DeviceHeader openmodal={openmodal} openmodalEdit={openmodalEdit} />
      <div className="device-Table">
        <DeviceTable data={video} icon={Images.mic} bg={"#DBFAFC"} />
      </div>
      {open && (
        <div className="formsVehicle">
          <FormsVehicle
            buttonlabel={"Add"}
            label1={"Device Id :"}
            label2={"Device type : "}
            label3={"Gps :"}
            label4={"Vehicle Operator :"}
            placeholder1={"Abc-001"}
            placeholder2={"12345"}
            placeholder3={"55456"}
            placeholder4={"josh"}
            closemodal={closemodal}
          />
        </div>
      )}

      {openEdit && (
        <div className="formsVehicle">
          <FormsVehicle
            buttonlabel={"Edit"}
            label1={"Device Id :"}
            label2={"Device type : "}
            label3={"Gps :"}
            label4={"Vehicle Operator :"}
            placeholder1={"Abc-001"}
            placeholder2={"12345"}
            placeholder3={"55456"}
            placeholder4={"josh"}
            closemodal={closemodalEdit}
          />
        </div>
      )}
    </div>
  );
}

export default AudioDevice;