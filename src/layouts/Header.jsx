import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
};
export default Header;
