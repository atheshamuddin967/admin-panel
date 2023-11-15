import Input from "../../components/Input";
import MonitorItem from "../../components/MonitorItem";
import "../Monitoring/Monitoring.scss";
import Items from "../../Data/ItemData";
import { useState, useEffect } from "react";
import FullImage from "../../components/FullImage";
function Monitoring() {
  const [filteredItems, setFilteredItems] = useState(Items);
  const [isImgboxVisible, setIsImgboxVisible] = useState(false);
  const [imgboxVideoSrc, setImgboxVideoSrc] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const handleSearch = (searchTerm: string) => {
    const filtered =
      searchTerm.trim() !== ""
        ? Items.filter((item) =>
            item.vehicleId.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : Items;

    setFilteredItems(filtered);
  };
  const handleViewImageClick = (videoSrc: any) => {
    setIsImgboxVisible(true);
    setImgboxVideoSrc(videoSrc);

    console.log(imgboxVideoSrc);
  };
  const handleHideImageClick = () => {
    setIsImgboxVisible(false);
  };
  return (
    <div>
      <div className="inp">
        <Input onChange={handleSearch} placeholder={"Serach Vehicle"} />
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {filteredItems.map((item) => (
            <div className="col-sm-3">
              <div className="monitor-item">
                <MonitorItem
                  key={item.id}
                  item={item}
                  onViewImageClick={handleViewImageClick}
                />
              </div>
            </div>
          ))}

          <FullImage
            imgboxVideoSrc={imgboxVideoSrc}
            handleHideImageClick={handleHideImageClick}
            isImgboxVisible={isImgboxVisible}
            currentDateTime={currentDateTime}
          />
        </div>
      </div>
    </div>
  );
}

export default Monitoring;
