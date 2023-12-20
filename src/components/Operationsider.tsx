import { FaChevronDown } from "react-icons/fa";
import Input from "../../src/components/Input";
import Images from "../images/Images";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CgDanger } from "react-icons/cg";

import { MdEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
import { socket } from "../context/SoccketIo";
// import { webRTCAdaptor } from "./AntMedia";
import Movingbtn from "./Movingbtn";

import { WebRTCAdaptor } from "@antmedia/webrtc_adaptor";

function Operationsider({ data }: any) {
  const webRTCAdaptor: any = new WebRTCAdaptor({
    websocket_url: "ws://66.135.24.9:5080/WebRTCAppEE/websocket",
    mediaConstraints: {
      audio: true,
    },

    peerconnection_config: {
      iceServers: [
        {
          urls: "stun:s1.hostin.one:5349",
        },
        {
          urls: "turn:s1.hostin.one:5349",
          username: "bammin",
          credential: "q)TBn%T1.7$MCubuF1",
        },
      ],
    },
    sdp_constraints: {
      OfferToReceiveAudio: false,
      OfferToReceiveVideo: false,
    },
    localVideoId: "id-of-video-element",
    remoteVideoElement: document.getElementById("remoteVideo"),
  });

  const [isDropdownOpen, setDropdownOpen] = useState<string | boolean>(false);
  // const [dropItme, setDropIttem] = useState<any>();
  const toggleDropdown = (item: any) => {
    if (isDropdownOpen !== item._id) {
      setDropdownOpen(item._id);

      // setDropIttem(item._id);
    } else if (isDropdownOpen === item._id) {
      setDropdownOpen(false);
      // setDropIttem(null);
    }
  };

  const datas: any = data;
  const isGroupEmergency = (group: any) => {
    return group.users.some((user: any) => user.emergency_enabled);
  };

  // const startPttForGroup = (group: any) => {
  //   const speakingUserId = group.currentlySpeaking;
  //   if (speakingUserId) {
  //     console.log("startPttForGroup - speakingUserId:", speakingUserId);
  //     setDropIttem(speakingUserId);
  //     webRTCAdaptor.publish(speakingUserId);
  //     // You might want to trigger playback for the user in the open group here if needed
  //   }
  // };

  // const handlePttDetection = (data: any) => {
  //   const { group, speakingUser, isSpeaking } = data;
  //   // console.log(speakingUser);
  //   if (isDropdownOpen == group?._id) {
  //     alert("same grou");
  //   }
  // };

  useEffect(() => {
    socket.on("ptt-detection-admin", (data) => {
      const { group } = data;
      // alert(group._id);

      webRTCAdaptor.play(group._id);
      // console.log(dropItme == group._id, dropItme, group._id, isDropdownOpen);

      // if (isDropdownOpen == dropItme && dropItme == group?._id) {
      //   console.log("object");
      //   if (isSpeaking) {
      //     webRTCAdaptor.play(group?._id);
      //   } else {
      //     webRTCAdaptor.stop(group?._id);
      //   }
      //   console.log(dropItme);

      //   console.log("playing");
      // }
    });

    // return () => {
    //   socket.off("ptt-detection-admin", handlePttDetection);
    // };
  }, [isDropdownOpen]);

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
              key={item._id}
              className="droplaout"
              onClick={() => {
                // startPttForGroup(item);
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
                      <video
                        id="remoteVideo"
                        autoPlay
                        width="1"
                        height="1"
                      ></video>
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
                      <button className="micbtn">
                        <CiMicrophoneOn />
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                {isDropdownOpen === item._id && (
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
                              <button className="">
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
