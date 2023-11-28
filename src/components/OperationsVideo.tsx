import ReactPlayer from "react-player";
import Images from "../images/Images";
function OperationsVideo({ item, onViewImageClick }: any) {
  return (
    <div className="container p-0">
      <div className="row p-0">
        {item.map((vid: any) => (
          <div className="col-sm-4 p-0 m-0">
            <div className="itemsvid">
              <p>
                {" "}
                {vid.id}{" "}
                <span onClick={() => onViewImageClick(vid.video)}>
                  <img src={Images.view} alt="" />
                </span>
              </p>

              <ReactPlayer
                url={vid.video}
                style={{ maxHeight: "100px " }}
                width={"100%"}
                controls={false}
                playing={true}
                loop={true}
              />
              <div className="iconsvid">
                <div>
                  <img src={Images.pause} alt="" />
                  <img src={Images.play} alt="" />
                  <img src={Images.volume} alt="" />
                  <img src={Images.frontcam2} alt="" />
                </div>

                <div>
                  <img src={Images.mic} alt="" />
                  <img src={Images.movie} alt="" />
                  <img src={Images.back} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OperationsVideo;
