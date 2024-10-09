import Hero from "./components/home/Hero"
import AboutUs from "./components/home/About"
import Projects from "./components/home/Projects"
import Vision from "./components/home/Vision"
import Testimonial from "./components/home/Testimonial"
import Footer from "./components/utils/Footer"

const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Vision />
            <Projects />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home
