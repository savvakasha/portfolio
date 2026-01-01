import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import astropedia01 from '../../assets/images/astropedia/01.png';
import astropedia02 from '../../assets/images/astropedia/02.png';
import astropedia03 from '../../assets/images/astropedia/03.png';
import astropedia04 from '../../assets/images/astropedia/04.png';
import astropedia05 from '../../assets/images/astropedia/05.png';
import { motion } from 'framer-motion';

const Astropedia = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth reveal
            }}
            className="container text-left"
        >
            <h1 className="project__title text-center mt-28">Astropedia</h1>
            <ProjectShortIntro timeline="February – May 2024" role="Lead UX Designer and Lead Developer" />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Project Overview</p>
                <p className="project__text">
                    Astropedia is a website that serves as a beginner's guide to Astrology. It was developed as I learned HTML, CSS, and JavaScript. It features all of the essentials to understanding the basics of Astrology along with a quiz for users to test their knowledge.
                </p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">My Role</p>
                <p className="project__heading--medium">
                    Lead UX Designer & Front-End Developer
                </p>
                <p className="project__text">I led the planning, designing, and development of the website sketches to implementation. This included considerations for accessibility based on WCAG 2.2, color theory, and language consistency.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Methods Used</p>
                <p className="project__text">
                    The process of developing Astropedia involved a series of steps to ensure the website was accessible, user-friendly, and visually appealing.
                </p>
                <p className="project__heading--small">1. Competitor Analysis</p>
                <p className="project__text">
                    I studied other Astrology websites before designing my own to get an idea of common design patterns. This was also to gather an understanding of which aspects would be most appropriate for users who are learning about the topic for the first time.
                </p>
                <p className="project__text">
                    <p className="project__heading--small">2. Site map</p>
                </p>
                <p className="project__text">
                    A site map was created to plan the information architecture of the website to prioritize and organize content in a way that allowed users to build upon their knowledge sequentially.

                </p>
                <p className="project__heading--small">3. Sketching</p>
                <p className="project__text">
                    Sketching was used early in the design process to explore visuals for the website pages in a quick and iterative manner.
                </p>
                <p className="project__heading--small">4. Color and Theme Selection</p>
                <ul className="list-disc list-inside project__text">
                    <li>Color palette and theme selection were vital points in the design process as they set the tone for the website and consistency throughout.</li>
                    <li>A color scheme most closely similar to split complementary was chosen due its freedom in design and the visual harmony it provides users. Furthermore, blue, gold, and black were utilized throughout for their associations with spirituality, mystery, and intrigue which aligned with the mystical astrology theme.</li>
                </ul>
                <p className="project__heading--small">5. Development</p>
                <ul className="list-disc list-inside project__text">
                    <li>I implemented HTML, CSS, and JavaScript to build the website and its features.</li>
                    <li>I also implemented an API using JavaScript.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Outcomes & Deliverables</p>
                <ul className="list-disc list-inside project__text">
                    <li>A planning document which includes sketches and a site map.</li>
                    <li>A responsive website complete with 5 content pages that include:</li>
                    <ul className="list-disc list-inside ml-4 project__description" style={{ marginBottom: '0px' }}>
                        <li>An embedded introduction video.</li>
                        <li>Alternative text throughout.</li>
                        <li>An interactive quiz for users to test their knowledge.</li>
                        <li>An Application Programming Interface, or, API.</li>
                    </ul>
                    <li>A detailed report describing all features along with a reflection of the designing and development process.</li>
                </ul>
                <ProjectImgContainer images={[astropedia01]} />
                <ProjectImgContainer images={[astropedia02]} />
                <ProjectImgContainer images={[astropedia03]} />
                <ProjectImgContainer images={[astropedia04]} />
                <ProjectImgContainer images={[astropedia05]} />
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">What I Learned</p>
                <ul className="list-disc list-inside project__text">
                    <li>How to develop a responsive website using HTML, CSS, and JavaScript.</li>
                    <li>How to implement an API.</li>
                    <li>How to select colors and visual themes for a design project through color theory while prioritizing accessibility.</li>
                </ul>
            </div>
            <ProjectDivider />
            <p className="project__heading--medium">Full report available upon request.</p>
        </motion.div>
    );
};

export default Astropedia;