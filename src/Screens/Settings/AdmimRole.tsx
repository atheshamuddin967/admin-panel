import { useApi } from "../../context/Api";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Loader from "../../components/Loader";
import DeleteModal from "../../components/DeleteModal";
function AdmimRole() {
  const [apiLoading, SetApiLoading] = useState(false);

  const { createAdminRole, adminRoles, removeAdminRole } = useApi();
  const [formData, setFormData] = useState<any>({
    roleName: "",
    permissions: [],
    isSuperAdmin: false,
  });

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;

    if (name === "super") {
      setFormData({ ...formData, isSuperAdmin: checked });
    } else {
      const updatedPermissions = checked
        ? [...formData.permissions, name]
        : formData.permissions.filter((permission: any) => permission !== name);

      setFormData({ ...formData, permissions: updatedPermissions });
    }
  };

  const handleRoleNameChange = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    setFormData({ ...formData, roleName: value });
  };

  const handleAddRoleClick = async (e: any) => {
    e.preventDefault();
    try {
      SetApiLoading(true);
      await createAdminRole(formData);
      setFormData({
        roleName: "",
        permissions: [],
        isSuperAdmin: false,
      });
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    } finally {
      SetApiLoading(false); // Set isLoading to false after completing the operation
    }
  };

  const [deleteItem, setDeleteItem] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const openDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteItem(item);
  };
  const closeDelete = () => {
    setDeleteModal(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headings text-center">
            <h6> Admin Role</h6>
          </div>
        </div>

        <div className="row space">
          <div className="col-sm-6">
            <div className="rolebox">
              <div className="text-center">
                <h6> Avilable Roles</h6>
              </div>

              <ul>
                {adminRoles?.map((role: any) => (
                  <li>
                    <p>{role.roleName} permissions</p>
                    <ul className="per">
                      {role.rolePermissions?.map((perm: any) => (
                        <li>{perm},</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        openDelete(role);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <form action="" onSubmit={handleAddRoleClick}>
              <div className="selecrtRole">
                <input
                  type="text"
                  placeholder="Add Role"
                  onChange={handleRoleNameChange}
                  value={formData.roleName}
                />
              </div>

              <div className="dropdown">
                <button
                  className="btn d-down dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Permisions
                </button>
                <ul className="dropdown-menu ">
                  {[
                    "Dashboard",
                    "Operations",
                    "Events",
                    "LiveAlarms",
                    "Media",
                    "Settings",
                    "UsersManagement",
                    "NumberPlates",
                  ].map((permission) => (
                    <li key={permission}>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id={permission}
                          name={permission}
                          onChange={handleCheckboxChange}
                          checked={formData.permissions.includes(permission)}
                        />
                        <label htmlFor={permission}>{permission}</label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="super">
                <input
                  type="checkbox"
                  name="super"
                  id="super"
                  onChange={handleCheckboxChange}
                  checked={formData.isSuperAdmin}
                />
                <label htmlFor="super">Make super administrator</label>
              </div>
              <div className="addrole">
                {" "}
                {apiLoading ? (
                  <Loader />
                ) : (
                  <button onClick={handleAddRoleClick}>Add Role</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {deleteModal && (
        <DeleteModal
          title={"Device"}
          button={removeAdminRole}
          closeDelete={closeDelete}
          item={deleteItem}
        />
      )}
    </div>
  );
}

export default AdmimRole;
