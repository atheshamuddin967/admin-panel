import Input from "../../components/Input";
import StreamItem from "../../components/StreamItem";
import "../Stream/Stream.scss";
import Items from "../../Data/ItemData";
import StreamList from "../../components/StreamList";

import { useState, useEffect, useRef } from "react";

function Stream() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  interface ItemTypess {
    video: string; // Adjust the type according to your actual data structure
    // Add other properties as needed
  }
  const [selectedItem, setSelectedItem] = useState<ItemTypess | null>(null);

  const handleItemClick = (item: ItemTypess) => {
    setSelectedItem(item);
  };
  // console.log(selectedItem?.video);
  if (Items.length > 0 && selectedItem === null) {
    setSelectedItem(Items[0]);
  }
  useEffect(() => {}, [selectedItem]);
  if (selectedItem && videoRef.current) {
    (videoRef.current as HTMLVideoElement).src = selectedItem.video;
  }
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-8">
            <StreamList Item={selectedItem} />
            <hr />
            <div className="vid-box">
              <video ref={videoRef} width="100%" height="400" controls>
                {/* <source src={selectedItem?.video} type="video/mp4" /> */}
              </video>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="vehicle-box">
              <Input placeholder={"Search Vehicle"} />
              {Items.map((item) => (
                <StreamItem
                  key={item.id}
                  Item={item}
                  onItemClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stream;
