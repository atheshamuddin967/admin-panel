import User from "../../Data/User";
import Images from "../../images/Images";
import ManagementGroupTable from "../../components/ManagementGroupTable";
import ManagementGroupHeader from "../../components/ManagementGroupHeader";

function ManagementGroup() {
  return (
    <div>
      <div className="container">
        <div className="managment-main">
          <ManagementGroupHeader />
        </div>
        <div className="managementTables">
          <ManagementGroupTable data={User} bg={"#ffff"} icon={Images.group} />
        </div>
      </div>
    </div>
  );
}

export default ManagementGroup;
