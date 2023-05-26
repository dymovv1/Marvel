import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Characters from "../pages/Characters.jsx";
import Contacts from "../pages/Contacts.jsx";
import { path } from "./path.js";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path={path.home} element={<Home />} />
                <Route path={path.about} element={<About />} />
                <Route path={path.characters} element={<Characters />} />
                <Route path={path.contact} element={<Contacts />} />
            </Routes>
            <Outlet /> {/* Відображення вмісту з відповідного шляху */}
        </Router>
    );
}

export default AppRoutes;
