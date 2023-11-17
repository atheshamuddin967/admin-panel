import { useNavigate } from "react-router-dom";

function VehiclePlatesTable({ data, icon, bg }: any) {
  const navigate = useNavigate();

  const handleTrackOnMapClick = (item: string) => {
    const serializedItem = JSON.stringify(item);

    // Navigate to the map screen with the serialized item data
    navigate(`/Map/${encodeURIComponent(serializedItem)}`);
    console.log(item);
  };

  return (
    <div className="table-responsive">
      <table className="custom-table table table-hover text-center">
        <thead>
          <tr>
            <th></th>
            <th>License Plate</th>
            <th>Vehicle Type</th>
            <th>Gps</th>
            <th>Vehicle Operator</th>
            <th>Alerts</th>
            <th>Vehicle status</th>
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
              <td> {item.vehicleId}</td>
              <td>{item.vehicleType}</td>
              <td>{item.gps}</td>
              <td>{item.operator}</td>
              <td>{item.alert}</td>
              <td className="table-end">
                {item.status}
                <br />

                <button
                  className=""
                  onClick={() => handleTrackOnMapClick(item)}
                >
                  Track on map
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehiclePlatesTable;
