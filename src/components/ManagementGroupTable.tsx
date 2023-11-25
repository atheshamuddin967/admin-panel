import { FaChevronRight } from "react-icons/fa";
import Images from "../images/Images";
import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";

import React from "react";

function ManagementGroupTable({ data, icon, bg }: any) {
  const groupdata = data.map((group: any) => group.group);
  const [showGroupDiv, setShowGroupDiv] = useState(false);

  const toggleGroupDiv = (group: any) => {
    if (showGroupDiv !== group.groupname) {
      setShowGroupDiv(group.groupname);
    } else if (showGroupDiv === group.groupname) {
      setShowGroupDiv(false);
    }
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
            {groupdata[0].map((group: any) => (
              <React.Fragment key={group.groupname}>
                <tr
                  className="tr-vehicle"
                  onClick={() => toggleGroupDiv(group)}
                >
                  <td className="table-data">
                    <div className="round" style={{ backgroundColor: bg }}>
                      <img src={icon} alt="alarm" />
                    </div>
                  </td>
                  <td> {group.groupname}</td>
                  <td>{group.role}</td>
                  <td>{group.created}</td>
                  <td>{group.groupstatus}</td>

                  <td className="edit-delete">
                    <button onClick={() => toggleGroupDiv(group)}>
                      {showGroupDiv === group.groupname ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </button>
                    <button>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>

                {showGroupDiv === group.groupname && (
                  <>
                    {group.drivers.map((driver: any) => {
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
                          <td> {driver.Name}</td>
                          <td>{driver.role}</td>
                          <td>-</td>
                          <td>{driver.status}</td>
                          <td className="edit-delete"></td>
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
