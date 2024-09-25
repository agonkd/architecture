import { useState, useEffect, useRef } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Section from '../utils/Section';

const testimonials = [
    {
        name: "Adriana O'Sullivan",
        email: "adriana@email.com",
        feedback: "Eagle Eyes Built Real Estate transformed our home buying experience with professionalism and care, making the process smooth and enjoyable. Highly recommended for anyone seeking quality service."
    },
    {
        name: "John Doe",
        email: "john.doe@email.com",
        feedback: "A fantastic experience! The agents were knowledgeable and attentive, ensuring I found the perfect home."
    },
    {
        name: "Jane Smith",
        email: "jane.smith@email.com",
        feedback: "From start to finish, the service was outstanding. I felt supported every step of the way."
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Automatically change testimonial every 5 seconds
    useEffect(() => {
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, []);

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
        <Section label="Testimonial" className="space-y-16 border-b" ref={sectionRef}>
            <motion.h2
                initial={{ opacity: 0, translateY: -20 }}
                animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4"
            >
                Testimonial
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            exit={{ opacity: 0, translateY: -20 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                            className="text-lg font-medium"
                        >
                            {testimonials[currentIndex].name}
                        </motion.p>
                        <motion.span
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                            className="text-gray-600 font-light"
                        >
                            {testimonials[currentIndex].email}
                        </motion.span>
                    </div>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <motion.p
                        key={currentIndex}
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={isVisible ? { opacity: 1, translateY: 0 } : {}}
                        exit={{ opacity: 0, translateY: -20 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                        className="text-xl font-light text-gray-600"
                    >
                        "{testimonials[currentIndex].feedback}"
                    </motion.p>
                    <div className="flex items-center justify-between">
                        <motion.button
                            className="p-2 rounded-full border hover:bg-gray-200 transition transform hover:scale-110"
                            onClick={handlePrev}
                            whileHover={{ scale: 1.1 }}
                        >
                            <MdArrowBack />
                        </motion.button>
                        <div className="relative w-full h-1 bg-black/10 flex items-center">
                            <motion.div
                                className="absolute h-full bg-black rounded-full"
                                initial={{ width: 0 }}
                                animate={isVisible ? { width: `${(currentIndex + 1) / testimonials.length * 100}%` } : {}}
                                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                            />
                        </div>
                        <motion.button
                            className="p-2 rounded-full border hover:bg-gray-200 transition transform hover:scale-110"
                            onClick={handleNext}
                            whileHover={{ scale: 1.1 }}
                        >
                            <MdArrowForward />
                        </motion.button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Testimonial;
