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
  console.log("Video URL:", `file://${item.video}`);
  return (
    <div ref={drag} className="itemslist">
      <p>Device id {item.id}</p>
      <div className="h">
        <ReactPlayer
          url={item.video}
          // style={{ maxHeight: "100% " }}
          width={"100%"}
          height={"100px"}
          controls={false}
          playing={true}
          loop={true}
        />
        {/* <video style={{ width: "100%", height: "100%" }}>
          <source src={item.video} type="video/mp4" />
        </video> */}
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
