import "../styles/global.scss";

function Loader() {
  return (
    <div className="loading">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
