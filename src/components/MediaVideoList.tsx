import "../Screens/Media/Media.scss";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
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
              <ReactPlayer
                url={item.video}
                style={{ maxHeight: "100px", borderRadius: "10px !important" }}
                width={"100%"}
                controls={false}
              />
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
                  <ReactPlayer
                    url={data[selectedIndex].video}
                    width={"100%"}
                    controls={false}
                    // ref={videoRef}
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

export default MediaVideoList;
