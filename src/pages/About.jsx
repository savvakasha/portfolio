import { motion } from 'framer-motion';
import profile from '../assets/avatar2.jpg';
import Banner from '../components/Banner';

const About = () => {
    return (
        <div className="min-h-screen">
            <Banner>
                <h1 className="text-3xl font-bold mb-12">About Me</h1>
                <img src={profile} alt="Profile" className="rounded-md min-w-60" />
            </Banner>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-10 text-left"
            >

                <div className="prose prose-lg max-w-none">
                    <p>
                        I’m a user researcher from the United States with an MSc in Human-Computer Interaction Design. During my MSc in Human-Computer Interaction Design, I've worked on a variety of projects that pushed my skills, including user research, UX design, participatory design, accessibility, information architecture, virtual reality design and development, as well as web design and development.
                    </p>
                    <p>
                        My journey in UX began with my innate fascination for people's perspectives and behaviors, combined with a strong desire to help others. This curiosity, paired with an interest in the tech world, inspired me to focus on crafting intuitive and innovative user experiences.
                    </p>
                    <p>
                        With a background in psychology, I’ve always been fascinated by people’s thoughts, motivations, and behaviors. My research focuses on designing user experiences that seamlessly align with and support users’ needs and goals in the most efficient way possible.
                    </p>
                    <p>
                        When I’m not working, I enjoy practicing Russian, discovering new music, or staying active through pilates.
                    </p>
                    <h2 className="text-2xl mt-12 mb-6">Skills & Expertise</h2>
                    <ul className="list-none space-y-1 text-lg text-gray-600">
                        <li>User Research & Testing</li>
                        <li>UX/UI Design</li>
                        <li>Information Architecture</li>
                        <li>Prototyping</li>
                        <li>Data Analysis</li>
                        <li>User Journey Mapping</li>
                    </ul>
                </div>
            </motion.div>
        </div >
    );
};

export default About; 