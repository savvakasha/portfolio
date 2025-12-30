import { motion } from 'framer-motion';
import profile from '../assets/avatar2.jpg';
import Banner from '../components/Banner';

const About = () => {
    return (
        <div className="min-h-screen">
            <Banner className="pt-10 md:pt-32">
                <h1 className="text-4xl md:text-6xl mb-4 md:mb-8 font-medium" style={{ lineHeight: '1.2' }}>About Me</h1>
                <img src={profile} alt="Profile" className="rounded-md md:min-w-60 md:max-w-60 min-w-40 max-w-40 shadow-lg md:mx-0 mx-auto" />
            </Banner>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-10 text-left"
            >
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-16">
                    <div>
                        <h3 className='text-2xl md:text-4xl font-medium mb-4'>Background</h3>
                        <p className='text-lg md:text-xl'>
                            My journey in UX began with a fascination for people’s perspectives and behaviors, paired with a desire to create meaningful solutions.
                        </p>
                        <br />
                        <p className='text-lg md:text-xl'>
                            With a background in psychology, I focus on designing experiences that align with users’ needs and goals, making interactions efficient, and engaging.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-2xl md:text-4xl font-medium mb-4'>Outside of Work</h3>
                        <p className='text-lg md:text-xl'>
                            When I’m not designing, I enjoy learning languages, discovering new music, and staying active.
                        </p>
                        <br />
                        <p className='text-lg md:text-xl'>
                            I love exploring activities that challenge my mind and keep me curious about the world.
                        </p>
                    </div>
                    <div className='md:col-span-2'>
                        <h3 className='text-2xl md:text-4xl font-medium mb-4'>Testimonials</h3>
                        <p className='text-lg md:text-xl'>
                            "Nicole is a very talented UX/UI designer with a deep understanding of user needs and user interaction design. She took full ownership of designing the app from scratch, carefully balancing user needs with the company’s goals, and delivered a high-quality design that contributed significantly to the startup’s growth."
                        </p>
                        <br />
                        <p className='text-base md:text-lg'>- S. Jolai, Founder of OutSmart</p>
                    </div>
                </div>
            </motion.div>
        </div >
    );
};

export default About; 