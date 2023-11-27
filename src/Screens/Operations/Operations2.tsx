import Input from "../../components/Input";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Images from "../../images/Images";
import Operationdata from "../../Data/OperationsData";
import classNames from "classnames";
import { MdRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Operations2() {
  const [isDropdownOpen, setDropdownOpen] = useState<string | boolean>(false);

  const toggleDropdown = (item: any) => {
    if (isDropdownOpen !== item.groupname) {
      setDropdownOpen(item.groupname);
    } else if (isDropdownOpen === item.groupname) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className="container">
      <div className="row space">
        <div className="col-sm-3">
          <div className="sidesopration">
            <div className="secondlayout">
              <Input />
              {Operationdata.map((item) => (
                <div
                  className="droplaout"
                  onClick={() => {
                    toggleDropdown(item);
                  }}
                >
                  <React.Fragment>
                    <div className="drop">
                      <div className="dropbtn">
                        <div>
                          <p>
                            <span>
                              <FaLocationDot />
                            </span>
                            {item.groupname}
                          </p>
                        </div>

                        <FaChevronDown />
                      </div>
                      <div className="dropbtns">
                        <img src={Images.conected} alt="" />
                        <p> {item.totalconnect}</p>

                        <img src={Images.connector} alt="" />
                        <p>{item.avilabel}</p>
                      </div>
                    </div>
                    <hr />
                    {isDropdownOpen === item.groupname && (
                      <ul className="zoneul">
                        {item.devices.map((device) => (
                          <li>
                            {device.status === "online" && (
                              <>
                                <img src={Images.Greens} alt="online" />
                              </>
                            )}
                            {device.status === "ofline" && (
                              <>
                                <img src={Images.conected} alt="Offline" />
                              </>
                            )}
                            {device.status === "emergency" && (
                              <>
                                <img src={Images.red} alt="Emergency" />
                              </>
                            )}
                            <span
                              className={classNames({
                                greens: device.status === "online",
                                grays: device.status === "ofline",
                                reds: device.status === "emergency",
                              })}
                            >
                              {device.id}
                            </span>
                            <hr />
                          </li>
                        ))}
                      </ul>
                    )}
                  </React.Fragment>
                </div>
              ))}
            </div>
            <div className="function">
              <MdEdit />
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="mapbox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795831!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1701098720721!5m2!1sen!2s"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
            <div className="searches">
              <Input placeholder={"Search Devices"} />
            </div>
          </div>

          <div className="detailing-box">
            <div className="optionss">
              <button>plates</button>
              <div className="border"></div> <button>Videos</button>
            </div>
            <div className="sperator"></div>
            <h5>Search Results</h5>
            <h6>Results From 12-5-2023 to 12-11-2023</h6>

            <div className="table-responsive">
              <table className="table table-hover text-center">
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
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default Operations2;
