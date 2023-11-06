import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./styles/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
