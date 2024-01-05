import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import Images from "../images/Images";
import DeleteModal from "./DeleteModal";
import moment from "moment";
import UserDeleteModal from "./UserDeleteModal";
function ManagementGroupTable({
  data,
  icon,
  bg,
  deleteGroup,
  removeParols,
}: any) {
  const [showGroupDiv, setShowGroupDiv] = useState(false);
  const [deleteItem, setDeleteItem] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletelist, setDeleteList] = useState("");
  const [deletelist1, setDeleteList1] = useState("");
  const [modal, setModal] = useState(false);
  const openDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteItem(item);
  };
  const closeDelete = () => {
    setDeleteModal(false);
  };
  const toggleGroupDiv = (group: any) => {
    if (showGroupDiv !== group._id) {
      setShowGroupDiv(group._id);
      console.log(group);
    } else if (showGroupDiv === group._id) {
      setShowGroupDiv(false);
    }
  };
  const handleDeleteGroup = (groupId: string) => {
    // Call the deleteGroup function with the group ID
    console.log(groupId);
    deleteGroup(groupId);
  };
  const handleDeleteuser = (UserId: string, groupId: string) => {
    // Call the deleteGroup function with the group ID
    console.log(UserId);
    removeParols(UserId, groupId);
  };

  const openListModal = (groupId: any, userId: any) => {
    setDeleteList(groupId);
    setDeleteList1(userId);
    setModal(true);
  };
  const closeListModal = () => {
    setModal(false);
  };

  return (
    <div>
      <div className="table-responsive">
        <table className="custom-table table table-hover text-center ">
          <thead>
            <tr>
              <th></th>
              <th>Group Name</th>
              <th>Role</th>
              <th>Created</th>
              <th>Status</th>

              <th></th>
            </tr>
          </thead>

          <tbody className="table-row text-center">
            {data?.groups?.map((group: any) => (
              <React.Fragment key={group._id}>
                <tr className="tr-vehicle">
                  <td className="table-data">
                    <div className="round" style={{ backgroundColor: bg }}>
                      <img src={icon} alt="alarm" />
                    </div>
                  </td>
                  <td> {group.groupName}</td>
                  <td>{group.role}</td>
                  <td>
                    {moment(group.createdOn).format("MMMM Do YYYY, h:mm:ss a")}
                  </td>
                  <td>{group.status}</td>

                  <td className="edit-delete">
                    <button onClick={() => toggleGroupDiv(group)}>
                      {showGroupDiv === group._id ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </button>
                    <button>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button
                      onClick={() => {
                        openDelete(group._id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>

                {showGroupDiv === group._id && (
                  <>
                    {group?.parols?.map((driver: any) => {
                      return (
                        <tr className="tr-vehicle" key={driver.id}>
                          <td className="table-data">
                            <div
                              className="round"
                              style={{ backgroundColor: bg }}
                            >
                              <img src={Images.proficon} alt="icon" />
                            </div>
                          </td>
                          <td> {driver.username}</td>
                          <td>{driver.role}</td>
                          <td>-</td>
                          <td>{driver.status}</td>
                          <td className="edit-delete">
                            <button
                              onClick={() => {
                                openListModal(group._id, driver._id);
                              }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {deleteModal && (
        <DeleteModal
          title={"group"}
          button={handleDeleteGroup}
          closeDelete={closeDelete}
          item={deleteItem}
        />
      )}
      {modal && (
        <UserDeleteModal
          title={" user from group "}
          button={handleDeleteuser}
          closeDelete={closeListModal}
          item={deletelist}
          itemId={deletelist1}
        />
      )}
    </div>
  );
}

export default ManagementGroupTable;
