import Logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <NavLink
          to="/"
          exact="true"
          className={({ isActive }) => "nav_link" + (isActive ? " active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink to="/about" exact="true" className="nav_link">
          A propos
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
