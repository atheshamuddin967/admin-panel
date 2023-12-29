import "../Media/Media.scss";
import Items from "../../Data/ItemData";
import { useState } from "react";
import MediaHeader from "../../components/MediaHeader";
import { useApi } from "../../context/Api";
// }
function Photos() {
  const { multimediaData } = useApi();
  const multi: any = multimediaData;
  const allData = multi?.data?.photos;
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
      <div className="shead">
        <MediaHeader />
      </div>
      <div className="mediacontainer">
        <div className="heading">
          <h6>Photos</h6>
        </div>
        <div className="row ">
          {allData?.map((item: any, index: number) => (
            <div className="col-sm-2">
              <div className="imgList" onClick={() => handleItemClick(index)}>
                <img src={item.mediaPath} alt="item" />
                <p>Device Code :{item.device?.deviceCode}</p>
                <p>Time:{item.created_at}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedIndex !== null && (
          <div className="medialayout">
            <div className="mediaview">
              <div className="imgscreen">
                {allData[selectedIndex] && (
                  <div>
                    <img
                      src={allData[selectedIndex].mediaPath}
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
