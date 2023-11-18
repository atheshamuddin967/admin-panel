import "../Media/Media.scss";
import Items from "../../Data/ItemData";
import { useState } from "react";
import MediaHeader from "../../components/MediaHeader";

// }
function Photos() {
  // const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNavigateNext = () => {
    if (selectedIndex !== null && selectedIndex < Items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  const handleNavigateprev = () => {
    if (selectedIndex !== null && selectedIndex < Items.length - 1) {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  const handleCloseButtonClick = () => {
    setSelectedIndex(null);
  };
  return (
    <div className="container">
      <MediaHeader />
      <div className="mediacontainer">
        <div className="heading">
          <h6>Photos</h6>
        </div>
        <div className="row ">
          {Items.map((item: any, index: number) => (
            <div className="col-sm-2">
              <div className="imgList" onClick={() => handleItemClick(index)}>
                <img src={item.image} alt="item" />
              </div>
            </div>
          ))}
        </div>
        {selectedIndex !== null && (
          <div className="medialayout">
            <div className="mediaview">
              <div className="imgscreen">
                {Items[selectedIndex] && (
                  <div>
                    <img
                      src={Items[selectedIndex].image}
                      alt={`selected-item-${selectedIndex}`}
                    />
                    <div className="navigatebtns">
                      <div className="flex">
                        <button onClick={handleNavigateprev}>
                          <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button onClick={handleNavigateNext}>
                          <i className="fa-solid fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                    <div className="closebtn">
                      <button onClick={handleCloseButtonClick}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Photos;
