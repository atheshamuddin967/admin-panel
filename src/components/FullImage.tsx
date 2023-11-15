import Images from "../images/Images";

function FullImage({
  imgboxVideoSrc,
  handleHideImageClick,
  isImgboxVisible,
  currentDateTime,
}: any) {
  return (
    <div>
      {isImgboxVisible && (
        <div className="imgbox">
          <div className="secondbox">
            <video width="100%" height="" controls>
              <source src={imgboxVideoSrc} type="video/mp4" />
            </video>
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
