import ManagementTable from "../../components/ManagementTable";
import ManagementHeader from "./managementHeader";

import Images from "../../images/Images";
import "../Management/Management.scss";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useApi } from "../../context/Api";
import { v4 as uuidv4 } from "uuid";
function Management() {
  const [openForm, setOpenForm] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    deviceCode: "",
    role: "",
    password: "",
  });
  const { data, AddUser } = useApi();
  // const datas: any = data;

  const openform = () => {
    setOpenForm(true);
  };
  const closeform = () => {
    setOpenForm(false);
  };
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    console.log(userData);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const uniqueId = uuidv4();
    const userDataWithId = {
      ...userData,
      userId: uniqueId,
    };
    console.log("Form data before POST request:", userDataWithId);
    try {
      await AddUser(userDataWithId);
      setUserData({
        email: "",
        name: "",
        role: "",
        username: "",
        deviceCode: "",
        password: "",
      });
      console.log(userData);
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    }
  };
  useEffect(() => {}, [userData, data]);
  return (
    <div>
      <div className="container">
        <div className="managment-main">
          <div className="shead">
            <ManagementHeader openform={openform} />
          </div>
        </div>
        <div className="managementTables">
          <ManagementTable data={data} bg={"#fff"} icon={Images.proficon} />
        </div>
        {openForm && (
          <div className="asingform">
            <div className="asinglayout">
              <h5>Asing Role</h5>
              <form action="" onSubmit={handleFormSubmit}>
                <div className="asinginputs">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={handleInputChange}
                    name="name"
                    value={userData.name}
                  />
                </div>
                <div className="asinginputs">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={handleInputChange}
                    name="username"
                    value={userData.username}
                  />
                </div>
                <div className="asinginputs">
                  <input
                    type="text"
                    placeholder="Device code"
                    onChange={handleInputChange}
                    name="deviceCode"
                    value={userData.deviceCode}
                  />
                </div>
                <div className="asinginputs">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={handleInputChange}
                    name="email"
                    value={userData.email}
                  />
                </div>
                <div className="asinginputs">
                  <input
                    type="password"
                    placeholder="password"
                    onChange={handleInputChange}
                    name="password"
                    value={userData.password}
                  />
                </div>
                <div className="asinginputs">
                  <input
                    type="text"
                    placeholder="Role"
                    onChange={handleInputChange}
                    name="role"
                    value={userData.role}
                  />
                </div>
                <div className="asingbtns">
                  <button>Asing Role</button>
                </div>
              </form>
              <div className="closebtn">
                <button onClick={closeform}>
                  <MdClose />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Management;
