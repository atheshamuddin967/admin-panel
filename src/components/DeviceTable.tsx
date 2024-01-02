import { FaTrash } from "react-icons/fa6";
import { useApi } from "../context/Api";
import { FaCar } from "react-icons/fa";
import { TiInfo } from "react-icons/ti";
import { BiCctv } from "react-icons/bi";
import { TbDeviceComputerCamera } from "react-icons/tb";
import Infobox from "./Infobox";
import moment from "moment";
import { useState } from "react";
function DeviceTable({ data, bg, selectedFilter }: any) {
  const { deleteDevice } = useApi();
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const openinfobox = (item: any) => {
    setOpenInfo(true);
    setInfoData(item);
  };
  const closeinfobox = () => {
    setOpenInfo(false);
  };
  function getDeviceIcon(deviceType: any) {
    switch (deviceType) {
      case "Fixed CAM":
        return <BiCctv />;
      case "Car Boarded":
        return <FaCar />;
      case "Scout":
        return <TbDeviceComputerCamera />;
      default:
        return null; // You can return a default icon or null if no match
    }
  }

  const filteredData = data?.filter((item: any) => {
    if (selectedFilter === "All") {
      return true; // Show all data
    } else if (selectedFilter === "Online") {
      return item.isOnline;
    } else if (selectedFilter === "Offline") {
      return !item.isOnline;
    } else if (selectedFilter === "Lost") {
      return item.isLost;
    }
    return false;
  });

  return (
    <div>
      <div className="table-responsive">
        <table className="custom-table table table-hover text-center ">
          <thead>
            <tr>
              <th></th>
              <th>Device Code</th>

              <th>Device Type</th>
              <th>Device Operator</th>
              <th>Created</th>
              <th>Role</th>
              <th>Device status</th>
              <th>Emergency</th>
              <th>More Info</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="table-row text-center">
            {filteredData?.map((item: any) => (
              <tr className="tr-vehicle">
                <td className="table-data">
                  <div className="round" style={{ backgroundColor: bg }}>
                    {getDeviceIcon(item?.deviceType)}
                  </div>
                </td>
                <td> {item?.deviceCode}</td>

                <td>{item?.deviceType}</td>
                <td>{item.parol?.username}</td>
                <td>
                  {moment(item?.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>{item.role}</td>

                <td> {item.isOnline ? "Active" : "Offline"}</td>

                <td>{item.emergency_enabled ? "Active" : "Deactive"}</td>
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
                    className="trash"
                    onClick={() => {
                      deleteDevice(item);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openInfo && (
        <Infobox
          data={infoData}
          closeinfobox={closeinfobox}
          title={"Device Info"}
        />
      )}
    </div>
  );
}

export default DeviceTable;
