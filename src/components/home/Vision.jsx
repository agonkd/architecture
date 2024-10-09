import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../utils/Section';
import { MdArrowForward } from 'react-icons/md';

const Vision = () => {
    const visionItems = [
        {
            id: 'bathrooms',
            title: 'Bathrooms',
            description: 'We specialize in bathroom renovations and remodels, fixing shower leaks, removing mould, and providing top-quality waterproofing to enhance both the functionality and aesthetic of your bathroom while ensuring durability and safety.',
            message: "Hi, I would like to know more about your bathroom services."
        },
        {
            id: 'roofing',
            title: 'Roofing',
            description: 'Our roofing services include precise leak detection, comprehensive roof maintenance, re-roofing, professional roof painting, and liquid membrane application for superior protection and longevity of your roof.',
            message: "Hi, I would like to know more about your roofing services."
        },
        {
            id: 'waterproofing-maintenance',
            title: 'Waterproofing Maintenance',
            description: 'Our waterproofing maintenance services cover leaky balcony repairs, basement waterproofing, tanking, façade protection, and flat roof waterproofing, ensuring your property stays dry and secure against water damage.',
            message: 'Hi, I would like to know more about your waterproofing maintenance services.',
        },
        {
            id: 'tiling',
            title: 'Tiling',
            description: 'We offer expert tiling services for both commercial and residential spaces, including professional tile installations and precise tile repairs to enhance the look and durability of your surfaces.',
            message: 'Hi, I would like to know more about your tiling services.'
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
        <Section label="Our Vision" className="bg-neutral-800 space-y-16 border-b" ref={sectionRef}>
            <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex md:flex-row flex-col md:items-end gap-16"
            >
                <div className="md:order-1 order-2 md:w-1/3 w-2/3 flex items-center">
                    <span className="w-full border-b"></span>
                    <button className="p-2 rounded-full border hover:bg-gray-200 transition transform hover:scale-110" aria-label="Learn more">
                        <MdArrowForward />
                    </button>
                </div>
                <div className="md:w-2/3 md:order-2 order-1">
                    <h2 className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4">
                        Our <br /> Services
                    </h2>
                    <p className="text-xl font-light text-gray-400">
                        At Eagle Eyes Built, we excel in identifying and resolving leaks throughout your home, ensuring lasting protection against water damage. Our experienced team specializes in comprehensive leak detection, repairs, and renovations, focusing on roofs and bathrooms to deliver tailored solutions that keep your home safe, dry, and beautifully maintained.
                    </p>
                </div>
            </motion.div>
            <motion.div
                className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div className='w-full'>
                    <img
                        src="photorealistic-house-with-wooden-architecture-timber-structure.webp"
                        alt="Visionary architecture"
                        className="lg:h-full object-cover transition-transform duration-300 transform hover:scale-105"
                        loading="lazy" // Lazy loading the image
                    />
                </div>
                <ul className="xl:col-span-2 grid md:grid-cols-2 md:gap-x-8 md:gap-y-0 gap-y-8">
                    {visionItems.map((item, index) => (
                        <motion.li
                            key={item.id} // Use the unique ID as the key
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            exit={{ opacity: 0, translateY: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`py-8 space-y-4 border-y relative group transition-all duration-500 hover:text-white hover:px-8 ${index < 2 ? 'md:border-b-0' : '' // No border-b for the first two items
                                }`}
                        >
                            <p className="text-xl">{item.title}</p>
                            <b>.</b>
                            <p className={`text-gray-400 group-hover:text-white`}>{item.description}</p>
                            <a href={`https://wa.me/6421909231?text=${encodeURIComponent(item.message)}`} target='_blank' className="flex items-center gap-4" aria-label={`Learn more about ${item.title}`}>
                                <span
                                    className={`p-2 bg-black`}
                                >
                                    <MdArrowForward />
                                </span>
                                Learn More
                            </a>
                            <div className="bg-black/25 absolute left-0 bottom-0 h-full w-0 group-hover:w-full transition-all ease-in-out duration-500 -z-10"></div>
                        </motion.li>
                    ))}
                </ul>

            </motion.div>
        </Section>
    );
};

export default Vision;
