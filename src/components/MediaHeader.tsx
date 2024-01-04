import Input from "../components/Input";

function MediaHeader({ data, onDeviceChange }: any) {
  const uniqueDeviceCodes: any = Array?.from(
    new Set(data?.map((multi: any) => multi?.device?.deviceCode))
  );
  return (
    <div>
      <div className="flex">
        <Input placeholder={"Search Media"} />
        <select
          name="cars"
          id="cars"
          form="carform"
          onChange={(e) => onDeviceChange(e.target.value)}
        >
          <option value="All" selected>
            All Device
          </option>
          {uniqueDeviceCodes?.map((deviceCode: any) => (
            <option value={deviceCode}>{deviceCode}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MediaHeader;
