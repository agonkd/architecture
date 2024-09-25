import Hero from "./components/home/Hero"
import Steps from "./components/home/Steps"
import Discover from "./components/home/Discover"
import AboutUs from "./components/home/About"
import Projects from "./components/home/Projects"
import Vision from "./components/home/Vision"
import Testimonial from "./components/home/Testimonial"
import Footer from "./components/utils/Footer"

const Home = () => {
    return (
        <>
            <Hero />
            <Steps />
            <Discover />
            <AboutUs />
            <Projects />
            <Vision />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home
