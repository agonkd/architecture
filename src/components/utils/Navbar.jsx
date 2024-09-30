import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav
            aria-label="Navigation bar"
            className="md:px-16 sm:px-8 sm:py-6 p-4 flex justify-between bg-clip-padding backdrop-filter backdrop-blur-sm"
        >
            <div className="space-y-4">
                <motion.a
                    href="/"
                    className="text-xl font-semibold"
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className='flex items-end gap-4'>
                        <img src='/logo-gold.webp' alt='logo' className='h-8' />
                        <span className='poppins-regular-italic text-yellow-300 uppercase'>Eagle Eyes Built</span>
                    </div>
                </motion.a>
                {/* <motion.ul
                    className="lg:flex hidden gap-8"
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1 }} // Scale on hover
                            transition={{ duration: 0.2 }}
                        >
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </motion.li>
                    ))}
                </motion.ul> */}
            </div>
            <div className="lg:block hidden space-y-2">
                <motion.a
                    href="/"
                    className="text-lg"
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Main Street Plaza, Downtown Business District
                </motion.a>
                <motion.span
                    className="block font-medium"
                    initial={{ opacity: 0, translateY: 10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    +1 (555) 123-4567
                </motion.span>
            </div>
        </nav>
    );
};

export default Navbar;
