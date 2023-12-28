import "../Screens/Media/Media.scss";
import ReactPlayer from "react-player";
import { useState } from "react";
import Images from "../images/Images";
interface MediaItem {
  image: string;
  mediaType: string;
  mediaPath: any;
  // Add other properties if needed
}

interface MediaListProps {
  data: MediaItem[];
}
function MediaList({ data }: MediaListProps) {
  // const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  // console.log(data);
  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  // console.log(selectedIndex);
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
        {data?.map((item: any, index: number) => (
          <div className="col-sm-2">
            <div className="imgList" onClick={() => handleItemClick(index)}>
              {item.mediaType === "image" ? (
                <img src={item.mediaPath} alt={`item-${index}`} />
              ) : (
                <ReactPlayer
                  url={Images.vid1}
                  style={{ maxHeight: "100px", borderRadius: "10px" }}
                  width={"100%"}
                  controls={false}
                  playing={false}
                  loop={true}
                />
              )}
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
                  {data[selectedIndex].mediaType === "image" ? (
                    <img
                      src={data[selectedIndex].mediaPath}
                      alt={`selected-item-${selectedIndex}`}
                    />
                  ) : (
                    <ReactPlayer
                      url={data[selectedIndex].mediaPath}
                      width={"100%"}
                      controls={false}
                      playing={true}
                    />
                  )}
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
