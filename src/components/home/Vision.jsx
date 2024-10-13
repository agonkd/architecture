import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../utils/Section';
import { MdArrowForward } from 'react-icons/md';

const Vision = () => {
    const visionItems = [
        {
            id: 'bathrooms',
            title: 'Bathrooms',
            description: `
                - Renovation
                - Remodel
                - Shower leaks
                - Mould removal
                - Waterproofing`,
            image: '/vision/1.jpg',
            message: "Hi, I would like to know more about your bathroom services."
        },
        {
            id: 'roofing',
            title: 'Roofing',
            description: `
                - Leak detection
                - Roof maintenance
                - Re-roofing
                - Roof painting
                - Liquid membrane application`,
            image: '/vision/2.jpg',
            message: "Hi, I would like to know more about your roofing services."
        },
        {
            id: 'waterproofing-maintenance',
            title: 'Waterproofing Maintenance',
            description: `
                - Waterproofing leaky balconies
                - Leaky basement repairs
                - Tanking
                - Façade waterproofing
                - Flat roof waterproofing`,
            image: '/vision/3.jpg',
            message: 'Hi, I would like to know more about your waterproofing maintenance services.',
        },
        {
            id: 'tiling',
            title: 'Tiling',
            description: `
                - Commercial tiling
                - Residential tiling
                - Tile repairs`,
            image: '/vision/4.webp',
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
                    <p className="text-base md:text-xl lg:text-2xl font-light text-gray-400 leading-relaxed">
                        At Eagle Eyes Built, we excel in identifying and resolving leaks throughout your home, ensuring lasting protection against water damage. Our experienced team specializes in comprehensive leak detection, repairs, and renovations, focusing on roofs and bathrooms to deliver tailored solutions that keep your home safe, dry, and beautifully maintained.
                    </p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <ul className="grid 2xl:grid-cols-2 2xl:grid-rows-2 grid-rows-4 md:gap-x-8 md:gap-y-0 gap-y-8">
                    {visionItems.map((item, index) => (
                        <motion.li
                            key={item.id}
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            exit={{ opacity: 0, translateY: 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className={`flex md:flex-row flex-col group border-y relative ${index < 2 ? 'md:border-b-0' : ''}`}
                        >
                            <div className={`border-1 py-6 ${index >= 2 ? 'md:order-2' : 'md:order-1'} order-1`}>
                                <div className='relative md:h-full aspect-square bg-center bg-cover'>
                                    <img src={item.image} className='absolute w-full h-full object-cover' />
                                </div>
                            </div>
                            <div className={`z-10 w-full bg-black/75 lg:p-12 p-6 md:relative absolute bottom-0 flex flex-col justify-between space-y-4 ${index >= 2 ? 'md:order-1' : 'md:order-2'} order-2`}>
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <b>.</b>
                                        <p className="lg:text-2xl text-xl">{item.title}</p>
                                    </div>
                                    <p className="text-gray-400 text-base lg:text-lg whitespace-pre-line leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <a
                                    href={`https://wa.me/6421909231?text=${encodeURIComponent(item.message)}`}
                                    target='_blank'
                                    className="flex items-center gap-4"
                                    aria-label={`Learn more about ${item.title}`}
                                >
                                    <span className="p-2">
                                        <MdArrowForward />
                                    </span>
                                    Learn More
                                </a>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </Section>
    );
};

export default Vision;
