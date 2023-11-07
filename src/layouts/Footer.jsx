import Logo from "../assets/images/logo_white.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <img src={Logo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
