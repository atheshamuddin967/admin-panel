import "../styles/global.scss";
import { IoClose } from "react-icons/io5";
import moment from "moment";
import InfoBoxMap from "./infoBoxMap";

import ReactPlayer from "react-player";
import Images from "../images/Images";
function Infobox({ data, closeinfobox, title }: any) {
  const renderContainer = () => {
    switch (title) {
      case "Device Info":
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="infodetails">
                  <p>
                    Parol Name:{" "}
                    <span>{data?.parol ? data?.parol?.name : "--"}</span>
                  </p>
                  <p>
                    Device Code:{" "}
                    <span>{data?.deviceCode ? data?.deviceCode : "--"}</span>
                  </p>
                  <p>
                    Device Type:{" "}
                    <span>{data?.deviceType ? data?.deviceType : "--"}</span>
                  </p>
                  <p>
                    Device Status:{" "}
                    <span>{data?.isOnline ? "Active" : "Offline"}</span>
                  </p>
                  <p>
                    Device Role: <span>{data?.role ? data?.role : "--"}</span>
                  </p>
                  <p>
                    Device Role:{" "}
                    <span>
                      {" "}
                      {data?.created_at
                        ? moment(data.created_at).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )
                        : "--"}
                    </span>
                  </p>
                  <p>
                    Device Streaming{" "}
                    <span>
                      {data?.isStreaming
                        ? "Streaming Avilable"
                        : "Not  Avilable"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                {/* <h4 className="text-center">Location</h4> */}
              </div>
              <div className="col-sm-4">
                <h4 className="text-center">Location</h4>
                <div className="infomapbox">
                  <InfoBoxMap height={"250px"} data={data} />
                </div>
              </div>
            </div>
          </div>
        );

      case "Event Info":
      case "Alarm Info":
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="infodetails">
                  <h4>Details</h4>
                  <p>
                    Parol Name:{" "}
                    <span>{data?.parol ? data?.parol?.name : "--"}</span>
                  </p>
                  <p>
                    Alarm Id:{" "}
                    <span>{data?.alarmId ? data?.alarmId : "--"}</span>
                  </p>
                  <p>
                    Alarm Type:{" "}
                    <span>{data?.alarmType ? data?.alarmType : "--"}</span>
                  </p>
                  <p>
                    Alarm Time:{" "}
                    <span>
                      {" "}
                      {data?.created_at
                        ? moment(data.created_at).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )
                        : "--"}
                    </span>
                  </p>
                  <p>
                    Alarm Status:{" "}
                    <span>{data?.isResolved ? "Resolved" : "Not Resolve"}</span>
                  </p>
                  <p>
                    Plate:{" "}
                    <span>
                      {data?.recognizedPlate ? data?.recognizedPlate : "--"}
                    </span>
                  </p>
                  <p>
                    Agency: <span>{data?.agency ? data?.agency : "--"}</span>
                  </p>
                  <p>
                    Device Code:{" "}
                    <span>
                      {data?.device ? data?.device?.deviceCode : "--"}
                    </span>
                  </p>
                  <p>
                    Device Type:{" "}
                    <span>
                      {data?.device ? data?.device?.deviceType : "--"}
                    </span>
                  </p>
                  <p>
                    Device Streaming:{" "}
                    <span>
                      {data?.device?.isSrtreaming
                        ? "Stream Avilable"
                        : "Stream Not Avilable"}
                    </span>
                  </p>
                  <p>
                    Device Role:{" "}
                    <span>{data?.device ? data?.device?.role : "--"}</span>
                  </p>
                  <p>
                    Device Status:{" "}
                    <span>{data?.device?.isOnline ? "Active" : "Offline"}</span>
                  </p>
                  <p>
                    velocity Detected:{" "}
                    <span>
                      {data?.velocityDetected ? data?.velocityDetected : "--"}
                    </span>
                  </p>
                  <p>
                    velocity Limit:{" "}
                    <span>
                      {data?.velocityLimit ? data?.velocityLimit : "--"}
                    </span>
                  </p>
                  <p>
                    Way: <span>{data?.way ? data?.way : "--"}</span>
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <h4 className="text-center">Multimedia</h4>
                <div className="infoimgBox">
                  {data?.multimedia?.mediaPath ? (
                    <div>
                      {data?.multimedia?.mediaType === "image" ? (
                        <img
                          src={data.multimedia.mediaPath}
                          alt=""
                          style={{
                            maxHeight: "150px",
                            borderRadius: "10px",
                            maxWidth: "100%",
                          }}
                        />
                      ) : (
                        <ReactPlayer
                          url={Images.vid1}
                          style={{
                            maxHeight: "200px",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                          }}
                          controls={true}
                          playing={false}
                          loop={false}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="notavil">
                      <h5>Media Not Available</h5>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-4">
                <h4 className="text-center">Location</h4>
                <div className="infomapbox">
                  <InfoBoxMap height={"250px"} data={data?.device} />
                </div>
              </div>
            </div>
          </div>
        );
      case "Multimedia Info":
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="infodetails">
                  <p>
                    Parol Name:{" "}
                    <span>{data?.parol ? data?.parol?.name : "--"}</span>
                  </p>
                  <p>
                    Device Code:{" "}
                    <span>
                      {data?.device?.deviceCode
                        ? data?.device?.deviceCode
                        : "--"}
                    </span>
                  </p>
                  <p>
                    Device Type:{" "}
                    <span>
                      {data?.device?.deviceType
                        ? data?.device?.deviceType
                        : "--"}
                    </span>
                  </p>
                  <p>
                    Device Status:{" "}
                    <span>{data?.isOnline ? "Active" : "Offline"}</span>
                  </p>
                  <p>
                    Device Role:{" "}
                    <span>
                      {data?.device?.role ? data?.device?.role : "--"}
                    </span>
                  </p>
                  <p>
                    Device Created:{" "}
                    <span>
                      {" "}
                      {data?.device?.created_at
                        ? moment(data.device?.created_at).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )
                        : "--"}
                    </span>
                  </p>
                  <p>
                    Device Streaming{" "}
                    <span>
                      {data?.device?.isStreaming
                        ? "Streaming Avilable"
                        : "Not  Avilable"}
                    </span>
                  </p>
                  <p>
                    Media Time:{" "}
                    <span>
                      {" "}
                      {data?.created_at
                        ? moment(data.created_at).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )
                        : "--"}
                    </span>
                  </p>
                  <p>
                    Media Size:{" "}
                    <span>
                      {data?.sizeInBytes ? data?.sizeInBytes : "--"} Bytes
                    </span>
                  </p>
                  <p>
                    Media Type:{" "}
                    <span>{data?.mediaType ? data?.mediaType : "--"} </span>
                  </p>
                </div>
              </div>

              <div className="col-sm-4">
                <h4 className="text-center">Multimedia</h4>
                <div className="infoimgBox">
                  {data?.mediaPath ? (
                    <div>
                      {data?.mediaType === "image" ? (
                        <img
                          src={data?.mediaPath}
                          alt=""
                          style={{
                            borderRadius: "10px",
                            maxWidth: "100%",
                          }}
                        />
                      ) : (
                        <ReactPlayer
                          url={Images.vid1}
                          style={{
                            maxHeight: "250px",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                          }}
                          controls={true}
                          playing={false}
                          loop={false}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="notavil">
                      <h5>Media Not Available</h5>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-sm-4">
                <h4 className="text-center">Location</h4>
                <div className="infomapbox">
                  <InfoBoxMap height={"250px"} data={data?.device} />
                </div>
              </div>
            </div>
          </div>
        );
      // Add more cases as needed

      default:
        return null; // Render nothing for unknown titles
    }
  };
  console.log(data);
  return (
    <div className="inofobox">
      <div className="layoutinfo">
        <h2 className="text-center">{title}</h2>
        <hr />
        {renderContainer()}

        <div className="infoclose">
          <button onClick={closeinfobox}>
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Infobox;
