import { FaChevronDown } from "react-icons/fa";
import Input from "../../src/components/Input";
import Images from "../images/Images";
import classNames from "classnames";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useApi } from "../context/Api";
import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";

function Operationsider() {
  const [isDropdownOpen, setDropdownOpen] = useState<string | boolean>(false);

  const toggleDropdown = (item: any) => {
    if (isDropdownOpen !== item.groupName) {
      setDropdownOpen(item.groupName);
      console.log(item);
    } else if (isDropdownOpen === item.groupName) {
      setDropdownOpen(false);
    }
  };
  const { data } = useApi();
  const datas: any = data;
  const isGroupEmergency = (group: any) => {
    return group.users.some((user: any) => user.emergency_enabled);
  };
  return (
    <div className="sidesoprations">
      <div className="fstlay">
        <div className="secondlayout">
          <Input />
          {datas?.groups?.map((item: any) => (
            <div
              className="droplaout"
              onClick={() => {
                toggleDropdown(item);
              }}
            >
              <React.Fragment>
                <div
                  className={classNames("drop", {
                    "emergency-group": isGroupEmergency(item),
                  })}
                >
                  <div className="dropbtn">
                    <div>
                      <p>
                        <span>
                          <FaLocationDot />
                        </span>
                        {item.groupName}
                      </p>
                    </div>

                    <FaChevronDown />
                  </div>
                  <div className="dropbtns">
                    <img src={Images.conected} alt="" />
                    <p> {item.users.length}</p>

                    <img src={Images.connector} alt="" />
                    <p>
                      {
                        item.users.filter(
                          (user: { isOnline: boolean }) => user.isOnline
                        ).length
                      }
                    </p>
                    <div className="mic">
                      <button className="micbtn">
                        <CiMicrophoneOn />
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                {isDropdownOpen === item.groupName && (
                  <ul className="zoneul">
                    {item.users.map((user: any) => (
                      <li key={user._id}>
                        {user.isOnline && !user.emergency_enabled && (
                          <img src={Images.Greens} alt="Not Emergency" />
                        )}
                        {user.emergency_enabled && (
                          <img src={Images.red} alt="Emergency" />
                        )}
                        {!user.isOnline && !user.emergency_enabled && (
                          <img src={Images.conected} alt="Not Emergency" />
                        )}
                        <span
                          className={classNames({
                            greens: user.isOnline && !user.emergency_enabled,
                            grays: !user.isOnline && !user.emergency_enabled,
                            reds: user.emergency_enabled,
                          })}
                        >
                          #{user.deviceCode || user.device_code} <br />
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
