import Dashbox from "../../components/Dashox";
import "./Dashboard.scss";
import Data from "../../Data/Data";
import Charts from "../../components/Chart";
function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h5 className="heading">Dashboard</h5>
          </div>
        </div>
        <div className="row">
          {Data.map((data: any) => (
            <Dashbox data={data} />
          ))}
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Charts />
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
