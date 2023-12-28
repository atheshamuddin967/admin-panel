import DeviceTable from "../../components/DeviceTable";
import FormsVehicle from "../../components/FormsVehicle";
import Images from "../../images/Images";
import { useState } from "react";
import DeviceHeader from "../../components/DeviceHedaer";
import "../Device/Device.scss";
import { useApi } from "../../context/Api";
import DeviceForms from "../../components/DeviceForm";
function Device() {
  // const [data, setData] = useState([]);
  const { deviceData } = useApi();

  const [open, SetOpen] = useState(false);
  const [openEdit, SetOpenEdit] = useState(false);

  const data: any = deviceData;
  const alldata = data?.data?.all;
  // console.log(data.data);
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
        <DeviceHeader openmodal={openmodal} openmodalEdit={openmodalEdit} />
      </div>
      <div className="device-Table">
        <DeviceTable data={alldata} icon={Images.conected} bg={"#FCEBDB"} />
      </div>
      {open && (
        <div className="formsVehicle">
          {/* <FormsVehicle
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

export default Device;
