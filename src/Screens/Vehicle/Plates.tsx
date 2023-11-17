import VehicleHeaderPlates from "../../components/VehiclePlatesHeader";
import VehiclePlatesTable from "../../components/VhuiclePlatesTable";
import Items from "../../Data/ItemData";
import Images from "../../images/Images";
import { useState } from "react";
import FormsVehicle from "../../components/FormsVehicle";
function VehiclePlates() {
  const [open, SetOpen] = useState(false);
  const [openEdit, SetOpenEdit] = useState(false);
  const openmodal = () => {
    SetOpen(true);
  };

  const closemodal = () => {
    SetOpen(false);
  };
  const openmodalblock = () => {
    SetOpenEdit(true);
  };

  const closemodalEdit = () => {
    SetOpenEdit(false);
  };

  return (
    <div>
      <VehicleHeaderPlates
        openmodal={openmodal}
        openmodalblock={openmodalblock}
      />
      <div className="vehicle-table">
        <VehiclePlatesTable data={Items} bg={"#ECECEC"} icon={Images.palte} />
      </div>
      {open && (
        <div className="formsVehicle">
          <FormsVehicle
            buttonlabel={"Add"}
            label1={"Plate Number :"}
            label2={"Vehicle Type"}
            label3={"Gps :"}
            label4={"Vehicle Operator :"}
            placeholder1={"P7-001"}
            placeholder2={"Heavy"}
            placeholder3={"55456"}
            placeholder4={"josh"}
            closemodal={closemodal}
          />
        </div>
      )}

      {openEdit && (
        <div className="formsVehicle">
          <FormsVehicle
            buttonlabel={"Block"}
            label1={"Plate Number :"}
            label2={"Vehicle Id: "}
            label3={"Operator Name :"}
            label4={"Reason:"}
            placeholder1={"Abc-001"}
            placeholder2={"12345"}
            placeholder3={"josh"}
            placeholder4={"xyz"}
            closemodal={closemodalEdit}
          />
        </div>
      )}
    </div>
  );
}

export default VehiclePlates;
