function UserPreference() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="media">
            <div className="headings text-center">
              <h6>User Preference</h6>
            </div>
            {/* <div className="notidisplay"> */}
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="alarm">Select Time Zone</label>
              </div>
              <div className="adminnoti">
                <select name="alarm" id="" form="carform">
                  <option value="volvo"> UTC−04:00 (AST)</option>
                  <option value="saab"> UTC−03:00 (ART)</option>
                  <option value="opel"> UTC+04:00</option>
                  <option value="audi">UTC+01:00 (CET)</option>
                </select>
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="event">Select Theme</label>
              </div>
              <div className="adminnoti">
                <select name="event" id="" form="carform">
                  <option value="opel"> Light</option>
                  <option value="volvo">Dark</option>
                </select>
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="event">Map Display</label>
              </div>
              <div className="adminnoti">
                <select name="event" id="" form="carform">
                  <option value="opel"> Google Map</option>
                  <option value="volvo">other</option>
                </select>
              </div>
            </div>
            <div className="savesbtn">
              <button className="savesbtn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default UserPreference;
