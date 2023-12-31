import { useApi } from "../context/Api";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import { TbMapPinOff } from "react-icons/tb";
import { TiInfo } from "react-icons/ti";
import Infobox from "./Infobox";
import { MdCarCrash } from "react-icons/md";
import moment from "moment";
import { MdSensors } from "react-icons/md";
import { RiAlarmWarningLine } from "react-icons/ri";
import DeleteModal from "./DeleteModal";
import ResolveAlarmModal from "./ResolveAlarmModal";
function AlarmTable({ data, bg, selectedDeviceId, searchValue }: any) {
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const [deleteModal, setDeleteModal] = useState(false);
  const [resolveModal, setResolveModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState("");

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
  const openDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteItem(item);
  };
  const closeDelete = () => {
    setDeleteModal(false);
  };

  const openDeleteModal = (item: any) => {
    setResolveModal(true);
    setDeleteItem(item);
  };
  const closeDeleteModal = () => {
    setResolveModal(false);
  };
  const filteredData: any = data?.filter((item: any) => {
    const matchesDevice =
      selectedDeviceId === "All" ||
      item?.device?.deviceCode === selectedDeviceId;
    const matchesSearch =
      searchValue === "" ||
      item?.alarmId?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item?.alarmType?.toLowerCase().includes(searchValue.toLowerCase()) ||
      moment(item?.created_at)
        .format("MMMM Do YYYY, h:mm:ss a")
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      item?.parol?.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item?.device?.deviceCode
        ?.toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      // Add more fields to search if needed
      // ...
      false;

    return matchesDevice && matchesSearch;
  });

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
            {filteredData?.map((item: any) => (
              <tr className="table-row" key={item._id}>
                <td className="table-data">
                  <div className="round" style={{ backgroundColor: bg }}>
                    {getAlarmTypeIcon(item.alarmType)}
                  </div>
                </td>
                <td> {item.alarmId}</td>

                <td>
                  {moment(item?.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>{item.gps?.coordinates}</td>
                <td>{item.alarmType}</td>
                <td>{item.parol?.name}</td>
                <td>
                  <button
                    className="alarmresolve"
                    onClick={() => {
                      openDeleteModal(item);
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
                      openDelete(item);
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
      {deleteModal && (
        <DeleteModal
          title={"alarm"}
          button={deleteLiveAlarm}
          closeDelete={closeDelete}
          item={deleteItem}
        />
      )}
      {resolveModal && (
        <ResolveAlarmModal
          title={"alarm"}
          button={resolveLiveAlarm}
          closeDelete={closeDeleteModal}
          item={deleteItem}
        />
      )}
    </div>
  );
}

export default AlarmTable;
