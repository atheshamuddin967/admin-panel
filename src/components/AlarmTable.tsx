import Images from "../images/Images";
import { useNavigate } from "react-router-dom";
import { useApi } from "../context/Api";
import { FaTrash } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function AlarmTable({ data, icon, bg }: any) {
  const { deleteLiveAlarm, resolveLiveAlarm } = useApi();

  const navigate = useNavigate();

  const handleTrackOnMapClick = (item: string) => {
    const serializedItem = JSON.stringify(item);

    // Navigate to the map screen with the serialized item data
    navigate(`/Map/${encodeURIComponent(serializedItem)}`);
    console.log(item);
  };

  return (
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
            <th>Media</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="table-row">
          {data?.map((item: any) => (
            <tr className="table-row" key={item._id}>
              <td className="table-data">
                <div className="round" style={{ backgroundColor: bg }}>
                  <img src={icon} alt="alarm" />
                </div>
              </td>
              <td> {item.alarmId}</td>

              <td>{item.created_at}</td>
              <td>{item.gps?.coordinates}</td>
              <td>{item.alarmType}</td>
              <td>{item.parol?.name}</td>
              <td>
                <img src={Images.medias} alt="media" />
              </td>
              <td className="table-end">
                <button
                  className="alarmdlt"
                  onClick={() => {
                    resolveLiveAlarm(item);
                  }}
                >
                  <IoCheckmarkDoneSharp />
                </button>
                <button
                  className="alarmdlt"
                  onClick={() => handleTrackOnMapClick(item)}
                >
                  <FaMapMarkerAlt />
                </button>{" "}
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
    </div>
  );
}

export default AlarmTable;
