import "../Screens/Operations/Operation.scss";

import Input from "./Input";
function Search({ onChange }: any) {
  return (
    <div>
      <div className="flex2">
        <Input onChange={onChange} placeholder={"Serach Device"} />
        <div className="filterbox">
          <button>
            <i className="fa-solid fa-sliders"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
