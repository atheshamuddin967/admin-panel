import Images from "../../images/Images";
import { useApi } from "../../context/Api";
import Loginbtn from "../../components/Loginbtn";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import Singupinput from "../../components/Singupinput";
import { useState } from "react";
function Login() {
  const { adminLogin, admin } = useApi();
  const navigate = useNavigate();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const avilableAdmin: any = admin;
  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      adminLogin({
        email: enteredUsername,
        password: enteredPassword,
      });

      if (avilableAdmin && avilableAdmin?.email === enteredUsername) {
        navigate("/Operations2");
      } else {
        console.error("Login failed: Incorrect username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
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
                    onChange={(e: any) => setEnteredUsername(e.target.value)}
                  />
                  <Singupinput
                    placeholder={"Password"}
                    type={"password"}
                    img={Images.lock}
                    onChange={(e: any) => setEnteredPassword(e.target.value)}
                  />

                  <div className="forget">
                    <Link to="/"> forget password?</Link>
                  </div>

                  <Loginbtn title={"Sign up"} onClick={handleLogin} />
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
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
