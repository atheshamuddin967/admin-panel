import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import Images from "../images/Images";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Images.logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Admin
                <img src={Images.profile} alt="profile" className="profile" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <img src={Images.logout} alt="logout" className="logout" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
