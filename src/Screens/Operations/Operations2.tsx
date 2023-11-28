import Input from "../../components/Input";
import { useState, useEffect } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import Items from "../../Data/ItemData";
import FullImage from "../../components/FullImage";
import OperationsVideo from "../../components/OperationsVideo";
import { useNavigate } from "react-router-dom";
import Operationsider from "../../components/Operationsider";
function Operations2() {
  const navigate = useNavigate();
  const [imgboxVideoSrc, setImgboxVideoSrc] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isImgboxVisible, setIsImgboxVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const handleViewImageClick = (videoSrc: any) => {
    setIsImgboxVisible(true);
    setImgboxVideoSrc(videoSrc);
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
        <div className="col-sm-3">
          <div className="shead">
            <Operationsider />
          </div>
        </div>
        <div className="col-sm-5">
          <div className="mapbox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795831!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1701098720721!5m2!1sen!2s"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
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
        <div className="col-sm-4">
          <div className="videoscreen">
            <OperationsVideo
              item={Items}
              onViewImageClick={handleViewImageClick}
            />
          </div>
        </div>
      </div>
      <FullImage
        imgboxVideoSrc={imgboxVideoSrc}
        handleHideImageClick={handleHideImageClick}
        isImgboxVisible={isImgboxVisible}
        currentDateTime={currentDateTime}
      />
    </div>
  );
}

export default Operations2;
