import { FaTrash } from "react-icons/fa6";
import { useApi } from "../context/Api";
function DeviceTable({ data, icon, bg }: any) {
  const { deleteDevice } = useApi();
  // console.log(data);

  return (
    <div className="table-responsive">
      <table className="custom-table table table-hover text-center ">
        <thead>
          <tr>
            <th></th>
            <th>Device Id</th>

            <th>Device Type</th>
            <th>Device Operator</th>
            <th>Created</th>
            <th>Role</th>
            <th>Device status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="table-row text-center">
          {data?.map((item: any) => (
            <tr className="tr-vehicle">
              <td className="table-data">
                <div className="round" style={{ backgroundColor: bg }}>
                  <img src={icon} alt="alarm" />
                </div>
              </td>
              <td> {item?.deviceCode}</td>
              {/* <td>{item.vehicleId}</td> */}
              <td>{item?.deviceType}</td>
              <td>{item.parol?.username}</td>
              <td>{item.created_at}</td>
              <td>{item.role}</td>

              <td className="table-end">
                {" "}
                {item.isOnline ? "Active" : "Offline"}
              </td>
              <td>
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
  );
}

export default DeviceTable;
