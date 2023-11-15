import "../Screens/Operations/Operation.scss";
import Images from "../images/Images";
function MonitorItem({ item, onViewImageClick }: any) {
  return (
    <div>
      <div className="itemslist">
        <video width="100%" height="100" controls>
          <source src={item.video} type="video/mp4" />
        </video>
        <div className="flex">
          <p>
            Vehicle id: <span>{item.id} </span>
          </p>
          <div onClick={() => onViewImageClick(item.video)}>
            <p>view</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonitorItem;
