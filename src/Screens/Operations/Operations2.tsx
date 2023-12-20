import Input from "../../components/Input";
import { useState, useEffect } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useApi } from "../../context/Api";
// import { useUser } from "../../context/Socketprovider";
// import { socket } from "../../context/SoccketIo";
import FullImage from "../../components/FullImage";
import OperationsVideo from "../../components/OperationsVideo";
import { useNavigate } from "react-router-dom";
import Operationsider from "../../components/Operationsider";
// import AudioStream from "../../components/AudioStream";
import LiveMap from "../../components/LiveMap";
// import { Notification } from "../../components/Notification";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
function Operations2() {
  const navigate = useNavigate();
  const [imgboxVideoSrc, setImgboxVideoSrc] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isImgboxVisible, setIsImgboxVisible] = useState(false);
  // const [audioox, setAudioBox] = useState(false);
  // const [selectedItem, setSelectedItem] = useState<any>(null);

  const { data } = useApi();
  const datas: any = data;

  // const OpenAudio = (group: any) => {
  //   console.log(group);
  //   setSelectedItem(group);
  //   setAudioBox(true);
  // };
  // const CloseAudio = (group: any) => {
  //   console.log(group);
  //   setSelectedItem(null);
  //   setAudioBox(false);
  // };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const handleViewImageClick = (videoSrc: any) => {
    setIsImgboxVisible(true);
    setImgboxVideoSrc(videoSrc);
    console.log(imgboxVideoSrc);
  };
  const handleHideImageClick = () => {
    setIsImgboxVisible(false);
  };

  const plates = () => {
    navigate("/Operations3");
  };
  const videos = () => {
    navigate("/Operations2");
  };

  return (
    <div className="container">
      <div className="row space">
        <div className="col-sm-2">
          <div className="shead">
            <Operationsider data={datas} />
          </div>
        </div>
        <div className="col-sm-5">
          <div className="shead">
            <div className="mapbox">
              <LiveMap height={"300px"} />
              <div className="searches">
                <Input placeholder={"Search Devices"} />
              </div>
            </div>

            <div className="detailing-box">
              <div className="optionss">
                <button onClick={plates}>plates</button>
                <div className="border"></div>{" "}
                <button className="activebtn" onClick={videos}>
                  Videos
                </button>
              </div>
              <div className="sperator"></div>
              <h5>Search Results</h5>
              <h6>Results From 12-5-2023 to 12-11-2023</h6>

              <div className="table-responsive">
                <table className="table table-hover text-center">
                  <thead>
                    <th>Date-Time</th>
                    <th>Plate</th>
                    <th>Device Name</th>
                    <th>Avilable</th>
                  </thead>
                  <tbody>
                    <tr className="tr">
                      <td>12-6-2023-5:15pm</td>
                      <td>Abc-123 </td>
                      <td>Scout001</td>
                      <td>
                        <MdRemoveRedEye />
                      </td>
                    </tr>
                    <tr className="tr">
                      <td>12-6-2023-5:15pm</td>
                      <td>Abc-123 </td>
                      <td>Scout001</td>
                      <td>
                        <MdRemoveRedEye />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <DndProvider backend={HTML5Backend}>
            <div className="videoscreen">
              <OperationsVideo onViewImageClick={handleViewImageClick} />
            </div>
          </DndProvider>
        </div>
      </div>
      <FullImage
        imgboxVideoSrc={imgboxVideoSrc}
        handleHideImageClick={handleHideImageClick}
        isImgboxVisible={isImgboxVisible}
        currentDateTime={currentDateTime}
      />
      {/* {audioox && (
        <AudioStream CloseAudio={CloseAudio} selectedItem={selectedItem} />
      )} */}
    </div>
  );
}

export default Operations2;
