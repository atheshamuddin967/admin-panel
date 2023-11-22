import "../Settings/Settings.scss";
function MediaSettings() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="media">
            <div className="headings text-center">
              <h6>Media settings</h6>
            </div>
            <div className="headings2">
              <h5>Select path for Saving Media </h5>
            </div>

            <div className="selects">
              <select name="Target" id="" form="carform">
                <option value="opel"> Cloud Storage</option>
                <option value="volvo">Local Storage</option>
                <option value="saab">Device Storage</option>
              </select>
              <button>Save</button>
            </div>
            <div className="headings text-center ">
              <h6>Aditional Media Settings</h6>
            </div>
            <div className="selects2 ">
              <h6>Select Path For photos</h6>
              <select name="Target" id="" form="carform">
                <option value="opel"> Cloud Storage</option>
                <option value="volvo">Local Storage</option>
                <option value="saab">Device Storage</option>
              </select>
            </div>

            <div className="selects2 ">
              <h6>Select Path For Videos</h6>
              <select name="Target" id="" form="carform">
                <option value="opel"> Cloud Storage</option>
                <option value="volvo">Local Storage</option>
                <option value="saab">Device Storage</option>
              </select>
            </div>
            <div className="savesbtn">
              {" "}
              <button className="savesbtn">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaSettings;
