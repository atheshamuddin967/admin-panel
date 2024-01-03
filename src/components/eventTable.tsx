import Images from "../images/Images";

import { FaTrash } from "react-icons/fa";
import { TiInfo } from "react-icons/ti";
import Infobox from "./Infobox";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
function EventTable({ eventData, icon, bg, deleteEvent }: any) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [infoData, setInfoData] = useState<any>();
  const [deleteItem, setDeleteItem] = useState("");
  const openinfobox = (item: any) => {
    setOpenInfo(true);
    setInfoData(item);
  };
  const closeinfobox = () => {
    setOpenInfo(false);
  };

  const openDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteItem(item);
  };
  const closeDelete = () => {
    setDeleteModal(false);
  };
  return (
    <div className="div">
      <div className="table-responsive">
        <table className="custom-table table table-hover text-center ">
          <thead>
            <tr>
              <th></th>
              <th>Alarm Id</th>

              <th>Gps</th>
              <th>Device Operator</th>
              <th>Agency</th>
              <th>Event Type</th>
              <th>Device code</th>
              <th>Motive</th>
              <th>Media</th>

              <th>More info</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="table-row text-center">
            {eventData?.map((item: any) => (
              <tr className="tr-vehicle">
                <td className="table-data">
                  <div className="round" style={{ backgroundColor: bg }}>
                    <img src={icon} alt="alarm" />
                  </div>
                </td>
                <td> {item?.alarmId}</td>

                <td>{item?.gps?.coordinates}</td>
                <td>{item.parol?.name}</td>
                <td>{item.agency}</td>
                <td>{item.eventType}</td>
                <td>{item.device?.deviceCode}</td>
                <td>{item.motive}</td>
                <td className="">
                  <img src={Images.media2} alt="media" />
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
                <td>
                  <button
                    style={{ border: 0 }}
                    onClick={() => {
                      openDelete(item);
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
          title={"Event Info"}
        />
      )}
      {deleteModal && (
        <DeleteModal
          title={"event"}
          button={deleteEvent}
          closeDelete={closeDelete}
          item={deleteItem}
        />
      )}
    </div>
  );
}

export default EventTable;
