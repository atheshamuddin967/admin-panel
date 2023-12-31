import Input from "./Input";
import { IoCloseSharp } from "react-icons/io5";
import "../Screens/Operations/Operation.scss";
// import { useEffect, useState } from "react";
import { useUser } from "../context/Socketprovider";
import { useApi } from "../context/Api";
// import { socket } from "../context/SoccketIo";
import ListsVideo from "./ListsVideo";
function Operationslist({
  handleAddToArray,
  closemodal,
  videoArray,
  handleDeleteFromArray,
}: any) {
  const { data } = useApi();
  const datas: any = data;
  const { myuser } = useUser();

  // useEffect(() => {
  //   socket.on("streaming-updated", (socketUser) => {
  //     console.log("Received message:", socketUser);

  //     const userIndex = datas.users.findIndex(
  //       (user: any) => user._id === socketUser._id
  //     );

  //     if (userIndex !== -1) {
  //       const updatedMyUserArray: any = [...datas.users];
  //       updatedMyUserArray[userIndex] = socketUser;

  //       setMyUser(updatedMyUserArray);
  //     }
  //   });

  //   return () => {
  //     socket.off("streaming-updated");
  //   };
  // }, [data, setMyUser]);

  const data2: any = datas?.parols;
  const sortedData = myuser
    ? [...myuser].sort((a, b) =>
        a?.assignedDevice?.isStreaming === b?.assignedDevice?.isStreaming
          ? 0
          : a?.assignedDevice?.isStreaming
          ? -1
          : 1
      )
    : [];
  const sortedData2 = [...data2].sort((a, b) =>
    a?.assignedDevice?.isStreaming === b?.assignedDevice?.isStreaming
      ? 0
      : a?.assignedDevice?.isStreaming
      ? -1
      : 1
  );
  const dataToRender = sortedData.length > 0 ? sortedData : sortedData2;
  // console.log(dataToRender);
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
              {dataToRender?.map((item: any) => (
                <ListsVideo
                  item={item}
                  handleAddToArray={handleAddToArray}
                  videoArray={videoArray}
                  handleDeleteFromArray={handleDeleteFromArray}
                />
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
