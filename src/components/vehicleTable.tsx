function VehicleTable({ data, icon, bg }: any) {
  return (
    <div className="table-responsive">
      <table className="custom-table table table-hover text-center ">
        <thead>
          <tr>
            <th></th>
            <th>Vehicle Id</th>
            <th>Device Type</th>
            <th>Device Operator</th>
            <th>Vehicle Status</th>
            <th>Last Update Time</th>
            <th>Average k/m</th>
            <th>Device status</th>
          </tr>
        </thead>

        <tbody className="table-row text-center">
          {data.map((item: any) => (
            <tr className="tr-vehicle">
              <td className="table-data">
                <div className="round" style={{ backgroundColor: bg }}>
                  <img src={icon} alt="alarm" />
                </div>
              </td>
              <td> {item.id}</td>
              <td>{item.type}</td>
              <td>{item.operator}</td>
              <td>{item.vehicleStatus}</td>
              <td>{item.lastupdate}</td>
              <td>{item.km}</td>
              <td className="table-end">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleTable;
