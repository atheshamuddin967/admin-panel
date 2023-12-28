import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";

import Images from "../../images/Images";
import { useApi } from "../../context/Api";
function Lisence() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.mdAlarms;
  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={allAlarams} icon={Images.palte} bg={"#DBF4FF"} />
      </div>
    </div>
  );
}

export default Lisence;
