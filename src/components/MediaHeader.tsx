import Input from "../components/Input";
import { useApi } from "../context/Api";
function MediaHeader() {
  const { deviceData } = useApi();
  const alldeviceData: any = deviceData;
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Media"} />
        <select name="cars" id="cars" form="carform">
          <option value="volvo" selected disabled>
            Select Device
          </option>
          {alldeviceData?.data?.all?.map((device: any) => (
            <option value={device?.multimediaData}>{device?.deviceCode}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MediaHeader;
