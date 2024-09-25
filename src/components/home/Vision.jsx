import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../utils/Section';
import { MdArrowForward } from 'react-icons/md';

const Vision = () => {
    const visionItems = [
        {
            id: 'innovative-living', // Unique ID
            title: 'Innovative Living Spaces',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna at risus ultrices pharetra.',
        },
        {
            id: 'sustainable-design', // Unique ID
            title: 'Sustainable Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna at risus ultrices pharetra.',
        },
        {
            id: 'community-engagement', // Unique ID
            title: 'Community Engagement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna at risus ultrices pharetra.',
        },
        {
            id: 'exceptional-service', // Unique ID
            title: 'Exceptional Service',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel urna at risus ultrices pharetra.',
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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
        <Section label="Our Vision" className="space-y-16 border-b" ref={sectionRef}>
            <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex md:flex-row flex-col md:items-end gap-16"
            >
                <div className="md:order-1 order-2 md:w-1/3 w-2/3 flex items-center">
                    <span className="w-full h-0.5 bg-gray-100"></span>
                    <button className="p-2 rounded-full border hover:bg-gray-200 transition transform hover:scale-110">
                        <MdArrowForward />
                    </button>
                </div>
                <div className="md:w-2/3 md:order-2 order-1">
                    <h2 className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4">
                        Our <br /> Vision
                    </h2>
                    <p className="text-xl font-light text-gray-600">
                        At Eagle Eyes Built Real Estate, we provide tailored property solutions, expert guidance, and exceptional service to ensure seamless transactions and satisfaction in every real estate deal.
                    </p>
                </div>
            </motion.div>
            <motion.div
                className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div>
                    <img
                        src="photorealistic-house-with-wooden-architecture-timber-structure.jpg"
                        alt="Visionary architecture"
                        className="h-full object-cover transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
                <ul className="xl:col-span-2 grid md:grid-cols-2 md:gap-x-8 md:gap-y-0 gap-y-8">
                    {visionItems.map((item, index) => (
                        <motion.li
                            key={index} // Use the unique ID as the key
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            exit={{ opacity: 0, translateY: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`py-8 space-y-4 border-y relative group transition-all duration-500 hover:text-white hover:pl-8`}
                        >
                            <p className="text-xl">{item.title}</p>
                            <p className={`text-gray-600 group-hover:text-white`}>{item.description}</p>
                            <button className="flex items-center gap-4">
                                <span className={`p-2 bg-black text-white group-hover:bg-white group-hover:text-black transition-all duration-500`}>
                                    <MdArrowForward />
                                </span>
                                Learn More
                            </button>
                            <div className="bg-black absolute left-0 bottom-0 h-full w-0 group-hover:w-full transition-all ease-in-out duration-500 -z-10"></div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </Section>
    );
};

export default Vision;
