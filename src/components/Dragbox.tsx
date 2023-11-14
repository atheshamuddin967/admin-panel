import "../Screens/Operations/Operation.scss";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemType";

const Dragbox = ({ onDrop, item }: any) => {
  const [, drop] = useDrop({
    accept: ItemTypes.DRAGGABLE_ITEM,
    drop: (DraggedItem) => onDrop(DraggedItem),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop}>
      {item ? (
        <div className="dragbox">
          <div className="info">
            <h3>Device info</h3>
            <div className="flex2">
              <p>Device id</p>
              <p>{item.id}</p>
            </div>
            <div className="flex2">
              <p>Device Type</p>
              <p>{item.type}</p>
            </div>
            <div className="flex2">
              <p>Device Operator</p>
              <p>{item.operator}</p>
            </div>
            <div className="flex2">
              <p>Gps location </p>
              <p>{item.location}</p>
            </div>
            <div className="flex2">
              <p>Last Update time</p>
              <p>{item.lastupdate}</p>
            </div>
            <div className="flex2">
              <p>Alert</p>
              <p>{item.alert}</p>
            </div>
            <div className="flex2">
              <p>Device Status</p>
              <p>{item.status}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-box">
          <h3>Select/Drop device here</h3>
        </div>
      )}
    </div>
  );
};

export default Dragbox;
