import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Navbar from "../utils/Navbar";
import { motion } from "framer-motion";

const backgrounds = [
    "url(photorealistic-house-with-wooden-architecture-timber-structure.jpg)",
    "url(another-image-url.jpg)", // Replace with actual image URLs
    "url(yet-another-image-url.jpg)"
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBackground = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    const prevBackground = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
    };

    return (
        <header
            aria-label="Hero section"
            className="h-screen flex flex-col justify-between text-white bg-black/50 bg-cover bg-top bg-blend-overlay"
            style={{ backgroundImage: backgrounds[currentIndex] }}
        >
            <Navbar />
            <section
                aria-label="Hero"
                className="h-full flex flex-col justify-center md:px-16 md:pt-24 sm:px-8 sm:pt-16 px-4 p-8 lg:gap-8 gap-24 lg:text-left text-center"
            >
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="lg:text-[calc(24px+4vw)] text-[calc(24px+7vw)] lg:leading-[calc(24px+4vw)] leading-[calc(24px+7vw)] font-semibold">
                        Experience <br />
                        <span className="text-[calc(24px+2vw)] leading-[calc(24px+2vw)] font-black">/ </span>
                        Elevated <br />
                        Living
                    </h1>
                    <motion.p
                        className="max-w-lg"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Luxurious spaces, refined design, personalized services, and modern amenities for a sophisticated, upscale lifestyle.
                    </motion.p>
                </motion.div>
                <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-8">
                    <motion.a
                        href="/"
                        className="lg:w-fit text-center py-2 px-5 rounded-full bg-white text-black backdrop-filter backdrop-blur-sm hover:bg-white/10 hover:text-white transition"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Learn More
                    </motion.a>
                    <div className="lg:w-[30vw] space-y-2 text-center">
                        <div className="flex items-center gap-8">
                            <motion.button
                                className="p-2 rounded-full bg-white/10 border border-white backdrop-filter backdrop-blur-sm hover:bg-white/20 transition"
                                whileHover={{ scale: 1.1 }}
                                onClick={prevBackground}
                            >
                                <MdArrowBack />
                            </motion.button>
                            <div className="flex-1 h-0.5 bg-white/25">
                                <motion.div
                                    className="h-full bg-white rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentIndex + 1) / backgrounds.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <motion.button
                                className="p-2 rounded-full bg-white/10 border border-white backdrop-filter backdrop-blur-sm hover:bg-white/20 transition"
                                whileHover={{ scale: 1.1 }}
                                onClick={nextBackground}
                            >
                                <MdArrowForward />
                            </motion.button>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            Luxurious spaces, refined design, personalized services, and modern amenities for a sophisticated, upscale lifestyle.
                        </motion.p>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
