import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import celestial01 from '../../assets/images/celestial/01.png';
import celestial02 from '../../assets/images/celestial/02.png';
import celestial03 from '../../assets/images/celestial/03.png';
import celestial04 from '../../assets/images/celestial/04.png';
import celestial05 from '../../assets/images/celestial/05.png';
import celestial06 from '../../assets/images/celestial/06.png';
import celestial07 from '../../assets/images/celestial/07.png';
import celestial08 from '../../assets/images/celestial/08.png';
import { motion } from 'framer-motion';

const Celestial = () => {
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
            <h1 className="project__title md:mt-28 mt-16">Designing VR for Mindfulness and Space Exploration</h1>
            <ProjectShortIntro
                type="UX Design, Game Design, Game Development"
                timeline="March – May 2024"
            />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Project Overview</p>
                <p>Celestial Mode was created as an immersive cultural experience for virtual reality in Unity engine through a user-centered design approach. It provides players with a serene sanctuary to help players relax and learn about the solar system. It also provides players with options to customize their own space ship, mindfulness exercises, and key information about planets in the solar system.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">My Role</p>
                <p className='project__heading--medium'>Lead UX Designer & Developer</p>
                <p className="project__text">I led the planning, execution, and development of the experience from sketches to user testing. This included considerations for the three illusions and design principles of virtual reality, accessibility, and technical requirements.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Methodology</p>
                <p className="project__heading--small"> 1. Exploratory Research</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Industry Research: Studied the proper storytelling techniques, the three illusions, and design principles for virtual reality. Learned of innovations happening in virtual reality technology.</li>
                    <li>Community Research: Explored cultural experiences happening in London, searching for opportunities that could be enhanced by virtual reality.</li>
                    <li>Psychological Research: Delved deeper into relaxation techniques and mindfulness activities.</li>
                </ul>
                <p className="project__text">Key Insights: Relaxing VR experiences have been growing in popularity along with low-intensity, accessible cultural in-person experiences, with Greenwich Observatory offering a calmer show for individuals with autism. Furthermore, mindfulness exercises are a popular way to relax and stay present</p>
                <p className="project__heading--small">2. Sketching</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Visualized design concepts and layouts without limitations.</li>
                    <li>Explored different possibilities for the VR experience, allowing for quick iterations.</li>
                </ul>
                <p className="project__text">Outcome: An early concept of a virtual reality solar system exploration experience.</p>
                <ProjectImgContainer images={[celestial01, celestial02]} alt="Celestial Mode Sketches" />
                <p className="project__heading--small">3. Lego Modeling</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Legos were used to model a 3D representation of the virtual reality environment.</li>
                    <li>The model provided an approximation for dimension in the experience along with asset placement.</li>
                </ul>
                <ProjectImgContainer images={[celestial03, celestial04]} alt="Celestial Mode Lego Model" />
                <p className="project__heading--small">4. Development</p>
                <ul className='list-disc list-inside project__text'>
                    <li>An inspiration board was created to aid in the design of the experience to map out textures, colors, and overall energy of the experience before asset collection.</li>
                    <li>Assets were downloaded, customized to match the aesthetics of the experience, and placed.</li>
                    <li>Scripts were implemented to accomplish interactivity within the experience.</li>
                    <li>QA tests were done to check for bugs/glitches.</li>
                </ul>
                <p className="project__heading--small">Features included:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>A solar system is complete with the Sun and 8 planets</li>
                    <li>A space ship interior which included: </li>
                    <ul className='list-disc list-inside ml-4 project__description' style={{ marginBottom: '0px' }}>
                        <li>A main navigation desk</li>
                        <li>Several couches and seats</li>
                        <li>A rest area</li>
                    </ul>
                </ul>
                <ProjectImgContainer images={[celestial05, celestial06]} alt="Celestial Mode Development" />
                <ProjectImgContainer images={[celestial07, celestial08]} alt="Celestial Mode Development" />
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Outcomes & Deliverables</p>
                <ul className='list-disc list-inside project__text'>
                    <li>A demo of a cosy, serene, and modern virtual reality experience equipped with:</li>
                    <ul className='list-disc list-inside ml-4 project__description' style={{ marginBottom: '0px' }}>
                        <li>Light personalisation options.</li>
                        <li>Music personalization options.</li>
                        <li>A dynamic skybox.</li>
                        <li>Interactive items to reward independent exploration.</li>
                        <li>An educational solar system option.</li>
                        <li>Several mindfulness activities for users.</li>
                    </ul>
                    <li>A detailed planning and development report.</li>
                    <li>A demonstration of the demo to VR specialists and game developers.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">What I Learned</p>
                <ul className='list-disc list-inside project__text'>
                    <li>The importance of storytelling, occlusion, and the three illusions while designing a virtual reality experience.</li>
                    <li>How to design for virtual reality while considering both design principles and accessibility.</li>
                    <li>How to develop a virtual reality experience using Unity engine.</li>
                </ul>
            </div>
            <ProjectDivider />
            <p className="project__heading--medium">Full report available upon request.</p>
        </motion.div>
    );
};

export default Celestial; 