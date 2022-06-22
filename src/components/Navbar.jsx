import { Link } from "react-router-dom";
import Vector from "../assets/Vector.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        bulb
        <Link to="/home">
          <img src={Vector} alt="logo" />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home">Bulb pro</Link>
        </li>
        <li className="nav-item">
          <Link to="/home">Principles</Link>
        </li>
        <li className="nav-item">
          <Link to="/home">Resources</Link>
        </li>
        <li className="nav-item">
          <Link to="/home">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/home">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/home">
            <div className="nav-button">Create account</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
