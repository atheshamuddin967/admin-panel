import Dashbox from "../../components/Dashox";
import "./Dashboard.scss";
import Data from "../../Data/Data";
import Charts from "../../components/Chart";
import Charts2 from "../../components/Chart2";
import { useApi } from "../../context/Api";
function Dashboard() {
  const { DashboardData } = useApi();
  // console.log(DashboardData);
  const data: any = DashboardData;
  // console.log(data?.data?.connectedCams);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="dash">
              <h5 className="heading">Dashboard</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <Dashbox data={data?.data?.connectedCams} title={"Connected Cams"} />
          <Dashbox
            data={data?.data?.connectedDevices}
            title={"Connected Devices"}
          />
          <Dashbox data={data?.data?.totalDevices} title={"Total Devices"} />
          <Dashbox
            data={data?.data?.totalOperators}
            title={"Total Operators"}
          />
          <Dashbox
            data={data?.data?.totalMultimedia}
            title={"Total Multimedia"}
          />
          <Dashbox data={data?.data?.totalAlarms} title={"Total Alarms"} />
          <Dashbox data={data?.data?.totalGroups} title={"Total Groups"} />
          <Dashbox data={data?.data?.supervisors} title={"Supervisors"} />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="chart-section">
              <div className="flex-box">
                <div className="month">
                  <p>
                    <span>
                      <i className="fa-solid fa-arrow-up"></i>3.46
                    </span>
                    since last month
                  </p>
                </div>
                <div className="year">
                  <p>
                    Yearly <i className="fa-solid fa-chevron-down"></i>
                  </p>
                </div>
              </div>
              <div className="chart-detail">
                <h6>Connected device</h6>
                <h5>220</h5>
              </div>
              <Charts2 />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="chart-section">
              <div className="flex-box">
                <div className="chart-detail">
                  <h6>Total</h6>
                  <h5>300</h5>
                </div>
                <div className="month">
                  <p>Impliment Device</p>
                </div>

                <div className="year">
                  <p>
                    Yearly <i className="fa-solid fa-chevron-down"></i>
                  </p>
                </div>
              </div>

              <Charts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
