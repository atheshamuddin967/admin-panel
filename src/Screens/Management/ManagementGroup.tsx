import User from "../../Data/User";
import Images from "../../images/Images";
import ManagementGroupTable from "../../components/ManagementGroupTable";
import ManagementGroupHeader from "../../components/ManagementGroupHeader";
import "../Management/Management.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function ManagementGroup() {
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
            <ManagementGroupHeader openform={openform} />
          </div>
        </div>
        <div className="managementTables">
          <ManagementGroupTable data={User} bg={"#ffff"} icon={Images.group} />
        </div>
        {openForm && (
          <div className="asingform">
            <div className="asinglayout">
              <h5>Create Group</h5>
              <div className="asinginputs">
                <input type="text" placeholder="Group Name" />
              </div>
              <div className="asinginputs">
                <input type="text" placeholder="Role" />
              </div>
              <div className="asinginputs">
                <CiSearch className="serches" />
                <input type="text" placeholder="Add Members" />
              </div>
              <div className="asingbtns">
                <button>Create Group</button>
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

export default ManagementGroup;
