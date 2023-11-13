import "../Screens/Dashboard/Dashboard.scss";
function Dashbox({ data }: any) {
  return (
    <div className="col-sm-3">
      <div className="boxitem">
        <div className="details">
          <h5>{data.clints}</h5>
          <h6>{data.heading}</h6>
          <p>
            <span style={{ color: data.perColor }}>{data.todaypercent}%</span>{" "}
            Today
          </p>
        </div>
        <div className="box-icon" style={{ backgroundColor: data.bg }}>
          <img src={data.img} alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Dashbox;
