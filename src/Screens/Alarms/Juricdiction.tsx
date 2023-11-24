import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import AlarmsData from "../../Data/Alarm";
import Images from "../../images/Images";
function Juricdiction() {
  const Lisence = AlarmsData.filter((alarm) => alarm.type === "area");

  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={Lisence} icon={Images.map} bg={"#dbe694"} />
      </div>
    </div>
  );
}

export default Juricdiction;
