function ManagementGroupTable({ data, icon, bg }: any) {
  const groupdata = data.map((group: any) => group.group);
  console.log(groupdata);

  return (
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
            <tr className="tr-vehicle" key={group.groupname}>
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
                <button>
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagementGroupTable;
