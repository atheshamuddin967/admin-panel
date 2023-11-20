// Signup.jsx
import { useState } from "react";

import Loginbtn from "../../components/Loginbtn";
import { useNavigate } from "react-router-dom";
import Images from "../../images/Images";
import LoginInput from "../../components/LoginInput";
function Singup({ onLoginSuccess }: any) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users") || "[]") || []
  );
  const handleSignUpClick = () => {
    // Check if any of the fields are empty
    if (!email || !username || !password || !confirmPassword) {
      alert("Please fill in all the fields.");
      return;
    }

    if (users.some((user: any) => user.username === username)) {
      alert("Username already taken. Please choose a different username.");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match. Please confirm your password.");
    } else {
      const newUser = { email, username, password };

      setUsers((prevUsers: any) => {
        const updatedUsers = [...prevUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("Sign up successful!");
        navigate("/Operators");
        console.log(newUser);
        console.log(updatedUsers);
        onLoginSuccess();
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        return updatedUsers;
      });
    }
  };

  const handelNavigate = () => {
    navigate("/Login");
    console.log("object");
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
                <LoginInput
                  label={"Email"}
                  placeholder={"Enter Your Email"}
                  type={"email"}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <LoginInput
                  label={"User name"}
                  placeholder={"Username"}
                  type={"text"}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
                <LoginInput
                  label={"Password"}
                  placeholder={"Password"}
                  type={"password"}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <LoginInput
                  label={"Confirm Password"}
                  placeholder={"Password"}
                  type={"password"}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <Loginbtn title={"Sign up"} onClick={handleSignUpClick} />
                <div className="already">
                  <p>
                    Already Have an account?
                    <button onClick={handelNavigate}>Login</button>
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

export default Singup;
