import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import Images from "../images/Images";

function ManagementGroupTable({
  data,
  icon,
  bg,
  deleteGroup,
  removeParols,
}: any) {
  const [showGroupDiv, setShowGroupDiv] = useState(false);

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
  return (
    <>
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
                  <td>{group.createdOn}</td>
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
                        handleDeleteGroup(group._id);
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
                                handleDeleteuser(group._id, driver._id);
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
    </>
  );
}

export default ManagementGroupTable;
