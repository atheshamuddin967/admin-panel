import "../Search/Search.scss";
function NotifictionSetting() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headings text-center">
            <h6>Notifications</h6>
          </div>
          <div className="notidisplay">
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="alarm">Alarm Sound</label>
              </div>
              <div className="adminnoti">
                <select name="alarm" id="" form="carform">
                  <option value="volvo">&#9835; Clasic Alarm Bell</option>
                  <option value="saab">&#9835; Standard Alarm Bell</option>
                  <option value="opel">&#9835; Popup Sound</option>
                  <option value="audi">&#9835; Nokia</option>
                </select>
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="event">Event Sound</label>
              </div>
              <div className="adminnoti">
                <select name="event" id="" form="carform">
                  <option value="opel">&#9835; Popup Sound</option>
                  <option value="volvo">&#9835; Clasic Alarm Bell</option>
                  <option value="saab">&#9835; Standard Alarm Bell</option>

                  <option value="audi">&#9835; Nokia</option>
                </select>
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="alarm">Alarm Sound</label>
              </div>
              <div className="adminnoti">
                <select name="message" id="" form="carform">
                  <option value="saab">&#9835; Standard Alarm Bell</option>
                  <option value="volvo">&#9835; Clasic Alarm Bell</option>

                  <option value="opel">&#9835; Popup Sound</option>
                  <option value="audi">&#9835; Nokia</option>
                </select>
              </div>
            </div>
            <div className="headings text-center">
              <h6>Aditional Notifications</h6>
            </div>

            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="Targer">
                  Target Detection
                  <span>(for cctv)</span>
                </label>
              </div>
              <div className="adminnoti">
                <select name="Target" id="" form="carform">
                  <option value="opel">&#9835; Popup Sound</option>
                  <option value="volvo">&#9835; Clasic Alarm Bell</option>
                  <option value="saab">&#9835; Standard Alarm Bell</option>

                  <option value="audi">&#9835; Nokia</option>
                </select>
              </div>
            </div>
            <div className="display2">
              <div className="adminnoti">
                <label htmlFor="Plate">Plate Detection</label>
              </div>
              <div className="adminnoti">
                <select name="Target" id="" form="carform">
                  <option value="opel">&#9835; Popup Sound</option>
                  <option value="volvo">&#9835; Clasic Alarm Bell</option>
                  <option value="saab">&#9835; Standard Alarm Bell</option>

                  <option value="audi">&#9835; Nokia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotifictionSetting;
