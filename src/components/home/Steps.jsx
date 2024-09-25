import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const steps = [
    {
        no: 1,
        title: 'Research Market',
        description: 'Explore neighborhoods, property types, and prices to find the right real estate investment opportunities.'
    },
    {
        no: 2,
        title: 'Secure Financing',
        description: 'Determine your budget and secure financing options to proceed with your investment.'
    },
    {
        no: 3,
        title: 'Close Deal',
        description: 'Finalize negotiations and complete the transaction to acquire your investment property.'
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
            { threshold: 0.1 } // Adjust threshold for better detection
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
                    className='space-y-4'
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={inView ? { opacity: 1, translateY: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
                >
                    <span className="text-sm font-normal">No.{step.no}</span>
                    <p className="text-lg font-medium">{step.title}</p>
                    <p>{step.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

// Prop type validation for the component
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
