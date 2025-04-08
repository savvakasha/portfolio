import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl mb-12">Get in Touch</h1>

                    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 focus:border-black focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm text-gray-600 mb-1"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">
                            Or reach out directly at:{' '}
                            <a
                                href="mailto:nicolec0225a@gmail.com"
                                className="text-black hover:underline"
                            >
                                nicolec0225a@gmail.com
                            </a>
                        </p>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact; 