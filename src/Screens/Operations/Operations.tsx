import Items from "../../Data/ItemData";
import Dragbox from "../../components/Dragbox";
import Dragitem from "../../components/Dragitem";
import Googlemap from "../../components/Googlemap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState, useEffect } from "react";

import Search from "../../components/Search";
import FullImage from "../../components/FullImage";

function Operations() {
  const [droppedItem, setDroppedItem] = useState(null);
  const [isImgboxVisible, setIsImgboxVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState(Items);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [imgboxVideoSrc, setImgboxVideoSrc] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const handleViewImageClick = (videoSrc: any) => {
    setIsImgboxVisible(true);
    setImgboxVideoSrc(videoSrc);
    setDroppedItem(null);
    console.log(imgboxVideoSrc);
  };
  const handleHideImageClick = () => {
    setIsImgboxVisible(false);
  };
  const handleDrop = (item: any) => {
    console.log(item);
    setDroppedItem(item);
  };
  useEffect(() => {}, [droppedItem]);
  const handleSearch = (searchTerm: string) => {
    const filtered =
      searchTerm.trim() !== ""
        ? Items.filter((item) =>
            item.id.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : Items;

    setFilteredItems(filtered);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="row ">
          <div className="col-sm-7">
            <div className="maps-box">
              <Googlemap style={{ borderRadius: "16px" }} height={"300px"} />
            </div>

            <Dragbox item={droppedItem} onDrop={handleDrop} />
          </div>
          <div className="col-sm-5">
            <div className="search">
              <Search onChange={handleSearch} />
            </div>

            <div className="dragitem">
              {filteredItems.map((item) => (
                <Dragitem
                  key={item.id}
                  item={item}
                  onDrop={handleDrop}
                  onViewImageClick={handleViewImageClick}
                />
              ))}
            </div>
          </div>
        </div>
        <FullImage
          imgboxVideoSrc={imgboxVideoSrc}
          handleHideImageClick={handleHideImageClick}
          isImgboxVisible={isImgboxVisible}
          currentDateTime={currentDateTime}
        />
      </div>
    </DndProvider>
  );
}

export default Operations;
