import { useState, useEffect, useRef } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Section from '../utils/Section';

const testimonials = [
    {
        name: "Tony",
        email: "",
        feedback: "Very good. Arrived when they said they would and did the job with the minimum of fuss, leaving it nice and tidy afterwards.Very pleased"
    },
    {
        name: "Daniel",
        email: "",
        feedback: "Alban and his team are friendly, clear in communication and punctual. We are happy with the quality of the work and how they started on time and finished when they said they would."
    },
    {
        name: "Shane S",
        email: "",
        feedback: "Highly Recommended. A+++ Very Professional and Holnfull!"
    }
    ,
    {
        name: "Leonardo",
        email: "",
        feedback: "I recently had the pleasure of engaging with Eagle Eyes Built for a roofing project, and I must say, the experience was nothing short of exceptional. From the outset, their professionalism shone through. They were prompt in their responses and displayed exemplary communication skills which made the entire process seamless. I'm immensely pleased with the outcome and would highly recommend Eagle Eyes Built to anyone in need of roofing services."
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

    const animationProps = {
        initial: { opacity: 0, translateY: 20 },
        animate: isVisible ? { opacity: 1, translateY: 0 } : {},
        exit: { opacity: 0, translateY: -20 },
        transition: { duration: 0.5, ease: "easeInOut" }
    };

    return (
        <Section label="Testimonial" className="bg-neutral-800 space-y-16 border-b" ref={sectionRef}>
            <motion.h2
                {...animationProps}
                transition={{ ...animationProps.transition, delay: 0.2 }}
                className="text-[calc(24px+4vw)] leading-[calc(24px+4vw)] font-regular pb-4"
            >
                Testimonial
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                    <div>
                        <motion.p
                            {...animationProps}
                            transition={{ ...animationProps.transition, delay: 0.3 }}
                            className="text-lg font-medium"
                        >
                            {testimonials[currentIndex].name}
                        </motion.p>
                        <motion.span
                            {...animationProps}
                            transition={{ ...animationProps.transition, delay: 0.4 }}
                            className="text-gray-400 font-light"
                        >
                            {testimonials[currentIndex].email}
                        </motion.span>
                    </div>
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <motion.p
                        key={currentIndex}
                        {...animationProps}
                        transition={{ ...animationProps.transition, delay: 0.5 }}
                        className="text-xl font-light text-gray-400"
                    >
                        "{testimonials[currentIndex].feedback}"
                    </motion.p>
                    <div className="flex items-center justify-between">
                        <motion.button
                            aria-label="Previous testimonial"
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
                            aria-label="Next testimonial"
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
