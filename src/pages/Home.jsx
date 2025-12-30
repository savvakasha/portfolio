import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import outsmart from '../assets/images/intro-outsmart.png';
import Button from '../components/Button';

const Home = () => {
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
            <Banner className="pt-10 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <h1 className="text-3xl md:text-6xl font-medium mb-5 md:mb-8" style={{ lineHeight: '1.2' }}>
                        Nicole Condon is a UX designer creating intuitive, inclusive, and interactive digital experiences
                    </h1>
                    <h2 className="text-xl md:text-3xl font-regular mb-4 md:mb-8">
                        As a UX Designer and user researcher, I leverage my background in psychology and customer service to understand people, creating systems that are intuitive, helpful, and efficient.
                    </h2>

                    <div className="flex space-x-6 text-xs md:text-base mb-4 md:mb-8">
                        <p><b>My toolbox:</b> Figma, Qualtrics, Unity, Optimal Workshop, MAXQDA</p>

                    </div>
                </motion.div>
                <div className="flex justify-center items-center md:max-w-80 md:min-w-80 max-w-50 min-w-50 ">
                    <img src="avatar.png" alt="Profile" className="rounded-md shadow-lg md:w-3/4 w-2/4" />
                </div>
            </Banner>
            <section id="projects" className="container  my-16">
                <div className="flex flex-col py-16 gap-24">
                    <IntroProjectItem
                        title="Designing OutSmart: A Competitive Skill-Based Gaming App"
                        tags="UX Design, UI Design, UX Research"
                        description="Designing a real-money gaming app and its design system, improving trust and engagement across gameplay, navigation, and payments."
                        image={outsmart}
                        altText="OutSmart Logo"

                    />
                    <IntroProjectItem
                        title="Co-Designing AI for Mindful Tech Use"
                        tags="UX Research, UX Design, Product Design"
                        description="Researching and co-designing an AI-enhanced tool that supports digital self-regulation, resulting in Nimbus; an adaptive concept promoting mindful, tech use."
                        image={outsmart}
                        altText="Nimbus Logo"
                        isReversed={true}
                    />
                    <IntroProjectItem
                        title="Streamlining Workflows for Telecom Field Technicians"
                        tags="UX Design, UX Research"
                        description="Leading UX research and design for digital infrastructure tools, mapping journeys, testing usability, and creating improved client and field tech experiences."
                        image={outsmart}
                        altText="Telecom Logo"
                    />
                    <IntroProjectItem
                        title="Improving Usability for a Small Business"
                        tags="UX Design, UX Research"
                        description="Identifying usability problems, validating IA with users, and presenting a data-backed, high-fidelity website redesign to stakeholders."
                        image={outsmart}
                        altText="Bath Professional Logo"
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
            className={`flex gap-20 ${isReversed ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'}`}
        >
            <div>
                <img src={image} alt={altText} className='md:min-w-96 md:max-w-96 min-w-60 max-w-60' />
            </div>
            <div className='text-left'>
                <h3 className="text-3xl font-semibold mb-4">{title}</h3>
                <p className="text-2xl font-medium mb-4">{tags}</p>
                <p className="text-xl font-regular mb-6">{description}</p>
                <Button>View Project</Button>
            </div>
        </motion.div>
    );
};