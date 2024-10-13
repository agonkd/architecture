import { useEffect, useRef, useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import Section from '../utils/Section';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discover = () => {
    const properties = [
        { id: 1, title: 'Plastering, Floor & Wall Tiling', imgSrc: 'discover/1.jpg' },
        { id: 2, title: 'Architecture, Design & Building', imgSrc: 'discover/2.jpg' },
        { id: 3, title: 'Painting, Decorating & Swimming Pools', imgSrc: 'discover/3.jpg' },
        { id: 4, title: 'Modern Kitchens', imgSrc: 'discover/4.jpg' },
        { id: 5, title: 'Modern Bathrooms', imgSrc: 'discover/5.jpg' },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    // Slider settings for smaller devices
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Section label="Discover" className="bg-neutral-800 border-b space-y-8" ref={sectionRef}>
            <div className="flex md:flex-row flex-col md:gap-16 gap-8">
                <div className="md:w-3/5 w-2/3 md:pb-20">
                    <motion.h2
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                        className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4"
                    >
                        Discover
                    </motion.h2>
                    <div className="flex items-center">
                        <span className="w-full border-b"></span>
                        <motion.button
                            className="p-2 rounded-full border hover:bg-gray-200 transition"
                            whileHover={{ scale: 1.1 }}
                        >
                            <MdArrowForward />
                        </motion.button>
                    </div>
                </div>
                <div className="md:w-2/5 mt-auto font-normal space-y-4">
                    <motion.p
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                    >
                        Explore a real estate agency dedicated to meeting client needs through expert guidance, tailored solutions, and smooth property transactions.
                    </motion.p>
                    <motion.a
                        href="https://wa.me/021909231"
                        target='blank'
                        className="w-fit flex items-center gap-2 py-2 px-5 rounded-full border hover:bg-black hover:text-white transition"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
                    >
                        Learn More
                        <IoChevronDownOutline />
                    </motion.a>
                </div>
            </div>

            {/* Slider for smaller devices */}
            <div className="block md:hidden">
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
                >
                    <Slider {...sliderSettings}>
                        {properties.map(property => (
                            <div key={property.id} className="flex flex-col items-center">
                                <img
                                    src={property.imgSrc}
                                    alt={`Image of ${property.title}`}
                                    className="w-full h-full object-cover"
                                />
                                <p className="font-normal">{property.title}</p>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>

            {/* Default layout for larger devices */}
            <motion.ul
                className="hidden md:flex items-center gap-8"
                initial={{ opacity: 0, translateY: 20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
            >
                {properties.map(property => (
                    <motion.li
                        key={property.id}
                        className="w-full aspect-[4/5] space-y-2"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.9 + property.id * 0.1, ease: "easeInOut" }} // Staggered delays
                    >
                        <img
                            src={property.imgSrc}
                            alt={`Image of ${property.title}`}
                            className="w-full h-full object-cover"
                        />
                        <p className="font-normal">{property.title}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </Section>
    );
};

export default Discover;
