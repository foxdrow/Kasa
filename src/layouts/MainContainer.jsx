import Header from "./Header";
import Footer from "./Footer";
const MainContainer = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
export default MainContainer;
