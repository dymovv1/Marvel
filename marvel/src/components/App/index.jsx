import Header from "../Header/header.jsx";
import Container from "../General/container.scss"
import GeneralSetting from "../General/generalSettings.scss"
import Fonts from "../General/fonts.scss"
import Intro from "../Intro/index.jsx"
import Slider from "../EventsSection";
import EventsSection from "../EventsSection";
import AppRoutes from "../../Routes/index.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Intro />
            <EventsSection />
            {/*<AppRoutes>*/}
            {/*    <Outlet />*/}
            {/*</AppRoutes>*/}
        </>
    )
}

export default App;
