import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projects } from '../assets/project-data';
import Banner from '../components/Banner';
import outsmart from '../assets/images/intro-outsmart.png';

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
        <div>
            {/* Hero Section */}
            <Banner>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <h1 className="text-6xl mb-8 font-bold">
                        Nicole Condon is a UX designer creating intuitive, inclusive, and interactive digital experiences
                    </h1>
                    <h2 className="text-3xl text-gray-600 mb-8">
                        As a UX Designer and user researcher, I leverage my background in psychology and customer service to understand people, creating systems that are intuitive, helpful, and efficient.
                    </h2>

                    <div className="flex space-x-6 mb-8">
                        <p><b>My toolbox:</b> Figma, Qualtrics, Unity, Optimal Workshop, MAXQDA</p>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
                <div className="flex justify-center items-center max-w-80 min-w-80 ">
                    <img src="avatar.png" alt="Profile" className="rounded-md shadow-lg w-3/4" />
                </div>
            </Banner>
            <section id="projects" className="container  my-16">
                <div className="flex flex-col py-16 gap-12">
                    <IntroProjectItem
                        title="Designing OutSmart: A Competitive Skill-Based Gaming App"
                        tags="UX Design, UI Design, UX Research"
                        description="Designing a real-money gaming app and its design system, improving trust and engagement across gameplay, navigation, and payments."
                        image={outsmart}
                        altText="OutSmart Logo"

                    />
                    <IntroProjectItem
                        title="Designing OutSmart: A Competitive Skill-Based Gaming App"
                        tags="UX Design, UI Design, UX Research"
                        description="Designing a real-money gaming app and its design system, improving trust and engagement across gameplay, navigation, and payments."
                        image={outsmart}
                        altText="OutSmart Logo"
                        isReversed={true}
                    />
                    <IntroProjectItem
                        title="Designing OutSmart: A Competitive Skill-Based Gaming App"
                        tags="UX Design, UI Design, UX Research"
                        description="Designing a real-money gaming app and its design system, improving trust and engagement across gameplay, navigation, and payments."
                        image={outsmart}
                        altText="OutSmart Logo"
                    />
                    <IntroProjectItem
                        title="Designing OutSmart: A Competitive Skill-Based Gaming App"
                        tags="UX Design, UI Design, UX Research"
                        description="Designing a real-money gaming app and its design system, improving trust and engagement across gameplay, navigation, and payments."
                        image={outsmart}
                        altText="OutSmart Logo"
                        isReversed={true}
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;

const IntroProjectItem = ({ title, tags, description, image, altText, isReversed }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex gap-12 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}
        >
            <div>
                <img src={image} alt={altText} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{tags}</p>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};