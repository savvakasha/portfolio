import { motion } from 'framer-motion';

const Work = () => {
    const projects = [
        {
            title: 'User Research Project 1',
            description: 'A comprehensive user research project focusing on understanding user needs and behaviors.',
            category: 'User Research'
        },
        {
            title: 'UX Design Project 1',
            description: 'An intuitive user interface design project that improved user engagement and satisfaction.',
            category: 'UX Design'
        },
        // Add more projects as needed
    ];

    return (
        <div className="min-h-screen py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl mb-12">My Work</h1>

                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className="text-sm text-gray-500 mb-2 block">
                                    {project.category}
                                </span>
                                <h2 className="text-2xl mb-4">{project.title}</h2>
                                <p className="text-gray-600">{project.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Work; 