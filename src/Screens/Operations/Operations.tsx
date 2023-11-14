import Items from "../../Data/ItemData";
import Dragbox from "../../components/Dragbox";
import Dragitem from "../../components/Dragitem";
import Googlemap from "../../components/Googlemap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState, useEffect } from "react";
import Images from "../../images/Images";

function Operations() {
  const [droppedItem, setDroppedItem] = useState(null);
  const [isImgboxVisible, setIsImgboxVisible] = useState(false);

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [imgboxVideoSrc, setImgboxVideoSrc] = useState("");
  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
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
  useEffect(() => {
    console.log(droppedItem);
  }, [droppedItem]);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="row ">
          <div className="col-sm-7">
            <div className="maps-box">
              <Googlemap />
            </div>

            <Dragbox item={droppedItem} onDrop={handleDrop} />
          </div>
          <div className="col-sm-5">
            <div className="dragitem">
              {Items.map((item) => (
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
    </DndProvider>
  );
}

export default Operations;
