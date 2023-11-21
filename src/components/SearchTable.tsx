import { useNavigate } from "react-router-dom";
import Images from "../images/Images";
function SearchTable({ item }: any) {
  const navigate = useNavigate();

  const handleTrackOnMapClick = (item: string) => {
    const serializedItem = JSON.stringify(item);

    // Navigate to the map screen with the serialized item data
    navigate(`/Map/${encodeURIComponent(serializedItem)}`);
    console.log(item);
  };

  return (
    <div className="table-responsive mb-2">
      <table className="c-table table text-center">
        <thead>
          <th></th>
          <th>License Plate Number</th>
          <th>Vehicle Type</th>
          <th>Operator</th>
          <th>status</th>
        </thead>
        <tbody className="table-row text-center">
          <tr>
            <td className="">
              <div className="round" style={{ backgroundColor: "#c0bcbc" }}>
                <img
                  src={
                    item.devicestatus === "block" ? Images.block : Images.plates
                  }
                  alt="alarm"
                />
              </div>
            </td>
            <td>
              {item.vehicleId}
              <br />
              {item.devicestatus === "block" ? <span>(block)</span> : null}
            </td>
            <td> {item.vehicleType}</td>
            <td>{item.operator}</td>
            <td className="">
              {item.status}
              <br />
              <button className="" onClick={() => handleTrackOnMapClick(item)}>
                Track on map
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchTable;
