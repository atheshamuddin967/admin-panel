import Images from "../../images/Images";
import { useApi } from "../../context/Api";
import Loginbtn from "../../components/Loginbtn";
// import {  Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "./Login.scss";
import Singupinput from "../../components/Singupinput";
import { useState } from "react";
function Login() {
  const { adminLogin } = useApi();

  const [loginData, setLogindata] = useState<any>({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogindata((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(loginData);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      // Call your admin login function
      await adminLogin(loginData);

      // If login is successful, navigate to "/Operations2"
      // navigate("/Operations2");
    } catch (error: any) {
      // If login fails, handle the error
      // You can also display an error message to the user
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="layouts">
      <div className="container">
        <div className="row r2">
          <div className="col-sm-6">
            <div className="loginlayout">
              <div className="loginform">
                <div className="logos">
                  <img src={Images.logo} alt="" />
                </div>
                <form action="" onSubmit={handleLogin}>
                  <Singupinput
                    placeholder={"Email"}
                    type={"email"}
                    img={Images.uicon}
                    onChange={handleInputChange}
                    name="email"
                    value={loginData.email}
                  />
                  <Singupinput
                    placeholder={"Password"}
                    type={"password"}
                    img={Images.lock}
                    onChange={handleInputChange}
                    name="password"
                    value={loginData.password}
                  />

                  {/* <div className="forget">
                    <Link to="/"> forget password?</Link>
                  </div> */}

                  <Loginbtn title={"Sign up"} onClick={handleLogin} />
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <ToastContainer style={{ zIndex: 1000001 }} />
            <div className="imglogin">
              <img src={Images.loginimg} alt="login" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
