import "../Screens/Operations/Operation.scss";
import { MdHeadphones } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { useUser } from "../context/Socketprovider";
import { useState, useEffect } from "react";
function FullImage({
  imgboxVideoSrc,
  handleHideImageClick,
  isImgboxVisible,
  currentDateTime,
}: any) {
  const [matchedUser, setMatchedUser] = useState<any>(null);

  const { myuser } = useUser();
  const user: any = myuser;
  const findMatchingUser = () => {
    const matchingUser: any = user.find(
      (user: any) => user.deviceCode === imgboxVideoSrc.deviceCode
    );
    setMatchedUser(matchingUser || null);
  };

  const renderIcon = () => {
    if (matchedUser.stream_type === "TX") {
      return (
        <>
          Video & Audio <MdOndemandVideo className="streamicon" />
        </>
      );
    } else if (matchedUser.stream_type === "ATX") {
      return (
        <>
          Audio Only <MdHeadphones className="streamicon" />
        </>
      );
    }

    return null;
  };
  useEffect(() => {
    findMatchingUser();
  }, [imgboxVideoSrc.deviceCode, imgboxVideoSrc.stream_type, myuser]);

  return (
    <div>
      {isImgboxVisible && (
        <div className="imgbox">
          <div className="secondbox">
            <div className="row">
              <div className="col-sm-4">
                <div className="names">
                  <p>
                    Username: {matchedUser?.name} <br />
                    Stream Type: {renderIcon()}
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <p>{currentDateTime.toLocaleString()}</p>
              </div>
              <div className="col-sm-4">
                <div className="close-btns2" onClick={handleHideImageClick}>
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>

            <iframe
              src={`http://66.135.24.9:5080/WebRTCAppEE/play.html?id=${matchedUser.deviceCode}`}
              width="500px"
              height="100vh"
              frameBorder="0"
              style={{ minWidth: "500px", height: "80vh", width: "100%" }}
              className="custom-iframe"
            ></iframe>

            {/* <div className="bottom">
              <ul className="text-center">
                <li>
                  <img src={Images.wmovie} alt="/" />
                </li>
                <li>
                  <li>
                    <img src={Images.wmic} alt="/" />
                  </li>
                  <img src={Images.bcam} alt="/" />
                </li>

                <li>
                  <img src={Images.fcam} alt="/" />
                </li>
              </ul>
              <p>{currentDateTime.toLocaleString()}</p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default FullImage;
