import { useEffect, useRef, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import Section from '../utils/Section';
import { IoChevronDownOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectData = [
        {
            title: 'Plastering, Floor & Wall Tiling',
            year: 2024,
            description: 'Luxury high-rise apartments with panoramic views, modern amenities, and a prime downtown location.',
            imgSrc: '/projects/5.jpg',
            imgAspect: 'aspect-[6/5]'
        },
        {
            title: 'Modern Bathrooms',
            year: 2024,
            description: 'Architecture, Design & Building',
            imgSrc: '/projects/4.jpg',
            imgAspect: 'aspect-[6/5]'
        },
        {},
        {},
        {
            title: 'Painting, Decorating & Swimming Pools',
            year: 2024,
            description: 'Stylish beach house featuring open spaces and breathtaking ocean views.',
            imgSrc: '/projects/2.jpg',
            imgAspect: 'aspect-[6/5]'
        },
        {
            title: 'Modern Kitchens',
            year: 2024,
            description: 'Chic urban loft in the heart of the city with contemporary design.',
            imgSrc: '/projects/3.jpg',
            imgAspect: 'aspect-[6/5]'
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
        <Section label='Our Projects' className='bg-neutral-800 space-y-16 border-b' ref={sectionRef}>
            <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}  // Added delay
                className="flex md:flex-row flex-col gap-4"
            >
                <div className="md:w-1/2 md:pb-2">
                    <h2 className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4">Our <br /> Projects</h2>
                    <div className="flex items-center">
                        <span className="w-full border-b"></span>
                        <button className="p-2 rounded-full border hover:bg-gray-200 transition">
                            <MdArrowForward />
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-auto font-normal space-y-4">
                    <motion.p
                        className='text-gray-400'
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}  // Added delay
                    >
                        Discover our diverse portfolio at Eagle Eyes Built, showcasing exceptional craftsmanship in residential renovations, commercial constructions, roofing, waterproofing, and tiling. Each project reflects our commitment to quality and client satisfaction, transforming visions into reality with precision and care.
                    </motion.p>
                    {/* <motion.a
                        href="/"
                        className="w-fit flex items-center gap-2 py-2 px-5 rounded-full border hover:bg-black hover:text-white transition"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}  // Added delay
                    >
                        Learn More
                        <IoChevronDownOutline />
                    </motion.a> */}
                </div>
            </motion.div>

            <div className='grid md:grid-cols-2 gap-4'>
                <motion.div
                    className='space-y-4'
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}  // Added delay
                >
                    <img
                        src='/projects/1.jpg'
                        className='aspect-[2/1] object-cover'
                        alt="Skyline Residence"
                    />
                    <p className="text-sm font-medium">2024</p>
                    <p className='font-medium'>Architecture, Design & Building</p>
                    <p className='text-gray-400'>
                        Luxury high-rise apartments with panoramic views, modern amenities, and a prime downtown location.
                    </p>
                </motion.div>
                <ul className='grid grid-cols-3 gap-4'>
                    {projectData.map((project, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 + index * 0.1 }}  // Staggered animation with delay
                        >
                            <img
                                src={project.imgSrc}
                                alt={project.title}
                                className={`object-cover aspect-[6/5]`}
                            />
                            <p className="text-sm font-medium pt-2">{project.year}</p>
                            <p className="text-lg font-light text-gray-400">{project.title}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

export default Projects;
