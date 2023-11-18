import ManagementTable from "../../components/ManagementTable";
import ManagementHeader from "./managementHeader";
import User from "../../Data/User";
import Images from "../../images/Images";

function Management() {
  return (
    <div>
      <div className="container">
        <div className="managment-main">
          <ManagementHeader />
        </div>
        <div className="managementTables">
          <ManagementTable data={User} bg={"#fff"} icon={Images.proficon} />
        </div>
      </div>
    </div>
  );
}

export default Management;
