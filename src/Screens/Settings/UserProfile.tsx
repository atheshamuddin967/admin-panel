import Profile from "../../components/Profile";
import { useState } from "react";
function UserProfile() {
  const [username, setUsername] = useState("Chris-Hemsworth");
  const [email, setEmail] = useState("Chirs@gmail.com");
  const [password, setPassword] = useState("123456");
  const [isEditable, setIsEditable] = useState(true);
  const handleEditToggle = () => {
    setIsEditable(false);
  };
  const handleSave = () => {
    // Perform save logic here, e.g., update the user in the context or API call
    setIsEditable(true);
    // You can add logic to save the updated values to your backend or update context
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headings text-center">
            <h6> User Profile</h6>
          </div>
          <div className="Userdetails">
            <Profile username={username} />
          </div>

          <div className="furtherdetails">
            <div className="display">
              <div>
                <p>Username:</p>
                <p>Email:</p>
              </div>
              <div>
                <p>{username}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
          <div className="advancedetail">
            <div className="headings text-center">
              <h6>Advance Settings</h6>
            </div>
            <div className="display">
              <div>
                <label htmlFor="Username">Username:</label>
                <br />
                <label htmlFor="Email">Email:</label>
                <br />
                <label htmlFor="Password">Password:</label>
              </div>
              <div>
                <div className="inpdiv">
                  <input
                    type="text"
                    id="Username"
                    name="Username"
                    value={username}
                    readOnly={isEditable}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button onClick={handleEditToggle}>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </div>
                <div className="inpdiv">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </div>
                <div className="inpdiv">
                  <input
                    type="password"
                    id="pssword"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button>
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="btnsave">
              <button onClick={handleSave}>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
