import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Section component for wrapping content with customizable padding and accessibility features.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered inside the section
 * @param {string} props.label - Accessible label for the section
 * @param {string} [props.className] - Additional custom CSS classes for styling
 * @param {React.Ref} ref - Reference for the section element
 * @returns {JSX.Element} Rendered Section component
 */
const Section = forwardRef(({ children, label, className = '' }, ref) => {
    // Construct class names for the section element
    const sectionClasses = classNames(
        className,
        'md:px-16 sm:px-8 px-4 py-24'
    );

    return (
        <section ref={ref} aria-label={label} className={sectionClasses}>
            {children}
        </section>
    );
});

// Prop type validation for the component
Section.propTypes = {
    children: PropTypes.node.isRequired, // Content to render
    label: PropTypes.string.isRequired,    // Accessibility label
    className: PropTypes.string,            // Additional CSS classes
};

export default Section;
