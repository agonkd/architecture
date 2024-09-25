import { useEffect, useRef, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Section from '../utils/Section';

const About = () => {
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

    return (
        <Section label="About Us" className="space-y-8 border-b" ref={sectionRef}>
            <div className="flex md:flex-row flex-col md:items-end md:gap-16 gap-8">
                <div className="md:order-1 order-2 md:w-1/3 w-2/3 flex items-center">
                    <span className="w-full h-0.5 bg-gray-100"></span>
                    <motion.button
                        className="p-2 rounded-full border hover:bg-gray-200 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        <MdArrowForward />
                    </motion.button>
                </div>
                <div className="md:order-2 order-1 md:w-2/3">
                    <motion.h2
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                        className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4"
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                        className="text-xl font-light text-gray-600"
                    >
                        At Eagle Eyes Built Real Estate, we provide tailored property solutions, expert guidance, and exceptional service to ensure seamless transactions and satisfaction in every real estate deal.
                    </motion.p>
                </div>
            </div>
            <motion.img
                src="photorealistic-house-with-wooden-architecture-timber-structure.jpg"
                alt="Photorealistic house with wooden architecture"
                className="aspect-[3/1] object-cover"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
            />
            <motion.p
                initial={{ opacity: 0, translateY: 20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
                className="max-w-xl text-gray-600"
            >
                Find comprehensive answers to all your travel questions right here. Whether you're looking for insights on property buying or selling, we've got you covered.
            </motion.p>
        </Section>
    );
};

export default About;
