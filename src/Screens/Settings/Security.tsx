function Security() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="media">
            <div className="headings text-center">
              <h6>Security</h6>
            </div>
            <div className="security">
              <div className="display2">
                <div className="adminnoti">
                  <label htmlFor="old">Old Password:</label>
                </div>
                <div className="adminnoti">
                  <input type="password" id="old" placeholder="Old password" />
                </div>
              </div>
              <div className="display2">
                <div className="adminnoti">
                  <label htmlFor="old">New Password:</label>
                </div>
                <div className="adminnoti">
                  <input type="password" id="old" placeholder="New password" />
                </div>
              </div>
              <div className="savesbtn2">
                <button>Save</button>
              </div>
            </div>
            <div className="twostep">
              <h5>Two Step verification</h5>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="num">Phone#:</label>
              </div>
              <div className="adminnoti">
                <input type="number" id="num" placeholder="Enter Phone#" />
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="code">verification Code:</label>
              </div>
              <div className="adminnoti">
                <input type="text" id="code" placeholder="Enter Code" />
              </div>
            </div>
            <div className="savesbtn2">
              <button>Save</button>
            </div>

            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="event">Backup Data</label>
              </div>
              <div className="adminnoti">
                <select name="event" id="" form="carform">
                  <option value="opel"> Daily Backup</option>
                  <option value="volvo">Weakly</option>
                  <option value="volv">Monthly</option>
                </select>
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="event">Restore Data</label>
              </div>
              <div className="adminnoti">
                <select name="event" id="" form="carform">
                  <option value="opel"> From cloud</option>
                  <option value="volvo">From Google</option>
                </select>
              </div>
            </div>
            <div className="savesbtn2">
              <button>Backup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
