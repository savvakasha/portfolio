import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import iconWork from '../assets/icons/icon-work.png';
import iconAbout from '../assets/icons/icon-about.png';
import iconContact from '../assets/icons/icon-contact.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed left-0 top-0 h-full md:w-44 py-6 px-4 z-50 shadow-md flex flex-col md:justify-center" style={{ backgroundColor: '#F5EFEF', borderRight: '1px solid #3FA0A5', borderColor: 'rgba(63, 160, 165, 0.4)' }}>
            <div
                className="md:hidden">
                {isOpen ? <FaTimes className="h-6 w-6" onClick={() => setIsOpen(!isOpen)} /> : <FaBars className="h-6 w-6" onClick={() => setIsOpen(!isOpen)} />}
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} className="flex flex-col gap-4 mt-4">
                        <NavbarItem icon={iconWork} text="Work" href="/" isMobile={true} />
                        <NavbarItem icon={iconAbout} text="About" href="/about" isMobile={true} />
                        <NavbarItem icon={iconContact} text="Contact" href="/contact" isMobile={true} />
                    </motion.div>
                )}
            </div>
            {/* Desktop Navigation */}
            <div className="flex-col md:gap-10 hidden md:flex">
                <NavbarItem icon={iconWork} text="Work" href="/" />
                <NavbarItem icon={iconAbout} text="About" href="/about" />
                <NavbarItem icon={iconContact} text="Contact" href="/contact" />
            </div>
        </nav>
    );
};

export default Navbar;

const NavbarItem = ({ icon, text, href, isMobile = false }) => {
    return (
        <div className="flex items-center gap-2">
            {isMobile ? <img src={icon} alt={text} className="h-4 w-4" /> : <img src={icon} alt={text} className="h-6 w-6" />}
            {isMobile ? <a href={href} className="text-lg text-gray-900 hover:text-gray-600 transition-colors">{text}</a> : <a href={href} className="text-2xl text-gray-900 hover:text-gray-600 transition-colors">{text}</a>}
        </div>
    );
};