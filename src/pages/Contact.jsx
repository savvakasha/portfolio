import { motion } from 'framer-motion';
import { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (formData.name === '' || formData.message === '') {
            alert('Please fill in the required fields');
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };

        emailjs
            .send('service_qvydesq', 'template_iqshhxo', templateParams, {
                publicKey: 'wSKe5T2XrYEfJRgx9',
            })
            .then(
                () => {
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                    alert('Message sent successfully');
                },
                (error) => {
                    alert('Message failed to send');
                },
            );

    };

    return (
        <div className=" py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex gap-10"
                >
                    <div className="text-left">
                        <h2 className="text-4xl mb-12">Let’s Connect!</h2>
                        <p className="text-2xl">
                            I’m always excited to hear from people about new ideas, design challenges, or opportunities to collaborate.
                        </p>
                        <br />
                        <p className="text-2xl">
                            Drop me a message — I’d love to hear from you!
                        </p>
                        <br />
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
                            href="https://www.linkedin.com/in/nicole-c-41790328a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 mb-4 hover:text-black transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <form ref={form} className="space-y-8 flex-grow w-full">
                        <FormInput
                            label="Name *"
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <FormInput
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-left text-xl text-gray-900 mb-1"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-2 border bg-transparent min-h-24"
                                style={{ borderRadius: '10px', borderColor: '#3FA0A5' }}
                                required
                            ></textarea>
                        </div>

                        <Button onClick={sendEmail}>
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact; 