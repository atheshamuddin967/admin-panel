import "../Screens/Login/Login.scss";

function LoginInput({ placeholder, name, id, type, label, onChange }: any) {
  return (
    <div className="logininput">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}

export default LoginInput;
