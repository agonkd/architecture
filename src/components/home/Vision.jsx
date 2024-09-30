import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../utils/Section';
import { MdArrowForward } from 'react-icons/md';

const Vision = () => {
    const visionItems = [
        {
            id: 'architecture-design',
            title: 'Architecture & Design',
            description: 'We specialize in creating innovative and sustainable living spaces. Our architectural solutions are tailored to your unique vision, ensuring functionality and beauty in every design.'
        },
        {
            id: 'residential-building',
            title: 'Residential Building',
            description: 'Our focus is on building high-quality homes that reflect your lifestyle. We expertly handle all aspects of residential construction, including stunning kitchens and bathrooms, alongside reliable handyman services and swimming pool installations.'
        },
        {
            id: 'construction-services',
            title: 'Construction Services',
            description: 'We provide essential construction services to ensure your home’s integrity and longevity. From strong concrete foundations and effective waterproofing to durable roofing and stylish flooring, we cover all your needs with expertise.'
        },
        {
            id: 'interior-finishing',
            title: 'Interior Finishing',
            description: 'Transform your interiors with our finishing services. We offer seamless plastering and professional painting, enhancing the beauty and comfort of your home while reflecting your personal style.'
        }
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
                    <button className="p-2 rounded-full border hover:bg-gray-200 transition transform hover:scale-110" aria-label="Learn more">
                        <MdArrowForward />
                    </button>
                </div>
                <div className="md:w-2/3 md:order-2 order-1">
                    <h2 className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4">
                        Our <br /> Services
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
                        src="photorealistic-house-with-wooden-architecture-timber-structure.webp"
                        alt="Visionary architecture"
                        className="h-full object-cover transition-transform duration-300 transform hover:scale-105"
                        loading="lazy" // Lazy loading the image
                    />
                </div>
                <ul className="xl:col-span-2 grid md:grid-cols-2 md:gap-x-8 md:gap-y-0 gap-y-8">
                    {visionItems.map((item) => (
                        <motion.li
                            key={item.id} // Use the unique ID as the key
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            exit={{ opacity: 0, translateY: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`py-8 space-y-4 border-y relative group transition-all duration-500 hover:text-white hover:px-8`}
                        >
                            <p className="text-xl">{item.title}</p>
                            <p className={`text-gray-600 group-hover:text-white`}>{item.description}</p>
                            <button className="flex items-center gap-4" aria-label={`Learn more about ${item.title}`}>
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
