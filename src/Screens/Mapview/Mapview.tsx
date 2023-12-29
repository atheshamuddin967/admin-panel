import Input from "../../components/Input";
import LiveMap from "../../components/LiveMap";
import "../Mapview/Map.scss";
// import { useEffect } from "react";
import { useApi } from "../../context/Api";
// import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
function Mapview() {
  const [SearchUser, setSearchUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedDeviceType, setSelectedDeviceType] = useState("All");

  const { deviceData } = useApi();

  const datas: any = deviceData;
  const allDevices: any = datas?.data?.all;

  const handleSearch = () => {
    const selectedDevice = allDevices?.find(
      (device: any) => device?.deviceCode === searchValue
    );

    if (selectedDevice) {
      console.log("Selected User:", selectedDevice);
      setSearchUser(selectedDevice);
    } else {
      console.log("Device not found");
    }
  };

  const handleDeviceTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDeviceType(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          {" "}
          <div className="inp-box">
            <Input
              placeholder={"Search Devices"}
              searchValue={searchValue}
              onChange={(value: any) => setSearchValue(value)}
              onSearch={handleSearch}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="maptype">
            <select
              name="Alarm types"
              id="cars"
              form="carform"
              value={selectedDeviceType}
              onChange={handleDeviceTypeChange}
            >
              <option value="All">All</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Lost">Lost</option>
            </select>
          </div>
        </div>
      </div>

      <LiveMap
        SearchUser={SearchUser}
        height={"100vh"}
        selectedDeviceType={selectedDeviceType}
        onDeviceTypeChange={handleDeviceTypeChange}
      />
    </div>
  );
}

export default Mapview;
