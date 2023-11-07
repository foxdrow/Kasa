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
          exact="true"
          //   activeClassName="nav_link--active"
        >
          Accueil
        </NavLink>
        <NavLink to="/about" exact="true" className="nav_link">
          About
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
