import ManagementTable from "../../components/ManagementTable";
import ManagementHeader from "./managementHeader";
import Loader from "../../components/Loader";
import Images from "../../images/Images";
import "../Management/Management.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useApi } from "../../context/Api";
import { v4 as uuidv4 } from "uuid";
function Management() {
  interface FormErrors {
    name: string;
    username: string;
    email: string;
    // deviceCode: string;
    // role: string;
    password: string;
  }
  interface UserData {
    name: string;
    username: string;
    email: string;
    // deviceCode: string;
    // role: string;
    password: string;
  }
  const [apiLoading, SetApiLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    // deviceCode: "",
    // role: "",
    password: "",
  });
  const { data, AddUser } = useApi();
  const datas: any = data;

  const openform = () => {
    setOpenForm(true);
  };
  const closeform = () => {
    setOpenForm(false);
  };
  // const handleInputChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     [name]: value,
  //   }));
  //   console.log(userData);
  // };

  const [formErrors, setFormErrors] = useState({
    name: "",
    username: "",
    email: "",
    // deviceCode: "",
    // role: "",
    password: "",
  });
  const validateForm = () => {
    let isValid = true;

    const newFormErrors: FormErrors = { ...formErrors };

    // Check if the username, email, or device code already exists
    if (
      datas.parols.some((user: any) => user.username === userData.username) ||
      datas.parols.some((user: any) => user.email === userData.email)
      // datas.users.some((user: any) => user.deviceCode === userData.deviceCode)
    ) {
      isValid = false;

      if (
        datas.parols.some((user: any) => user.username === userData.username)
      ) {
        newFormErrors.username = "Username already exists";
      }

      if (datas.parols.some((user: any) => user.email === userData.email)) {
        newFormErrors.email = "Email already exists";
      }
    } else {
      // Check for other empty fields
      for (const key in userData) {
        if (!userData[key as keyof UserData]) {
          newFormErrors[key as keyof FormErrors] = "Please fill in this field";
          isValid = false;
        } else {
          newFormErrors[key as keyof FormErrors] = "";
        }
      }
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name as keyof FormErrors]: "", // Type assertion here
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formErrors);
    if (validateForm()) {
      await new Promise((resolve) => setTimeout(resolve, 0));

      console.log(formErrors);
      const uniqueId = uuidv4();
      const userDataWithId = {
        ...userData,
        userId: uniqueId,
      };

      try {
        SetApiLoading(true);
        await AddUser(userDataWithId);
        setUserData({
          email: "",
          name: "",
          username: "",
          password: "",
        });
        // setOpenForm(false);
      } catch (error) {
        console.error("Error in handleFormSubmit:", error);
      } 
    }
  };

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
              <h5>Add new parol</h5>

              {/* {apiLoading && (
                <div className="loader">
                  <Loader />
                </div>
              )} */}
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
                {formErrors.username && (
                  <p style={{ color: "red" }}>{formErrors.username}</p>
                )}

                <div className="asinginputs">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={handleInputChange}
                    name="email"
                    value={userData.email}
                  />
                </div>
                {formErrors.email && (
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                )}
                <div className="asinginputs">
                  <input
                    type="password"
                    placeholder="password"
                    onChange={handleInputChange}
                    name="password"
                    value={userData.password}
                  />
                </div>

                <div className="asingbtns">
                  {apiLoading ? (
                    <Loader />
                  ) : (
                    <button type="submit">submit</button>
                  )}
                </div>
                {Object.values(formErrors).some((error) => !!error) && (
                  <div>
                    <p style={{ color: "red" }}>
                      Please fill in all required fields.
                    </p>
                  </div>
                )}
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
