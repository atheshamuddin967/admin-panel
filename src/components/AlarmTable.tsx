import { useApi } from "../context/Api";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import { TbMapPinOff } from "react-icons/tb";
import { TiInfo } from "react-icons/ti";
import Infobox from "./Infobox";
import { MdCarCrash } from "react-icons/md";

import { MdSensors } from "react-icons/md";
import { RiAlarmWarningLine } from "react-icons/ri";

function AlarmTable({ data, bg }: any) {
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const openinfobox = (item: any) => {
    setOpenInfo(true);
    setInfoData(item);
  };
  const closeinfobox = () => {
    setOpenInfo(false);
  };
  function getAlarmTypeIcon(alarmType: any) {
    switch (alarmType) {
      case "Emergency":
        return <RiAlarmWarningLine />;
      case "Motion Detection":
        return <MdSensors />;
      case "ANPR":
        return <MdCarCrash />; // Replace with the actual ANPR icon
      case "Area of Competence":
        return <TbMapPinOff />;

      default:
        return <RiAlarmWarningLine />;
    }
  }

  const { deleteLiveAlarm, resolveLiveAlarm } = useApi();

  return (
    <div>
      {" "}
      <div className="table-responsive">
        <table className="custom-table table table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Alarm Id</th>

              <th>Timing</th>
              <th>Location</th>
              <th>Alarm Type</th>
              <th>Operator</th>

              <th>Action</th>
              <th>More info</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="table-row">
            {data?.map((item: any) => (
              <tr className="table-row" key={item._id}>
                <td className="table-data">
                  <div className="round" style={{ backgroundColor: bg }}>
                    {getAlarmTypeIcon(item.alarmType)}
                  </div>
                </td>
                <td> {item.alarmId}</td>

                <td>{item.created_at}</td>
                <td>{item.gps?.coordinates}</td>
                <td>{item.alarmType}</td>
                <td>{item.parol?.name}</td>
                <td>
                  <button
                    className="alarmresolve"
                    onClick={() => {
                      resolveLiveAlarm(item);
                    }}
                  >
                    {item.isResolved ? "Resolved" : "resolve"}
                  </button>
                </td>
                <td>
                  <button
                    style={{ fontSize: 20, border: 0 }}
                    onClick={() => {
                      openinfobox(item);
                    }}
                  >
                    <TiInfo />
                  </button>
                </td>
                <td className="table-end">
                  <button
                    onClick={() => {
                      deleteLiveAlarm(item);
                    }}
                    className="alarmdlt"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      {openInfo && (
        <Infobox
          data={infoData}
          closeinfobox={closeinfobox}
          title={"Alarm Info"}
        />
      )}
    </div>
  );
}

export default AlarmTable;
