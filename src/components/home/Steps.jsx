import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const steps = [
    {
        no: 1,
        title: 'Market Analysis',
        description: 'Conduct comprehensive evaluations of neighborhoods, property trends, and current listings to identify lucrative investment opportunities.'
    },
    {
        no: 2,
        title: 'Arrange Financing',
        description: 'Assess your financial situation and investigate various funding options to effectively facilitate your real estate purchase.'
    },
    {
        no: 3,
        title: 'Complete Acquisition',
        description: 'Conclude negotiations and finalize the purchase agreement to secure your valuable property investment.'
    },
];

const Steps = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return (
        <div ref={ref} className="md:px-16 sm:px-8 px-4 py-24 border-b grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-16">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    className="space-y-4"
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={inView ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <span className="text-sm font-normal">Step {step.no}</span>
                    <p className="text-lg font-medium">{step.title}</p>
                    <p>{step.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

Steps.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            no: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
};

export default Steps;
