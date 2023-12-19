import "../Screens/Operations/Operation.scss";
import { IoClose } from "react-icons/io5";

function AudioStream({ CloseAudio, selectedItem }: any) {
  const speakingUser = selectedItem.users.find(
    (user: any) => user._id === selectedItem.currentlySpeaking
  );
  return (
    <div>
      <div className="imgbox">
        <div className="secondbox2">
          <div className="boxes">
            Group Name: {selectedItem?.groupName}
            <br />
            User: {speakingUser?.name}
          </div>

          <iframe
            src={`https://bappmedia.creativeaid.it:5443/WebRTCAppEE/play.html?id=${selectedItem._id}`}
            style={{ width: "100%" }}
          ></iframe>
          <div className="closebtnsaudio">
            {" "}
            <button onClick={CloseAudio}>
              <IoClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioStream;
