import Input from "../components/Input";
import Images from "../images/Images";
import "../Screens/Management/Management.scss";
import ManagementGroupselect from "./ManagementGroupSelect";
import { useNavigate } from "react-router-dom";

function ManagementGroupHeader({ openform }: any) {
  const navigate = useNavigate();

  const handleSelectChange = (event: any) => {
    const selectedOption = event.target.value;

    // Use history.push to navigate to the appropriate route based on the selected option
    if (selectedOption === "User") {
      navigate("/Management");
    } else if (selectedOption === "Group") {
      navigate("/ManagementGroup");
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="flex5">
            <Input placeholder={"Search user"} />
            <div className="imgox">
              <img src={Images.filter} alt="filter" />
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="mHeader-btns">
            <ManagementGroupselect onChange={handleSelectChange} />
            <button className="asing" onClick={openform}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementGroupHeader;
