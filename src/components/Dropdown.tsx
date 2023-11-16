import "../Screens/Alarms/Alarm.scss";
function Dropdown() {
  return (
    <div className="alarm-type">
      <select name="Alarm types" id="cars" form="carform">
        <option value="" disabled selected hidden>
          Alarm Type
        </option>
        <option value="volvo">Online</option>
        <option value="saab">Ofline</option>
        <option value="opel">All</option>
      </select>
    </div>
  );
}

export default Dropdown;
