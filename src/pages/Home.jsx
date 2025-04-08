import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profile from '../assets/avatar1.jpg';
import { useState, useEffect } from 'react';
import { projects } from '../assets/project-data';

const Home = () => {
    const [filter, setFilter] = useState('all');

    // Scroll to section on load if hash exists in URL
    useEffect(() => {
        // Get the hash from the URL (e.g., #projects)
        const hash = window.location.hash;

        if (hash) {
            // Remove the # from the hash
            const elementId = hash.substring(1);

            // Find the element with the matching ID
            const element = document.getElementById(elementId);

            if (element) {
                // Scroll to the element with a slight delay to ensure the page has rendered
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container flex my-16 bg-gray-100 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <h1 className="text-4xl mb-8 font-bold">
                        Hi, I'm Nicole
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        I am a user researcher and UX designer.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                        As a user researcher and UX designer, I draw on my background in psychology
                        and customer service to deeply understand people, ensuring systems are
                        designed to be intuitive, helpful, and efficient.
                    </p>
                    <div className="flex space-x-6 mb-8">
                        <a
                            href="mailto:nicolec0225a@gmail.com"
                            className="text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            nicolec0225a@gmail.com
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <a
                        href="/#projects"
                        className="btn mb-8"
                    >
                        View My Work
                    </a>
                    <p><b>My toolbox:</b> Figma, Qualtrics, Unity, Optimal Workshop, MAXQDA</p>
                </motion.div>
                <div className="flex justify-center items-center ">
                    <img src={profile} alt="Profile" className="rounded-md shadow-lg w-3/4" />
                </div>
            </section>
            <section id="projects" className="container bg-gray-100 my-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="py-16"
                >
                    <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

                    <div className="mb-8">
                        <div className="flex justify-center space-x-4">
                            <button
                                className={`px-4 py-2 rounded transition-colors ${filter === 'all'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                onClick={() => setFilter('all')}
                            >
                                All Projects
                            </button>
                            <button
                                className={`px-4 py-2 rounded transition-colors ${filter === 'research'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                onClick={() => setFilter('research')}
                            >
                                Research
                            </button>
                            <button
                                className={`px-4 py-2 rounded transition-colors ${filter === 'design'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                onClick={() => setFilter('design')}
                            >
                                Design
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.filter(project => {
                            if (filter === 'all') return true;
                            return project.categories?.includes(filter.charAt(0).toUpperCase() + filter.slice(1));
                        }).map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border bg-cover border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-105  transition-shadow"
                                style={{
                                    backgroundImage: `url(${project.bgImage})`,
                                    backgroundBlendMode: 'overlay',
                                    background: `url(${project.bgImage}) , linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="p-6 h-full bg-cover bg-center" style={{ backdropFilter: 'blur(4px)' }} >
                                    <span className="text-sm text-gray-500 mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 font-bold mb-4">{project.shortDescription}</p>
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                                    >
                                        View Project →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home; 