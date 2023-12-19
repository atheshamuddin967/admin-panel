import { FaChevronDown } from "react-icons/fa";
import Input from "../../src/components/Input";
import Images from "../images/Images";
import classNames from "classnames";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";

import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";

import { webRTCAdaptor } from "./AntMedia";
import Movingbtn from "./Movingbtn";
function Operationsider({ openAudio, data }: any) {
  const [isDropdownOpen, setDropdownOpen] = useState<string | boolean>(false);

  const toggleDropdown = (item: any) => {
    if (isDropdownOpen !== item.groupName) {
      setDropdownOpen(item.groupName);
    } else if (isDropdownOpen === item.groupName) {
      setDropdownOpen(false);
    }
  };

  const datas: any = data;
  const isGroupEmergency = (group: any) => {
    return group.users.some((user: any) => user.emergency_enabled);
  };

  const startptd = () => {
    webRTCAdaptor.publish("ehtisham");
  };
  // Sort groups based on emergency_enabled status
  const sortedGroups = [...(datas?.groups || [])].sort(
    (groupA: any, groupB: any) => {
      const hasEmergencyA = isGroupEmergency(groupA);
      const hasEmergencyB = isGroupEmergency(groupB);

      // Sort in descending order so that groups with emergency-enabled users come first
      return hasEmergencyB - hasEmergencyA;
    }
  );

  return (
    <div className="sidesoprations">
      <div className="fstlay">
        <div className="secondlayout">
          <Input />
          {sortedGroups?.map((item: any) => (
            <div
              key={item.groupName}
              className="droplaout"
              onClick={() => {
                toggleDropdown(item);
              }}
            >
              <React.Fragment>
                <div
                  className={classNames("drop", {
                    "": isGroupEmergency(item),
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

                    <FaChevronDown
                      onClick={() => {
                        toggleDropdown(item);
                      }}
                    />
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
                    {isGroupEmergency(item) && (
                      <span className="danger">
                        <CgDanger />
                        {
                          item.users.filter(
                            (user: { emergency_enabled: boolean }) =>
                              user.emergency_enabled
                          ).length
                        }
                      </span>
                    )}
                    <div className="mic">
                      <button className="micbtn" onClick={startptd}>
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
                          #{user.name || user.name}{" "}
                          {item.currentlySpeaking === user._id && (
                            <div className="play">
                              <Movingbtn />
                              <button
                                className=""
                                onClick={() => openAudio(item)}
                              >
                                <FaPlay />
                              </button>
                            </div>
                          )}
                          <br />
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
