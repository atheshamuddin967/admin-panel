import { RiAlarmWarningFill } from "react-icons/ri";
import Infobox from "./Infobox";
import { BiCctv } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";

import { useState } from "react";
import { TiInfo } from "react-icons/ti";
import moment from "moment";
function SearchTable({ items }: any) {
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const openinfobox = (item: any) => {
    setOpenInfo(true);
    setInfoData(item);
  };
  const closeinfobox = () => {
    setOpenInfo(false);
  };

  const renderTableByType = (items: any) => {
    switch (items?.[0]?.resultType) {
      case "event":
        return (
          <div className="table-responsive mb-2">
            <table className="c-table table text-center">
              <thead>
                <th></th>
                <th>Alarm id</th>
                <th>Event type</th>
                <th>Operator</th>
                <th>Location</th>
                <th>Device Code</th>
                <th>More info</th>
              </thead>
              <tbody className="table-row text-center">
                {items?.map((item: any) => (
                  <tr>
                    <td className="">
                      <div
                        className="round"
                        style={{ backgroundColor: "#c0bcbc" }}
                      >
                        <MdEventAvailable />
                      </div>
                    </td>
                    <td>{item?.alarmId}</td>
                    <td>{item?.eventType}</td>
                    <td> {item?.parol?.name}</td>
                    <td>{item?.gps?.coordinates}</td>
                    <td className="">{item?.device?.deviceCode}</td>
                    <td>
                      {" "}
                      <button
                        style={{ fontSize: 20, border: 0 }}
                        onClick={() => {
                          openinfobox(item);
                        }}
                      >
                        <TiInfo />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {openInfo && (
              <Infobox
                data={infoData}
                closeinfobox={closeinfobox}
                title={"Event Info"}
              />
            )}
          </div>
        );
      case "alarm":
        return (
          <div className="table-responsive mb-2">
            <table className="c-table table text-center">
              <thead>
                <th></th>
                <th>Alarm id</th>
                <th>alarm type</th>
                <th>Operator</th>
                <th>Location</th>
                <th>Device Code</th>
                <th>More info</th>
              </thead>
              <tbody className="table-row text-center">
                {items?.map((item: any) => (
                  <tr>
                    <td className="">
                      <div
                        className="round"
                        style={{ backgroundColor: "#c0bcbc" }}
                      >
                        <RiAlarmWarningFill />
                      </div>
                    </td>
                    <td>{item?.alarmId}</td>
                    <td>{item?.alarmType}</td>
                    <td> {item?.parol?.name}</td>
                    <td>{item?.gps?.coordinates}</td>
                    <td className="">{item?.device?.deviceCode}</td>
                    <td>
                      {" "}
                      <button
                        style={{ fontSize: 20, border: 0 }}
                        onClick={() => {
                          openinfobox(item);
                        }}
                      >
                        <TiInfo />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {openInfo && (
              <Infobox
                data={infoData}
                closeinfobox={closeinfobox}
                title={"Alarm Info"}
              />
            )}
          </div>
        );
      case "device":
        return (
          <div className="table-responsive mb-2">
            <table className="c-table table text-center">
              <thead>
                <th></th>
                <th>Device Code</th>
                <th>device type</th>
                <th>Operator</th>
                <th>created</th>
                <th>role</th>
                <th>More info</th>
              </thead>
              <tbody className="table-row text-center">
                {items?.map((item: any) => (
                  <tr>
                    <td className="">
                      <div
                        className="round"
                        style={{ backgroundColor: "#c0bcbc" }}
                      >
                        <BiCctv />
                      </div>
                    </td>
                    <td>{item?.deviceCode}</td>
                    <td>{item?.deviceType}</td>
                    <td> {item?.parol?.name}</td>
                    <td>{moment(item.created_at).format("lll")}</td>
                    <td className="">{item?.role}</td>
                    <td>
                      {" "}
                      <button
                        style={{ fontSize: 20, border: 0 }}
                        onClick={() => {
                          openinfobox(item);
                        }}
                      >
                        <TiInfo />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {openInfo && (
              <Infobox
                data={infoData}
                closeinfobox={closeinfobox}
                title={"Device Info"}
              />
            )}
          </div>
        );
      // Add more cases for other types
      default:
        return null; // Default case or handle as needed
    }
  };

  return <div>{renderTableByType(items)} </div>;
}

export default SearchTable;
