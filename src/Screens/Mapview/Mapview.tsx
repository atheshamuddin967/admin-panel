import Input from "../../components/Input";
import LiveMap from "../../components/LiveMap";
import "../Mapview/Map.scss";
// import { useEffect } from "react";
import { useApi } from "../../context/Api";
// import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
function Mapview() {
  const [SearchUser, setSearchUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { data } = useApi();

  const datas: any = data;
  const UserData = datas.users;

  const handleSearch = () => {
    const selectedUser = UserData?.find(
      (user: any) => user.deviceCode === searchValue
    );

    if (selectedUser) {
      console.log("Selected User:", selectedUser);
      setSearchUser(selectedUser);
    } else {
      console.log("User not found");
    }
  };

  return (
    <div className="container">
      <div className="inp-box">
        <Input
          placeholder={"Search Devices"}
          searchValue={searchValue}
          onChange={(value: any) => setSearchValue(value)}
          onSearch={handleSearch}
        />
      </div>

      <LiveMap SearchUser={SearchUser} height={"100vh"} />
    </div>
  );
}

export default Mapview;
