import { useState } from "react";
import { useApi } from "../../context/Api";
import Loader from "../../components/Loader";
function UserRole() {
  const [apiLoading, SetApiLoading] = useState(false);

  const { adminRoles, createSubAdmin } = useApi();
  const [subAdminData, setSubAdminData] = useState({
    email: "",
    name: "",
    password: "",
    role: "",
  });
  // console.log(adminRoles);
  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSubAdminData({
      ...subAdminData,
      [name]: value,
    });
  };

  const handleAddSubAdmin = async (e: any) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (
      !subAdminData.email ||
      !subAdminData.name ||
      !subAdminData.password ||
      !subAdminData.role
    ) {
      console.log("Please fill in all fields");
      return;
    }

    try {
      SetApiLoading(true);
      await createSubAdmin(subAdminData);
      setSubAdminData({
        email: "",
        name: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    } finally {
      SetApiLoading(false); // Set isLoading to false after completing the operation
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headings text-center">
            <h6> Add Sub-Admin</h6>
          </div>
          {/* <div className="searchadmin">
            <Input placeholder={"Search Sub-Admin"} />
          </div> */}
          <form action="" onSubmit={handleAddSubAdmin}>
            <div className="adminbox">
              <div className="serchadmin">
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={subAdminData.email}
                />
                <span>Email</span>
              </div>
              <div className="serchadmin">
                <input
                  type="text"
                  name="name"
                  value={subAdminData.name}
                  onChange={handleInputChange}
                />
                <span>Name</span>
              </div>
              <div className="serchadmin">
                <input
                  type="password"
                  name="password"
                  value={subAdminData.password}
                  onChange={handleInputChange}
                />
                <span>Password</span>
              </div>
              <div className="serchadmin">
                <select
                  name="role"
                  id=""
                  form="carform"
                  onChange={handleInputChange}
                  value={subAdminData.role}
                >
                  <option value="Select Role" disabled selected>
                    Select Role
                  </option>
                  {adminRoles?.map((role: any) => (
                    <option value={role._id}>{role.roleName}</option>
                  ))}
                </select>
              </div>

              <div className="btnsave">
                {" "}
                {apiLoading ? (
                  <Loader />
                ) : (
                  <button onClick={handleAddSubAdmin}>Add</button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRole;
