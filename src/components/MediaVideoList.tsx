import "../Screens/Media/Media.scss";
import { useState, useEffect, useRef } from "react";
interface MediaItem {
  image: string;
  video: string;
}

interface MediaListProps {
  data: MediaItem[];
}
function MediaVideoList({ data }: MediaListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    console.log(selectedIndex);
  };
  useEffect(() => {
    if (selectedIndex !== null && videoRef.current) {
      videoRef.current.src = data[selectedIndex].video;
      videoRef.current.load();
    }
    [selectedIndex, data];
  });
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
              <video>
                <source src={item.video} type="video/mp4" />
              </video>
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
                  <video ref={videoRef} controls>
                    <source src={data[selectedIndex].video} type="video/mp4" />
                  </video>

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

export default MediaVideoList;
