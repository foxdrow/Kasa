import Logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <NavLink
          className="nav_link"
          to="/"
          exact
        //   activeClassName="nav_link--active"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          exact
          className="nav_link"
          // if the path is exactly /about, the class nav_link--active will be added
        //   activeClassName="nav_link--active"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
