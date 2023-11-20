import "../Screens/Login/Login.scss";
function Loginbtn({ title, onClick }: any) {
  return (
    <div className="login-btn">
      <button onClick={onClick}>{title}</button>
    </div>
  );
}

export default Loginbtn;
