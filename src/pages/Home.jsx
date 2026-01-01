import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import outsmart from '../assets/images/intro-outsmart.png';
import nimbus from '../assets/images/intro-nimbus.png';
import wave from '../assets/images/intro-wave.png';
import bath from '../assets/images/intro-bath.png';
import diabetes from '../assets/images/intro-diabetes.png';
import celestial from '../assets/images/intro-celestial.png';
import astropedia from '../assets/images/intro-astropedia.png';
import refuge from '../assets/images/intro-refuge.png';
import kiosk from '../assets/images/intro-kiosk.png';
import nyc from '../assets/images/intro-nyc.png';

import Button from '../components/Button';
import { FaArrowDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
            <Banner className="relative pt-10 md:pt-32">
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
                <img src="icon-chevron-down.png" alt="chevron down" className="absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2 " />
            </Banner>
            <section id="projects" className="container my-16">
                <div className="flex flex-col py-6 md:py-16 gap-20 md:gap-28">
                    <IntroProjectItem
                        title="Designing OutSmart: A Competitive Skill-Based Gaming App"
                        tags="UX Design, UI Design, UX Research"
                        description="Designing a real-money gaming app and its design system, improving trust and engagement across gameplay, navigation, and payments."
                        image={outsmart}
                        altText="OutSmart Logo"
                        url="outsmart"
                    />
                    <IntroProjectItem
                        title="Co-Designing AI for Mindful Tech Use"
                        tags="UX Research, UX Design, Product Design"
                        description="Researching and co-designing an AI-enhanced tool that supports digital self-regulation, resulting in Nimbus; an adaptive concept promoting mindful, tech use."
                        image={nimbus}
                        altText="Nimbus Logo"
                        isReversed={true}
                        url="nimbus"
                    />
                    <IntroProjectItem
                        title="Streamlining Workflows for Telecom Field Technicians"
                        tags="UX Design, UX Research"
                        description="Leading UX research and design for digital infrastructure tools, mapping journeys, testing usability, and creating improved client and field tech experiences."
                        image={wave}
                        altText="Telecom Logo"
                        url="wave"
                    />
                    <IntroProjectItem
                        title="Improving Usability for a Small Business"
                        tags="UX Design, UX Research"
                        description="Identifying usability problems, validating IA with users, and presenting a data-backed, high-fidelity website redesign to stakeholders."
                        image={bath}
                        altText="Bath Professional Logo"
                        isReversed={true}
                        url="bath"
                    />
                    <div className='md:py-6'>
                        <p className="flex self-center items-center gap-2 text-2xl font-medium mb-4" style={{ color: '#3FA0A5' }}><FaArrowDown className="h-6 w-6" />Personal Projects<FaArrowDown className="h-6 w-6" /></p>
                        <div className='h-1 w-full' style={{ backgroundColor: '#3FA0A5' }}></div>
                    </div>
                    <IntroProjectItem
                        title="UX Evaluation for a UK Charity: Enhancing Findability and Cross-Site Flow"
                        tags="UX Research, UX Design"
                        description="Evaluating a charity’s main site and microsite through usability testing and analysis, revealing key friction points and delivering actionable, user-driven recommendations."
                        image={diabetes}
                        altText="Diabetes UK Logo"
                        url="charity"
                    />
                    <IntroProjectItem
                        title="Designing VR for Mindfulness and Space Exploration"
                        tags="UX Design, Game Design, Game Development"
                        description="Developing a user-centered VR journey that supports relaxation and learning, integrating mindfulness, personalization, and accessible spatial design."
                        image={celestial}
                        altText="Celestial Mode Screenshot"
                        url="celestial"
                    />
                    <IntroProjectItem
                        title="Astropedia: An Interactive Beginner’s Guide to Astrology"
                        tags="UX Design, Front-End Development"
                        description="Designing and developing a beginner-friendly astrology website with structured learning, interactive features, and a knowledge quiz using HTML, CSS, and JavaScript."
                        image={astropedia}
                        altText="Astropedia Screenshot"
                        url="astropedia"
                    />
                    <IntroProjectItem
                        title="Accessibility Audit for Refuge Network International"
                        tags="UX Research, Accessibility, Inclusive Design"
                        description="Evaluating a nonprofit website for accessibility using manual, automated, and assistive-tech testing, prioritizing severe issues and providing practical redesign solutions."
                        image={refuge}
                        altText="Refuge Network International Logo"
                        url="refuge"
                    />
                    <IntroProjectItem
                        title="Interactive Library Kiosk: Enhancing Visitor Engagement"
                        tags="UX Research, UX Design"
                        description="Creating a user-centered library kiosk concept to enhance resource discovery, informed by interviews, personas, prototyping, and usability testing."
                        image={kiosk}
                        altText="Library Kiosk Screenshot"
                        url="kiosk"
                    />
                    <IntroProjectItem
                        title="NYC Tourism Website: Designing Clear Information Architecture"
                        tags="Information Architecture, UX Research, UX Design"
                        description="Developing a user-centered NYC tourism website concept, focusing on clear information architecture, intuitive navigation, and user-validated wireframes."
                        image={nyc}
                        altText="NYC Tourism Website Screenshot"
                        url="nyc"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;

const IntroProjectItem = ({ title, tags, description, image, altText, isReversed, url }) => {
    const navigate = useNavigate();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`flex gap-6 md:gap-20 ${isReversed ? 'md:flex-row-reverse flex-col' : 'md:flex-row flex-col'}`}
        >
            <div className='shadow-lg rounded-3xl overflow-hidden md:min-w-96 md:max-w-96 min-w-60 max-w-60 md:mx-0 mx-auto max-h-60'>
                <img src={image} alt={altText} style={{ height: '100%', width: '100%' }} />
            </div>
            <div className='text-center md:text-left'>
                <h3 className="text-xl md:text-3xl font-semibold mb-4">{title}</h3>
                <p className="text-lg md:text-2xl font-medium mb-4">{tags}</p>
                <p className="text-base md:text-xl font-regular mb-6">{description}</p>
                <Button onClick={() => navigate(`/projects/${url}`)}>View Project</Button>
            </div>
        </motion.div>
    );
};