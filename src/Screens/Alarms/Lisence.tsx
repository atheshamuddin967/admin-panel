import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import AlarmsData from "../../Data/Alarm";
import Images from "../../images/Images";
function Lisence() {
  const Lisence = AlarmsData.filter((alarm) => alarm.type === "block plate");

  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={Lisence} icon={Images.palte} bg={"#DBF4FF"} />
      </div>
    </div>
  );
}

export default Lisence;
