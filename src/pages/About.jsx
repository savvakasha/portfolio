import { motion } from 'framer-motion';
import profile from '../assets/avatar2.jpg';
import Banner from '../components/Banner';

const About = () => {
    return (
        <div className="min-h-screen">
            <Banner className="pt-32">
                <h1 className="text-6xl mb-8 font-medium" style={{ lineHeight: '1.2' }}>About Me</h1>
                <img src={profile} alt="Profile" className="rounded-md min-w-60 max-w-60 shadow-lg" />
            </Banner>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-10 text-left"
            >
                <div className="container grid grid-cols-2 gap-20 my-16">
                    <div>
                        <h3 className='text-4xl font-medium mb-4'>Background</h3>
                        <p className='text-xl'>
                            My journey in UX began with a fascination for people’s perspectives and behaviors, paired with a desire to create meaningful solutions.
                        </p>
                        <br />
                        <p className='text-xl'>
                            With a background in psychology, I focus on designing experiences that align with users’ needs and goals, making interactions efficient, and engaging.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-4xl font-medium mb-4'>Outside of Work</h3>
                        <p className='text-xl'>
                            When I’m not designing, I enjoy learning languages, discovering new music, and staying active.
                        </p>
                        <br />
                        <p className='text-xl'>
                            I love exploring activities that challenge my mind and keep me curious about the world.
                        </p>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='text-4xl font-medium mb-4'>Testimonials</h3>
                        <p className='text-xl'>
                            "Nicole is a talented UX designer with a deep understanding of user needs and a creative approach to problem-solving. She consistently delivers high-quality work that meets and exceeds expectations."
                        </p>
                        <br />
                        <p>- John Doe, CEO of Company X</p>
                    </div>
                </div>
            </motion.div>
        </div >
    );
};

export default About; 