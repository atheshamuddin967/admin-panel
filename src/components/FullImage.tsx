import Images from "../images/Images";
import ReactHlsPlayer from "react-hls-player";
import { useRef } from "react";
function FullImage({
  imgboxVideoSrc,
  handleHideImageClick,
  isImgboxVisible,
  currentDateTime,
}: any) {
  const playerRef = useRef(null);
  return (
    <div>
      {isImgboxVisible && (
        <div className="imgbox">
          <div className="secondbox">
            <ReactHlsPlayer
              src={`http://192.168.100.44:8000/live/${imgboxVideoSrc}/index.m3u8`}
              controls={false}
              style={{ maxHeight: "500px ", width: "500px" }}
              muted={true}
              autoPlay={true}
              width="100%"
              height="auto"
              playerRef={playerRef}
            />
            <div className="close-btns2" onClick={handleHideImageClick}>
              <i className="fas fa-times"></i>
            </div>
            <div className="bottom">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullImage;
