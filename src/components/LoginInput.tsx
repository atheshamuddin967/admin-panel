import { useState } from "react";
import "../Screens/Login/Login.scss";
import { FaEyeSlash } from "react-icons/fa";

function LoginInput({ placeholder, name, id, type, label, onChange }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword =
    label.toLowerCase().includes("password") ||
    label.toLowerCase().includes("confirm password");
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="logininput">
      <label htmlFor={name}>{label}</label>
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
      />
      {isPassword && (
        <button onClick={handleTogglePassword}>
          <FaEyeSlash />
        </button>
      )}
    </div>
  );
}

export default LoginInput;
