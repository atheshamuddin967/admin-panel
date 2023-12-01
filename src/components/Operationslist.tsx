import Input from "./Input";
import Items from "../Data/ItemData";
import ReactPlayer from "react-player";
import { IoCloseSharp } from "react-icons/io5";
import "../Screens/Operations/Operation.scss";
function Operationslist({ handleAddToArray, closemodal }: any) {
  return (
    <div className="listfirstbg">
      <div className="listsecondlayout">
        <div className="lays">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="searchvid">
                  <Input placeholder={"Search Device"} />
                </div>
              </div>
            </div>
            <div className="row">
              {Items.map((item: any) => (
                <div
                  className="col-sm-2"
                  onClick={() => handleAddToArray(item)}
                >
                  <div className="vidlayout">
                    <h6>{item.id}</h6>
                    <ReactPlayer
                      url={item.video}
                      style={{ maxHeight: "100px " }}
                      width={"100%"}
                      controls={false}
                      playing={false}
                      loop={true}
                      muted={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="closebtn">
            <button onClick={closemodal}>
              <IoCloseSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operationslist;
