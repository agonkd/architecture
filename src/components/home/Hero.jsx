import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Navbar from "../utils/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
    "url(photorealistic-house-with-wooden-architecture-timber-structure.webp)",
    "url(minimalist-kitchen-interior-design.webp)", // Replace with actual image URLs
    "url(small-bathroom-with-modern-style-ai-generated.webp)"
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
            className="h-screen flex flex-col justify-between text-white relative overflow-hidden bg-black/50"
        >
            <Navbar />

            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
                        style={{ backgroundImage: backgrounds[currentIndex] }}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>

            <section
                aria-label="Hero"
                className="h-full flex flex-col justify-center md:px-16 md:pt-24 sm:px-8 sm:pt-16 px-4 p-8 lg:gap-8 gap-24 lg:text-left text-center relative z-10"
            >
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="lg:text-[calc(24px+4vw)] text-[calc(24px+7vw)] lg:leading-[calc(24px+4vw)] leading-[calc(24px+7vw)] font-semibold">
                        Experience <br />
                        Elevated <br />
                        Living
                    </h1>
                    <motion.p
                        className="max-w-lg"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Discover bespoke craftsmanship and personalized design that transforms your vision into reality.
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
                        Explore Our Work
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
                            Experience the perfect harmony of functionality, elegance, and craftsmanship in every project we undertake.
                        </motion.p>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Hero;
