import "../Screens/Alarms/Alarm.scss";
function Dropdown({ label }: any) {
  return (
    <div className="alarm-type">
      <select name="Alarm types" id="cars" form="carform">
        <option value="" disabled selected hidden>
          {label}
        </option>
        <option value="volvo">Online</option>
        <option value="saab">Ofline</option>
        <option value="opel">All</option>
      </select>
    </div>
  );
}

export default Dropdown;
