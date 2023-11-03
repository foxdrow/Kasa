import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import Error404 from "./pages/Error404";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}
export default Router;
