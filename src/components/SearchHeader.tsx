import { useState } from "react";

function SearchHeader({ search }: any) {
  const [searchValue, setSearchvalue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchvalue(event.target.value);
    console.log(searchValue);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    search(searchValue);
  };
  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="">
          <div className="serachly">
            <div className="serach-boxs">
              <input
                type="serach"
                placeholder="Search here"
                value={searchValue}
                onChange={handleChange}
              />
              <button onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <i className="fa-solid fa-sliders"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
