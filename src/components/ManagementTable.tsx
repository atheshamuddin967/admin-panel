function ManagementTable({ data, icon, bg }: any) {
  // console.log(data);
  return (
    <div className="table-responsive">
      <table className="custom-table table table-hover text-center ">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Role</th>
            <th>Last Login</th>
            <th>Status</th>

            <th></th>
          </tr>
        </thead>

        <tbody className="table-row text-center">
          {data?.users?.map((user: any) => (
            <tr className="tr-vehicle" key={user?._id}>
              <td className="table-data">
                <div className="round" style={{ backgroundColor: bg }}>
                  <img src={icon} alt="alarm" />
                </div>
              </td>
              <td> {user?.username}</td>
              <td>{user?.role || "-"}</td>
              <td>{user?.lastlogin || "-"}</td>
              <td>{user?.status || "-"}</td>

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

export default ManagementTable;
