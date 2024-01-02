import DeviceTable from "../../components/DeviceTable";

import FormsVehicle from "../../components/FormsVehicle";
import Images from "../../images/Images";
import { useState } from "react";
import { useApi } from "../../context/Api";
import DeviceForms from "../../components/DeviceForm";
// import Items from "../../Data/ItemData";
import DeviceHeader from "../../components/DeviceHedaer";
import "../Device/Device.scss";
function TrackingDevice() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const { deviceData } = useApi();
  const data: any = deviceData;
  const alldata = data?.data?.scoutCameras;

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
    <div className="container">
      <div className="shead">
        <DeviceHeader
          openmodal={openmodal}
          openmodalEdit={openmodalEdit}
          onFilterChange={(value: any) => setSelectedFilter(value)}
        />
      </div>
      <div className="device-Table">
        <DeviceTable
          data={alldata}
          icon={Images.tracking}
          bg={"#FCDBDB"}
          selectedFilter={selectedFilter}
        />
      </div>
      {open && (
        <div className="formsVehicle">
          {/* <FormsVehicle
            formtitle={"Add Device"}
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
          /> */}
          <DeviceForms closemodal={closemodal} />
        </div>
      )}

      {openEdit && (
        <div className="formsVehicle">
          <FormsVehicle
            formtitle={"Edit Device"}
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

export default TrackingDevice;
