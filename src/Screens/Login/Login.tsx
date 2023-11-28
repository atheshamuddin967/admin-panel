import Images from "../../images/Images";

import Loginbtn from "../../components/Loginbtn";
import { useNavigate, Link } from "react-router-dom";
import "./Login.scss";
import Singupinput from "../../components/Singupinput";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [users] = useState(
    JSON.parse(localStorage.getItem("users") || "[]") || []
  );

  const handleSignUpClick = () => {
    navigate("/Singup");
  };

  const handleLoginClick = () => {
    // Check if the entered username and password match any user in the stored data
    const userFound = users.find(
      (user: any) =>
        user.username === enteredUsername && user.password === enteredPassword
    );

    if (userFound) {
      alert("Login successful!");
      // setCurrentUser(userFound);
      navigate("/Operations2");
    } else {
      alert("Invalid username or password. Please try again.");
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

                <Singupinput
                  placeholder={"Username"}
                  type={"text"}
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

                <Loginbtn title={"Sign up"} onClick={handleLoginClick} />
                <div className="already">
                  <p>
                    Dont Have an account?
                    <button onClick={handleSignUpClick}>Sign up</button>
                  </p>
                </div>
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
