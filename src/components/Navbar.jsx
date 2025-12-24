import { Link } from 'react-router-dom';
// import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <nav className="fixed left-0 top-0 h-full w-44 py-6 px-4 z-50 shadow-md flex flex-col justify-center gap-10" style={{ backgroundColor: '#F5EFEF' }}>
            {/* Desktop Navigation */}
            {/* <NavbarItem icon="icon-work.svg" text="Work" href="/#projects" /> */}
            <NavbarItem icon="icon-work.svg" text="Work" href="/" />
            <NavbarItem icon="icon-work.svg" text="About" href="/about" />
            <NavbarItem icon="icon-work.svg" text="Contact" href="/contact" />
        </nav>
    );
};

export default Navbar;

const NavbarItem = ({ icon, text, href }) => {
    return (
        <div className="flex items-center gap-2">
            <img src={icon} alt={text} className="h-6 w-6" />
            <a href={href} className="text-2xl text-gray-900 hover:text-gray-600 transition-colors">{text}</a>
        </div>
    );
};