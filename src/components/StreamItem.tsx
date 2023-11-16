function StreamItem({ Item, onItemClick }: any) {
  const handleItemClick = () => {
    onItemClick(Item);
  };
  return (
    <div className="flex3" onClick={handleItemClick}>
      <div className="steam-icon">
        <img src={Item.icon} alt="" />
      </div>
      <div className="stream-detail">
        <h6>
          Vehicle ID : <span> {Item.vehicleId}</span>
          <p>John Doe (Driver)</p>
        </h6>
        <div className="flex4">
          <div className="flex5">
            {Item.status === "online" ? (
              <>
                <div className="green"></div>
                <div className="red" style={{ display: "none" }}></div>
              </>
            ) : (
              <>
                <div className="green" style={{ display: "none" }}></div>
                <div className="red"></div>
              </>
            )}
            {Item.status}
          </div>
          <button>View On Map</button>
        </div>
      </div>
    </div>
  );
}

export default StreamItem;
