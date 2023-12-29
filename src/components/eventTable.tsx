import Images from "../images/Images";
import { useApi } from "../context/Api";
import { FaTrash } from "react-icons/fa";

function EventTable({ icon, bg }: any) {
  const { eventData, deleteEvent } = useApi();

  // console.log(eventData);

  return (
    <div className="table-responsive">
      <table className="custom-table table table-hover text-center ">
        <thead>
          <tr>
            <th></th>
            <th>Alarm Id</th>

            <th>Gps</th>
            <th>Device Operator</th>
            <th>Agency</th>
            <th>Device code</th>
            <th>Motive</th>
            <th>Media</th>
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
              <td>{item.device?.deviceCode}</td>
              <td>{item.motive}</td>
              <td className="">
                <img src={Images.media2} alt="media" />
              </td>
              <td>
                <button
                  style={{ border: 0 }}
                  onClick={() => {
                    deleteEvent(item);
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
  );
}

export default EventTable;
