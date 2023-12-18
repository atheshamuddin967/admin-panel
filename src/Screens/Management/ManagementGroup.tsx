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

function ManagementGroup() {
  const [openForm, setOpenForm] = useState(false);
  const { data, addGroup } = useApi();

  const datas: any = data;
  const [formData, setFormData] = useState({
    groupName: "",
    groupInfo: "",
    role: "",
    users: [],
  });
  const openform = () => {
    setOpenForm(true);
  };
  const closeform = () => {
    setOpenForm(false);
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error fetching data</p>;
  // }
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const uniqueId = uuidv4();
    const formDataWithId = {
      ...formData,
      groupId: uniqueId,
    };
    console.log("Form data reset");
    await addGroup(formDataWithId);

    setFormData({
      groupName: "",
      groupInfo: "",
      role: "",
      users: [],
    });
  };
  interface User {
    _id: string; // Change the type accordingly
    // Other properties...
  }
  const handleAddUserToGroup = (user: User) => {
    // Check if the user is already in the group
    if (
      !formData.users.some(
        (existingUser: User) => existingUser._id === user._id
      )
    ) {
      // If not, add the user to the group
      setFormData((prevFormData: any) => ({
        ...prevFormData,
        users: [...prevFormData.users, user._id],
      }));
    }

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
            // handleDelete={handleDelete}
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
                      </div>
                      <div className="asingbtns">
                        <button>Create Group</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm-6">
                    <div className="memberlist">
                      <ul>
                        {datas?.users.map((user: any) => (
                          <li>
                            {user.name}
                            <span>
                              <button
                                onClick={() => handleAddUserToGroup(user)}
                              >
                                <IoIosAdd />
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
