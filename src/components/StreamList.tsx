import "../Screens/Stream/Stream.scss";
function StreamList({ Item }: any) {
  return (
    <div className="stream-list">
      <ul>
        <li>
          {" "}
          Vehicle Id
          <p>{Item?.vehicleId}</p>
        </li>
        <li>
          {" "}
          Device Id
          <p>{Item?.id}</p>
        </li>
        <li>
          {" "}
          Status
          <p>{Item?.status}</p>
        </li>
      </ul>
    </div>
  );
}

export default StreamList;
