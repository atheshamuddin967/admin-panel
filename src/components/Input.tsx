import "../Screens/Operations/Operation.scss";
function Input({ onChange, placeholder }: any) {
  return (
    <div>
      <div className="searchbox">
        <input
          type="text"
          placeholder={placeholder}
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
