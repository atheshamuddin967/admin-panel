import Images from "../images/Images";

function EventTable({ data, icon, bg }: any) {
  return (
    <div className="table-responsive">
      <table className="custom-table table table-hover text-center ">
        <thead>
          <tr>
            <th></th>
            <th>Alarm Id</th>
            <th>Device Type</th>
            <th>Gps</th>
            <th>Device Operator</th>
            <th>Date</th>
            <th>vehicle Id</th>
            <th>Motive</th>
            <th>Media</th>
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
              <td> {item.alarmId}</td>
              <td>{item.id}</td>
              <td>{item.gps}</td>
              <td>{item.operator}</td>
              <td>{item.date}</td>
              <td>{item.vehicleId}</td>
              <td>{item.alert}</td>
              <td className="">
                <img src={Images.media2} alt="media" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
