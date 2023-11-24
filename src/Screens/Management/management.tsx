import ManagementTable from "../../components/ManagementTable";
import ManagementHeader from "./managementHeader";
import User from "../../Data/User";
import Images from "../../images/Images";
import "../Management/Management.scss";
function Management() {
  return (
    <div>
      <div className="container">
        <div className="managment-main">
          <div className="shead">
            <ManagementHeader />
          </div>
        </div>
        <div className="managementTables">
          <ManagementTable data={User} bg={"#fff"} icon={Images.proficon} />
        </div>
      </div>
    </div>
  );
}

export default Management;
