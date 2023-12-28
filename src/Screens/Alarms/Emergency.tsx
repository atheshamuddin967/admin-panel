import AlarmHeader from "../../components/AlarmHeader";
import AlarmTable from "../../components/AlarmTable";

import Images from "../../images/Images";
import { useApi } from "../../context/Api";
function Emergency() {
  const { liveAlarmData } = useApi();
  const alarmData: any = liveAlarmData;
  const allAlarams: any = alarmData?.emergency;
  // console.log(allAlarams);
  return (
    <div className="container">
      <div className="shead">
        <AlarmHeader />
      </div>
      <div className="alarmlist">
        <AlarmTable data={allAlarams} icon={Images.alarm} bg={"#FFA2A2"} />
      </div>
    </div>
  );
}

export default Emergency;
