import Images from "../images/Images";
import { useNavigate } from "react-router-dom";

function AlarmTable({ data, icon, bg }: any) {
  const navigate = useNavigate();

  const handleTrackOnMapClick = (item: string) => {
    const serializedItem = JSON.stringify(item);

    // Navigate to the map screen with the serialized item data
    navigate(`/Map/${encodeURIComponent(serializedItem)}`);
    console.log(item);
  };

  return (
    <div className="table-responsive">
      <table className="custom-table table table-borderless">
        <thead>
          <tr>
            <th></th>
            <th>Alarm Id</th>
            <th>Device Id</th>
            <th>Timing</th>
            <th>Location</th>
            <th>Alarm Type</th>
            <th>Operation information</th>
            <th>Media</th>
          </tr>
        </thead>

        <tbody className="table-row">
          {data.map((item: any) => (
            <tr className="table-row">
              <td className="table-data">
                <div className="round" style={{ backgroundColor: bg }}>
                  <img src={icon} alt="alarm" />
                </div>
              </td>
              <td> {item.id}</td>
              <td>{item.deviceid}</td>
              <td>{item.time}</td>
              <td>{item.location}</td>
              <td>{item.type}</td>
              <td>
                {item.operator}
                <br />

                <button
                  className="btns"
                  onClick={() => handleTrackOnMapClick(item)}
                >
                  Track on map
                </button>
              </td>
              <td className="table-end">
                <div>
                  <img src={Images.medias} alt="media" />
                </div>
                <br />
                <button className="btns">Resolve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlarmTable;
