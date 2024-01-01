import Images from "../../images/Images";
import ManagementGroupTable from "../../components/ManagementGroupTable";
import ManagementGroupHeader from "../../components/ManagementGroupHeader";
import "../Management/Management.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid";
import { IoIosAdd } from "react-icons/io";
import { useApi } from "../../context/Api";
import { FaMinus } from "react-icons/fa6";
import Loader from "../../components/Loader";
function ManagementGroup() {
  const [openForm, setOpenForm] = useState(false);
  const [apiLoading, SetApiLoading] = useState(false);
  const { data, addGroup, deleteGroup, removeParols } = useApi();

  const datas: any = data;
  const [formData, setFormData] = useState<any>({
    groupName: "",
    groupInfo: "",
    role: "",
    parols: [],
  });
  const openform = () => {
    setOpenForm(true);
  };
  const closeform = () => {
    setOpenForm(false);
  };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
    // console.log(formData);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const uniqueId = uuidv4();
    const formDataWithId = {
      ...formData,
      groupId: uniqueId,
    };
    try {
      SetApiLoading(true);
      await addGroup(formDataWithId);

      setFormData({
        groupName: "",
        groupInfo: "",
        role: "",
        parols: [],
      });
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    } finally {
      SetApiLoading(false); // Set isLoading to false after completing the operation
    }
  };

  const handleAddUserToGroup = (user: any) => {
    // Check if the user is already in the group
    const isInGroup: any = formData.parols.includes(user._id);

    // If the user is in the group, remove them; otherwise, add them
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      parols: isInGroup
        ? prevFormData.parols.filter(
            (existingUserId: string) => existingUserId !== user._id
          )
        : [...prevFormData.parols, user._id],
    }));

    return false;
  };

  return (
    <div>
      <div className="container">
        <div className="managment-main">
          <div className="shead">
            <ManagementGroupHeader openform={openform} />
          </div>
        </div>
        <div className="managementTables">
          <ManagementGroupTable
            data={data}
            bg={"#ffff"}
            icon={Images.group}
            deleteGroup={deleteGroup}
            removeParols={removeParols}
          />
        </div>
        {openForm && (
          <div className="asingform">
            <div className="asinglayout">
              <div className="container">
                <div className="row">
                  {" "}
                  <div className="col-sm-6">
                    <h5>Create Group</h5>{" "}
                    <form action="" onSubmit={handleFormSubmit}>
                      <div className="asinginputs">
                        <input
                          type="text"
                          placeholder="Group Name"
                          name="groupName"
                          onChange={handleInputChange}
                          value={formData.groupName}
                        />
                      </div>
                      <div className="asinginputs">
                        <input
                          type="text"
                          placeholder="group Info"
                          name="groupInfo"
                          onChange={handleInputChange}
                          value={formData.groupInfo}
                        />
                      </div>
                      <div className="asinginputs">
                        <input
                          type="text"
                          placeholder="Role"
                          onChange={handleInputChange}
                          value={formData.role}
                          name="role"
                        />
                      </div>
                      <div className="asinginputs">
                        <CiSearch className="serches" />
                        <input type="text" placeholder="Add Members" />
                      </div>{" "}
                      <div className="asingbtns">
                        {apiLoading ? (
                          <Loader />
                        ) : (
                          <button>Create Group</button>
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-6">
                    <div className="memberlist">
                      <ul>
                        {datas?.parols.map((user: any) => (
                          <li>
                            {user.name}
                            <span>
                              <button
                                onClick={() => handleAddUserToGroup(user)}
                              >
                                {formData.parols.includes(user._id) ? (
                                  <FaMinus />
                                ) : (
                                  <IoIosAdd />
                                )}
                              </button>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="closebtn">
                <button onClick={closeform}>
                  <MdClose />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManagementGroup;
