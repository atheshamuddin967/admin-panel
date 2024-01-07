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
  const [antadaptor,setAntAdaptor]:any = useState(null);

  useEffect(() => {
    const webRTCAdaptor: any = new WebRTCAdaptor({
      // bappmedia.creativeaid.it:5443/WebRTCAppEE
      websocket_url: "ws://bappmedia.creativeaid.it:5080/WebRTCAppEE/websocket",
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
    setAntAdaptor(webRTCAdaptor);
  
  },[])

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
    return group?.parols?.some(
      (user: any) => user?.assignedDevice?.emergency_enabled
    );
  };
  // console.log(datas);
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
      console.log('event detected')
      const { group } = data;
      console.log(group?._id)
      if(antadaptor) {
        antadaptor.play(group?._id);
      }
      // alert(group._id);
      // antadaptor.play(group._id);
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
  }, [isDropdownOpen,antadaptor]);

  // Sort groups based on emergency_enabled status
  const sortedGroups = [...(datas?.groups || [])].sort(
    (groupA: any, groupB: any) => {
      const hasEmergencyA = isGroupEmergency(groupA);
      const hasEmergencyB = isGroupEmergency(groupB);

      // Sort in descending order so that groups with emergency-enabled users come first
      return hasEmergencyB - hasEmergencyA;
    }
  );

  const playAudioSt = () => {
    try {
      antadaptor.play("659740f87dc9a16dbb19265a");
    }
    catch (e) {
      console.log(e);
    }
  }
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
                      {/* <iframe
                        src={`https://bappmedia.creativeaid.it:5443/WebRTCAppEE/play.html?id=659740f87dc9a16dbb19265a`}
                        width="50%"
                        height="50%"
                        frameBorder="0"
                        id="remoteVideo"
                      ></iframe> */}
                      <video
                        id="remoteVideo"
                        autoPlay
                        width="30%"
                        style={{borderWidth:2}}
                        height="20%"
                        // source="https://bappmedia.creativeaid.it:5443/WebRTCAppEE/play.html?id=659740f87dc9a16dbb19265a"
                      />
                      <p>
                        <span>
                          <FaLocationDot />
                        </span>
                        {item?.groupName}
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
                    <p> {item?.parols?.length}</p>

                    <img src={Images.connector} alt="" />
                    <p>
                      {
                        item?.parols?.filter(
                          (user: { isOnline: boolean }) => user.isOnline
                        ).length
                      }
                    </p>
                    {isGroupEmergency(item) && (
                      <span className="danger">
                        <CgDanger />
                        {
                          item?.parol?.assignedDevice?.filter(
                            (user: { emergency_enabled: boolean }) =>
                              user.emergency_enabled
                          ).length
                        }
                      </span>
                    )}
                    <div className="mic">
                      <button className="micbtn">
                        <CiMicrophoneOn
                          onClick={playAudioSt}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                {isDropdownOpen === item._id && (
                  <ul className="zoneul">
                    {item?.parols?.map((user: any) => (
                      <li key={user._id}>
                        {user.isOnline &&
                          !user?.assignedDevice?.emergency_enabled && (
                            <img src={Images.Greens} alt="Not Emergency" />
                          )}
                        {user?.assignedDevice?.emergency_enabled && (
                          <img src={Images.red} alt="Emergency" />
                        )}
                        {!user?.isOnline &&
                          !user?.assignedDevice?.emergency_enabled && (
                            <img src={Images.conected} alt="Not Emergency" />
                          )}
                        <span
                          className={classNames({
                            greens:
                              user?.isOnline &&
                              !user?.assignedDevice?.emergency_enabled,
                            grays:
                              !user?.isOnline &&
                              !user?.assignedDevice?.emergency_enabled,
                            reds: user?.assignedDevice?.emergency_enabled,
                          })}
                        >
                          #{user.name || user.name}{" "}
                          {item?.currentlySpeaking === user?._id && (
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
