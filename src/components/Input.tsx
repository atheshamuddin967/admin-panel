import "../Screens/Operations/Operation.scss";
function Input({ onChange, onSearch, searchValue, placeholder }: any) {
  const handleSearchClick = () => {
    onSearch();
  };
  return (
    <div>
      <div className="searchbox">
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => onChange(e.target.value)}
        />
        <button onClick={handleSearchClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
}

export default Input;
