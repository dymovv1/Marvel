import Intro from "../components/Intro";
import EventsSection from "../components/EventsSection";
import Comics from "../components/Comics";
import ComicsSlider from "../components/ComicsSlider";
import Games from "../components/Games"
import Footer from "../components/Footer/index.jsx";


function Home() {
    return(
        <>
            <ComicsSlider/>
            {/*<Intro />*/}
        <EventsSection />
            <Games/>
            <Comics/>

        </>
    )

}

export default Home;