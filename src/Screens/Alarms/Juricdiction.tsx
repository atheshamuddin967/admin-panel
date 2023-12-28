import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";
import { useApi } from "../../context/Api";
import Images from "../../images/Images";
function Juricdiction() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.anpr;
  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={allAlarams} icon={Images.map} bg={"#dbe694"} />
      </div>
    </div>
  );
}

export default Juricdiction;
