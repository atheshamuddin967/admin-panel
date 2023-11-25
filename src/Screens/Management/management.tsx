import ManagementTable from "../../components/ManagementTable";
import ManagementHeader from "./managementHeader";
import User from "../../Data/User";
import Images from "../../images/Images";
import "../Management/Management.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";

function Management() {
  const [openForm, setOpenForm] = useState(false);
  const openform = () => {
    setOpenForm(true);
  };
  const closeform = () => {
    setOpenForm(false);
  };
  return (
    <div>
      <div className="container">
        <div className="managment-main">
          <div className="shead">
            <ManagementHeader openform={openform} />
          </div>
        </div>
        <div className="managementTables">
          <ManagementTable data={User} bg={"#fff"} icon={Images.proficon} />
        </div>
        {openForm && (
          <div className="asingform">
            <div className="asinglayout">
              <h5>Asing Role</h5>
              <div className="asinginputs">
                <input type="text" placeholder="Username" />
              </div>
              <div className="asinginputs">
                <input type="text" placeholder="Role" />
              </div>
              <div className="asingbtns">
                <button>Asing Role</button>
              </div>
              <div className="closebtn">
                <button onClick={closeform}>
                  <MdClose />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Management;
