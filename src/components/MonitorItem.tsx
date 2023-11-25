import "../Screens/Operations/Operation.scss";
// import Images from "../images/Images";
import ReactPlayer from "react-player";
function MonitorItem({ item, onViewImageClick }: any) {
  return (
    <div>
      <div className="itemslist">
        <ReactPlayer
          url={item.video}
          style={{ maxHeight: "100px" }}
          width={"100%"}
          controls={false}
        />
        <div className="flex">
          <p>
            Vehicle id: <span>{item.vehicleId} </span>
          </p>
          <div className="click" onClick={() => onViewImageClick(item.video)}>
            <p>view</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorItem;
