import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <nav className="py-6 px-10 sticky top-0 z-50 bg-white shadow-md">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link to="/" className=" text-2xl font-bold hover:text-gray-600 transition-colors">
                        Nicole Condon
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="flex space-x-6">
                        <a href="/#projects" className="text-xl text-gray-900 hover:text-gray-600 transition-colors">Work</a>
                        <Link to="/about" className="text-xl text-gray-900 hover:text-gray-600 transition-colors">About</Link>
                        <a href="/CV.pdf" download className="text-xl text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-1">
                            CV <ArrowDownTrayIcon className="h-3 w-3" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 