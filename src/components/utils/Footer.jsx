import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const testimonialsRef = useRef(null);

    // Scroll function
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the footer is visible
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Section label='Footer' className='bg-neutral-800 space-y-24'>
            <motion.footer
                ref={footerRef}
                className="flex xl:flex-row flex-col justify-between gap-24"
                initial={{ opacity: 0, translateY: 20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }} // Added delay here
            >
                <div className="flex lg:flex-row flex-col lg:gap-32 gap-24">
                    <div className="space-y-2">
                        <a href="/" className="text-lg font-light">Auckland</a>
                        <span className="block font-medium">021909231</span>
                    </div>
                    <ul className="space-y-4">
                        <li><a onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>Home</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}>About</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Services</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); scrollToSection(portfolioRef); }}>Portfolio</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>Contact</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <span className="block text-lg">Get in Touch</span>
                    <a href="mailto:eagleeyesbuilt@gmail.com" className="block md:text-[calc(24px+2vw)] text-[calc(14px+2vw)] leading-none font-light">eagleeyesbuilt@gmail.com</a>
                    <a href="https://wa.me/021909231" className="block md:text-[calc(24px+2vw)] text-[calc(14px+2vw)] leading-none font-light">021909231</a>
                </div>
            </motion.footer>
            <motion.div
                className="flex sm:flex-row flex-col justify-between sm:items-end gap-24"
                initial={{ opacity: 0, translateY: 20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }} // Added delay here
            >
                <p className="text-[calc(36px+6vw)] leading-[calc(36px+8vw)] font-medium">Eagle Eyes Built</p>
                {/* <ul className="flex divide-x whitespace-nowrap">
                    <li className="px-3 hover:text-gray-500 transition">Terms & Conditions</li>
                    <li className="px-3 hover:text-gray-500 transition">Privacy Policy</li>
                </ul> */}
            </motion.div>
        </Section>
    );
}

export default Footer;
