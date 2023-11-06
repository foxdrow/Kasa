import Header from "./Header";
import Footer from "./Footer";
const MainContainer = ({ children }) => {
  return (
    <>
      <div class="main-container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
export default MainContainer;
