import logoHeader from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img src={logoHeader} alt="Logo Kasa Header" className="nav_img" />
      </NavLink>
      {/* menu de navigation*/}
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav_link active" : "nav_link"
          }
          to="/about"
        >
          À Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
