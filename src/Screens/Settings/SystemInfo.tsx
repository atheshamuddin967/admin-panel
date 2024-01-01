import { useState } from "react";
import { useApi } from "../../context/Api";
function SystemInfo() {
  const { systemConfig, editSystemConfig } = useApi();
  // console.log(systemConfig);
  const data: any = systemConfig;
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState<any>(null);
  const handleEditClick = () => {
    setEditMode(!editMode);

    // If entering edit mode, save the current data for editing
    if (!editMode) {
      setEditedData({ ...data });
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditedData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Call the editConfig function here
    editSystemConfig(editedData);

    // Alternatively, if you have the editSystemConfig function, you can use it like this:
    // editSystemConfig(editedData);

    // Exit edit mode
    setEditMode(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="headings text-center">
            <h6>System Info</h6>
          </div>
          <div className="infoboxmain">
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="_id">Id:</label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      name="_id"
                      id="_id"
                      value={editMode ? editedData?._id : data?._id}
                      onChange={handleInputChange}
                      readOnly={!editMode}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="commandPort">CommandPort:</label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      value={
                        editMode ? editedData?.commandPort : data?.commandPort
                      }
                      onChange={handleInputChange}
                      readOnly={!editMode}
                      name="commandPort"
                      id="commandPort"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="streamingPort">StreamingPort:</label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      value={
                        editMode
                          ? editedData?.streamingPort
                          : data?.streamingPort
                      }
                      onChange={handleInputChange}
                      readOnly={!editMode}
                      name="streamingPort"
                      id="streamingPort"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="staticServerIpAddress">
                    StaticServerIpAddress:
                  </label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      value={
                        editMode
                          ? editedData?.staticServerIpAddress
                          : data?.staticServerIpAddress
                      }
                      onChange={handleInputChange}
                      readOnly={!editMode}
                      name="staticServerIpAddress"
                      id="staticServerIpAddress"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="serverStaggingUrl">ServerStaggingUrl:</label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      value={
                        editMode
                          ? editedData?.serverStaggingUrl
                          : data?.serverStaggingUrl
                      }
                      onChange={handleInputChange}
                      readOnly={!editMode}
                      name="serverStaggingUrl"
                      id="serverStaggingUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="serverStaggingUrl">
                    ServerProductionUrl:
                  </label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      value={
                        editMode
                          ? editedData?.serverProductionUrl
                          : data?.serverProductionUrl
                      }
                      onChange={handleInputChange}
                      readOnly={!editMode}
                      name="serverProductionUrl"
                      id="serverProductionUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="logLevel">logLevel</label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <select
                      name="logLevel"
                      id="LogLevel"
                      value={editMode ? editedData?.logLevel : data?.logLevel}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    >
                      <option value="info">info</option>
                      <option value="debug">debug</option>
                      <option value="error">error</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox ">
              <div className="row">
                <div className="col-sm-5">
                  <label htmlFor="__v">__V</label>
                </div>

                <div className="col-sm-7">
                  <div className="infoinput">
                    <input
                      type="text"
                      value={editMode ? editedData?.__v : data?.__v}
                      onChange={handleInputChange}
                      readOnly={!editMode}
                      name="__v"
                      id="__v"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="infobox">
              <button onClick={handleSaveClick} disabled={!editMode}>
                Save
              </button>
              <button onClick={handleEditClick}>
                {editMode ? "Cancel" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemInfo;
