import Images from "../images/Images";
import { GoDeviceCameraVideo } from "react-icons/go";

import { MdLocalPhone } from "react-icons/md";

function ChatHeader() {
  return (
    <div className="headerschat">
      <div className="pimage">
        <img src={Images.profile} alt="" />
        <p>Stark</p>
      </div>

      <div className="btnscall">
        <button>
          <GoDeviceCameraVideo />
        </button>
        <button>
          <MdLocalPhone />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
