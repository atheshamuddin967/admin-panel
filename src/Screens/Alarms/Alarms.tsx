import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import AlarmsData from "../../Data/Alarm";
import Images from "../../images/Images";
function Alarms() {
  const emergencyAlarms = AlarmsData.filter(
    (item) => item.type === "emergency"
  );

  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={emergencyAlarms} icon={Images.alarm} bg={"#FFA2A2"} />
      </div>
    </div>
  );
}

export default Alarms;
