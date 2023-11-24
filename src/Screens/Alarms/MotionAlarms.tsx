import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import AlarmsData from "../../Data/Alarm";
import Images from "../../images/Images";
function MotionAlarms() {
  const Motion = AlarmsData.filter((alarm) => alarm.type === "detaction");

  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={Motion} icon={Images.scam} bg={"#A4CEFF"} />
      </div>
    </div>
  );
}

export default MotionAlarms;
