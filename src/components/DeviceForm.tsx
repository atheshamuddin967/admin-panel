import { CiSearch } from "react-icons/ci";
import { useApi } from "../context/Api";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function DeviceForms({ closemodal }: any) {
  const { data, addDevice } = useApi();
  const datas: any = data;
  const users = datas.parols;
  const [selectedDeviceType, setSelectedDeviceType] = useState<any>();
  const [payId, setPayId] = useState("");
  const [parol, setParol] = useState("");

  const [deviceFormData, setDeviceFormData] = useState<any>({
    deviceCode: "",
    role: "",
    parolId: "",
    deviceType: "",
    IpAddress: "",
    gps: [],
    parol: "",
    portNumber: "",
  });
  const handleGpsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const updatedGps = [...deviceFormData.gps];
    updatedGps[index] = value;

    setDeviceFormData((prevUserData: any) => ({
      ...prevUserData,
      gps: updatedGps,
    }));
  };
  const handleDeviceTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDeviceType(event.target.value);

    setDeviceFormData((prevUserData: any) => ({
      ...prevUserData,
      deviceType: event.target.value,
    }));
  };

  const Addparol = (item: any) => {
    // console.log(item);
    setPayId(item._id);
    setParol(item);

    setDeviceFormData((prevUserData: any) => {
      const updatedFormData = {
        ...prevUserData,
        parolId: item._id,
        parol: item,
      };

      console.log(updatedFormData); // Log the updated form data

      return updatedFormData;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setDeviceFormData((prevUserData: any) => ({
    //   ...prevUserData,
    //   [name]: value,
    // }));
    // if (name === "latitude" || name === "longitude") {
    //   setDeviceFormData((prevUserData: any) => ({
    //     ...prevUserData,
    //     gps: [...prevUserData.gps, { [name]: value }],
    //   }));
    // } else {
    setDeviceFormData((prevUserData: any) => ({
      ...prevUserData,
      [name]: value,
    }));
    console.log(deviceFormData);
  };

  // };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 0));

    const uniqueId = uuidv4();
    const userDataWithId = {
      ...deviceFormData,
      userId: uniqueId,
    };

    try {
      await addDevice(userDataWithId);
      setDeviceFormData({
        deviceCode: "",
        role: "",
        parolId: "",
        deviceType: "",
        IpAddress: "",
        gps: [],
        parol: "",
        portNumber: "",
      });
      // setOpenForm(false);
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    }
  };

  return (
    <div className="fromLayout">
      <div className="formbg">
        <div className=" deviceinner">
          <div className="row">
            <div className="col-sm-6">
              {" "}
              <form action="" onSubmit={handleFormSubmit}>
                <div className="dform">
                  <input
                    type="text"
                    placeholder="Device Code"
                    name="deviceCode"
                    value={deviceFormData.deviceCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="dform">
                  <input
                    type="text"
                    placeholder="Role"
                    name="role"
                    onChange={handleInputChange}
                    value={deviceFormData.role}
                  />
                </div>
                <div className="dform">
                  <input
                    type="text"
                    placeholder="Parol Id"
                    name="parolId"
                    onChange={handleInputChange}
                    value={deviceFormData.parolId}
                    readOnly
                  />
                </div>
                {/* <div className="dform">
                  <input
                    type="text"
                    placeholder="Parol "
                    name="parol"
                    onChange={handleInputChange}
                    value={deviceFormData.parol}
                  />
                </div> */}
                <div className="dform">
                  <select
                    name="deviceType"
                    onChange={handleDeviceTypeChange}
                    value={deviceFormData.deviceType}
                  >
                    <option value="" disabled>
                      Device Type
                    </option>
                    <option value="Fixed CAM">Fixed CAM</option>
                    <option value="Car Boarded">Car Boarded</option>
                    <option value="Scout">Scout</option>
                  </select>
                </div>
                {deviceFormData.deviceType === "Fixed CAM" && (
                  <>
                    <div className="dform">
                      <input
                        type="text"
                        placeholder="Ip Address"
                        name="IpAddress"
                        value={deviceFormData.IpAddress}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="dform">
                      <input
                        type="text"
                        placeholder="Port Number"
                        name="portNumber"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="dform">
                      <input
                        type="text"
                        placeholder="Gps lattitude"
                        name="latitude"
                        // onChange={handleInputChange}
                        onChange={(e) => handleGpsChange(e, 0)}
                      />
                    </div>
                    <div className="dform">
                      <input
                        type="text"
                        placeholder="Gps logitude"
                        name="longitude"
                        // onChange={handleInputChange}
                        onChange={(e) => handleGpsChange(e, 1)}
                      />
                    </div>
                  </>
                )}
                <div className="addbtns">
                  <button type="submit">Add Device</button>
                </div>
              </form>
            </div>

            <div className="col-sm-6">
              <div className="sarbox">
                <input type="text" placeholder="serach User" />
                <button>
                  <CiSearch />
                </button>
              </div>

              <div className="userlist">
                <ul>
                  {users?.map((user: any) => (
                    <li>
                      {user.username}
                      <button
                        onClick={() => {
                          Addparol(user);
                        }}
                      >
                        +
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="deviceform">
            <button onClick={closemodal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceForms;
