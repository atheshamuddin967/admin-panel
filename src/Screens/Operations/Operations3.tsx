import Operationsider from "../../components/Operationsider";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { CiPaperplane } from "react-icons/ci";

import Images from "../../images/Images";
function Operations3() {
  const navigate = useNavigate();
  const plates = () => {
    navigate("/Operations3");
  };
  const videos = () => {
    navigate("/Operations2");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <div className="shead">
            <Operationsider />
          </div>
        </div>
        <div className="col-sm-10">
          <div className="mapbox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795831!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1701098720721!5m2!1sen!2s"
              width="100%"
              height="250"
              loading="lazy"
            ></iframe>
            <div className="searches">
              <Input placeholder={"Search Devices"} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="detailing-box">
                <div className="results">
                  <button className="active2">Search Results</button>
                  <button>Live Events</button>
                </div>
                <div className="optionss">
                  <button className="activebtn" onClick={plates}>
                    plates
                  </button>
                  <div className="border"></div>{" "}
                  <button onClick={videos}>Videos</button>
                </div>
                <div className="sperator"></div>
                <div className="further">
                  <h5>Search Results</h5>
                  <h6>Results From 12-5-2023 to 12-11-2023</h6>

                  <div className="table-responsive">
                    <table className="table table-hover text-center optable">
                      <thead>
                        <th>Date-Time</th>
                        <th>Plate</th>
                        <th>Device Name</th>
                        <th>Avilable</th>
                      </thead>
                      <tbody>
                        <tr className="tr">
                          <td>12-6-2023-5:15pm</td>
                          <td>Abc-123 </td>
                          <td>Scout001</td>
                          <td>
                            <MdRemoveRedEye />
                          </td>
                        </tr>
                        <tr className="tr">
                          <td>12-6-2023-5:15pm</td>
                          <td>Abc-123 </td>
                          <td>Scout001</td>
                          <td>
                            <MdRemoveRedEye />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="live-messages">
                <h5 className="text-center">Live Messages</h5>
                <hr />

                <ul>
                  <li>
                    <div className="round2">
                      <img src={Images.conected} alt="" />
                    </div>
                    <div>
                      <p>
                        Device Id: <span>23545</span>
                      </p>
                      <p>
                        From: <span>Zone 01</span>
                      </p>
                    </div>

                    <div className="border"></div>
                    <h6>Mottion Detector</h6>
                    <button>
                      <CiPaperplane />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations3;
