import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import AlarmsData from "../../Data/Alarm";
import Images from "../../images/Images";
function Alarms() {
  const emergencyAlarms = AlarmsData.filter(
    (alarm) => alarm.type === "emergency"
  );

  return (
    <div className="container">
      <AlarmHeader />
      <div className="alarmlist">
        <AlarmTable data={emergencyAlarms} icon={Images.alarm} bg={"#FFA2A2"} />
      </div>
    </div>
  );
}

export default Alarms;
