import "../Screens/Media/Media.scss";

import { useState } from "react";
interface MediaItem {
  image: string;
  // Add other properties if needed
}

interface MediaListProps {
  data: MediaItem[];
}
function MediaList({ data }: MediaListProps) {
  // const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNavigateNext = () => {
    if (selectedIndex !== null && selectedIndex < data.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  const handleNavigateprev = () => {
    if (selectedIndex !== null && selectedIndex < data.length - 1) {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  const handleCloseButtonClick = () => {
    setSelectedIndex(null);
  };
  return (
    <div>
      <div className="row ">
        {data.map((item: any, index: number) => (
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
              {data[selectedIndex] && (
                <div>
                  <img
                    src={data[selectedIndex].image}
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
  );
}

export default MediaList;
