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

            <h5>Select path for Saving Media </h5>
            <div className="selects">
              <select name="Target" id="" form="carform">
                <option value="opel"> Cloud Storage</option>
                <option value="volvo">Local Storage</option>
                <option value="saab">Device Storage</option>
              </select>
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaSettings;
