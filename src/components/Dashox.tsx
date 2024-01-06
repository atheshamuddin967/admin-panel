import "../Screens/Dashboard/Dashboard.scss";
function Dashbox({ data, title }: any) {
  return (
    <div className="col-sm-3">
      <div className="boxitem">
        <div className="details">
          <h5>{data ? data : "0"}</h5>
          <h6> {title}</h6>
          {/* <p>
            <span style={{ color: data.perColor }}>
              <i className="fa-solid fa-arrow-up"></i>
              {data.todaypercent}%
            </span>{" "}
            Today
          </p> */}
        </div>
        {/* <div className="box-icon" style={{ backgroundColor: data.bg }}>
          {/* <img src={data.img} alt="user" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Dashbox;
