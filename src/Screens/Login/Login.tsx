import Images from "../../images/Images";
import { useApi } from "../../context/Api";
import Loginbtn from "../../components/Loginbtn";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Loader from "../../components/Loader";
import "./Login.scss";
import Singupinput from "../../components/Singupinput";
import { useState, useEffect } from "react";
function Login() {
  const [apiLoading, SetApiLoading] = useState(false);
  // const navigate = useNavigate();
  const { adminLogin } = useApi();

  const [loginData, setLogindata] = useState<any>({ email: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogindata((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      SetApiLoading(true);
      // Call your admin login function
      await adminLogin(loginData);
      localStorage.setItem("loggedInUser", JSON.stringify(loginData));

      // If login is successful, navigate to "/Operations2"
      // navigate("/Operations2");
    } catch (error: any) {
      // If login fails, handle the error
      // You can also display an error message to the user
      console.log("Login failed:", error);
    } finally {
      SetApiLoading(false); // Set isLoading to false after completing the operation
    }
  };
  useEffect(() => {
    // Check if there are saved credentials in local storage
    const savedCredentials = localStorage.getItem("loggedInUser");

    if (savedCredentials) {
      try {
        const parsedCredentials = JSON.parse(savedCredentials);

        // Automatically log in with saved credentials
        adminLogin(parsedCredentials);

        // Navigate to "/Operations2"
        // navigate("/Operations2");
      } catch (error: any) {
        console.error("Error parsing saved credentials:", error.message);
      }
    }
  }, []);
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
                  <div>
                    {" "}
                    {apiLoading ? (
                      <Loader />
                    ) : (
                      <Loginbtn title={"Login"} onClick={handleLogin} />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            {/* <ToastContainer style={{ zIndex: 1000001 }} /> */}
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
