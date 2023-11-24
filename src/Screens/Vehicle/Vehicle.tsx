import VehicleHeader from "../../components/VehicleHeader";
import Images from "../../images/Images";
import Items from "../../Data/ItemData";
import VehicleTable from "../../components/vehicleTable";
import FormsVehicle from "../../components/FormsVehicle";
import { useState } from "react";
function Vehicle() {
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
      <div className="sheads">
        <VehicleHeader openmodal={openmodal} openmodalEdit={openmodalEdit} />
      </div>
      <div className="vehicle-table">
        <VehicleTable data={Items} icon={Images.car2} bg={"#FCEBDB"} />
      </div>
      {open && (
        <div className="formsVehicle">
          <FormsVehicle
            buttonlabel={"Add"}
            label1={"Vehicle Id :"}
            label2={"Device Id : "}
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
            label1={"Vehicle Id :"}
            label2={"Device Id : "}
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

export default Vehicle;
