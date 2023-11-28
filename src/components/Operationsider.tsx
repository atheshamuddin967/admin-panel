import { FaChevronDown } from "react-icons/fa";
import Input from "../../src/components/Input";
import Images from "../images/Images";
import Operationdata from "../../src/Data/OperationsData";
import classNames from "classnames";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
function Operationsider() {
  const [isDropdownOpen, setDropdownOpen] = useState<string | boolean>(false);

  const toggleDropdown = (item: any) => {
    if (isDropdownOpen !== item.groupname) {
      setDropdownOpen(item.groupname);
    } else if (isDropdownOpen === item.groupname) {
      setDropdownOpen(false);
    }
  };
  return (
    <div className="sidesoprations">
      <div className="fstlay">
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
        <div className="functions">
          <MdEdit className="ficon" />
          <IoMdAdd className="ficon" />
          <FaRegTrashAlt className="ficon" />
        </div>
      </div>
    </div>
  );
}

export default Operationsider;
