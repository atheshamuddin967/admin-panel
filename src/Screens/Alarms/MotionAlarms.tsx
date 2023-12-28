import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import { useApi } from "../../context/Api";
import Images from "../../images/Images";
function MotionAlarms() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.aoc;

  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={allAlarams} icon={Images.scam} bg={"#A4CEFF"} />
      </div>
    </div>
  );
}

export default MotionAlarms;
