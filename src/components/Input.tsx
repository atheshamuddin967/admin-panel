import "../Screens/Operations/Operation.scss";
function Input({ onChange }: any) {
  return (
    <div>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search Device"
          onChange={(e) => onChange(e.target.value)}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default Input;
