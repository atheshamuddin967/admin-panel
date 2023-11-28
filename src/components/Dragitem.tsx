import "../Screens/Operations/Operation.scss";
import Images from "../images/Images";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../components/ItemType";
import ReactPlayer from "react-player";
function Dragitem({ item, onViewImageClick }: any) {
  const [, drag] = useDrag({
    type: ItemTypes.DRAGGABLE_ITEM,
    item: { id: item.id, ...item },
  });

  return (
    <div ref={drag} className="itemslist">
      <p>Device id {item.id}</p>
      <div className="h">
        <ReactPlayer
          url={item.video}
          style={{ maxHeight: "100% " }}
          width={"100%"}
          controls={false}
        />
      </div>
      <div className="flex">
        <ul>
          <li>
            <img src={Images.movie} alt="" />
          </li>
          <li>
            <img src={Images.lilmic} alt="" />
          </li>
          <li>
            <img src={Images.back} alt="" />
          </li>
          <li>
            <img src={Images.front} alt="" />
          </li>
        </ul>
        <div>
          <img src={Images.view} onClick={() => onViewImageClick(item.video)} />
        </div>
      </div>
    </div>
  );
}

export default Dragitem;

// ItemTypes.js
