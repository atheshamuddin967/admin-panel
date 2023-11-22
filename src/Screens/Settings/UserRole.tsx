import Input from "../../components/Input";

function UserRole() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headings text-center">
            <h6> User Profile</h6>
          </div>
          <div className="searchadmin">
            <Input placeholder={"Search Sub-Admin"} />
          </div>
          <div className="adminbox">
            <div className="headings">
              <h5>Add Sub-Admin</h5>
            </div>

            <div className="serchadmin">
              <input type="text" />
              <span>Username</span>
            </div>
            <div className="serchadmin">
              <input type="text" />
              <span>Email</span>
            </div>
            <div className="serchadmin">
              <input type="text" />
              <span>Role</span>
            </div>
            <div className="btnsave">
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRole;
