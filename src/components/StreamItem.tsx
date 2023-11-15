import Images from "../images/Images";

function StreamItem() {
  return (
    <div className="flex3">
      <div className="steam-icon">
        <img src={Images.car2} alt="" />
      </div>
      <div className="stream-detail">
        <h6>
          Vehicle ID : <span> ABC-123</span>
          <p>John Doe (Driver)</p>
        </h6>
        <div className="flex4">
          online
          <button>View On Map</button>
        </div>
      </div>
    </div>
  );
}

export default StreamItem;
