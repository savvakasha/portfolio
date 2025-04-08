import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../assets/project-data';
import { useState } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(0);

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Project not found</h1>
                <Link to="/" className="text-blue-500 hover:underline">← Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section with Background Image */}
            <div
                className="relative h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <Link to="/" className="absolute top-10 left-10 font-bold text-white hover:underline mb-8 block">← Back to Home</Link>
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                        <div className="flex items-center justify-center gap-4">
                            <span>{project.date}</span>
                            <span>•</span>
                            <span>{project.role}</span>
                            {project.location && (
                                <>
                                    <span>•</span>
                                    <span>{project.location}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                >

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-700 whitespace-pre-line">{project.overview}</p>
                    </div>
                    {/* Image Gallery */}
                    <div className="mb-8">
                        <div className="relative h-[400px] mb-4">
                            <img
                                src={project.images[selectedImage]}
                                alt={`${project.title} - Image ${selectedImage + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            {project.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative w-24 h-24 flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${project.title} - Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {project.designAndProcess && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Design & Process</h2>
                            <p className="text-gray-700 whitespace-pre-line">{project.designAndProcess}</p>
                        </div>
                    )}

                    {project.methods && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">Methods</h2>
                            <p className="text-gray-700">{project.methods}</p>
                        </div>
                    )}

                    {project.userInsights && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">User Insights</h2>
                            <p className="text-gray-700 whitespace-pre-line">{project.userInsights}</p>
                        </div>
                    )}

                    <div className="flex gap-2">
                        {project.categories.map((category, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail; 