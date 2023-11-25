import Dashbox from "../../components/Dashox";
import "./Dashboard.scss";
import Data from "../../Data/Data";
import Charts from "../../components/Chart";
import Charts2 from "../../components/Chart2";
function Dashboard() {
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
          {Data.map((data: any) => (
            <Dashbox data={data} />
          ))}
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
