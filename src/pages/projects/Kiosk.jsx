import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import kiosk01 from '../../assets/images/kiosk/01.png';
import kiosk02 from '../../assets/images/kiosk/02.png';
import kiosk03 from '../../assets/images/kiosk/03.png';
import kiosk04 from '../../assets/images/kiosk/04.png';
import { motion } from 'framer-motion';
const Kiosk = () => {
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
            <h1 className="project__title mt-28">Interactive Library Kiosk</h1>
            <ProjectShortIntro
                type="UX Research, UX Design"
                timeline="Nov 2023 – Dec 2023"
            />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Project Overview</p>
                <p className="project__text">
                    The Interactive Library Kiosk is a concept developed to enhance user engagement at Woolwich Centre Library. It addresses a key challenge: most visitors were unaware of available events and resources. The solution? A user-friendly, on-site kiosk designed to inform, inspire, and connect.
                </p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">My Role</p>
                <p className="project__heading--medium">
                    UX Designer & User Researcher
                </p>
                <p className="project__text">I led both the user research and UX design for this project from initial discovery and insight synthesis, to prototyping, testing, and iteration.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">The Problem</p>
                <p className="project__text">Library visitors often completed their intended tasks but missed out on events and lesser-known services due to limited in-library visibility. I set out to reimagine how users discover resources and opportunities during their visit, using a user-centered design process.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Methodology</p>
                <p className="project__heading--small">1. Discovery: Interviews & Contextual Inquiry</p>
                <ul className="list-disc list-inside project__text">
                    <li>Conducted on-site interviews with diverse library visitors (students, parents, retirees).</li>
                    <li>Explored behavior, needs, and awareness of library offerings.</li>
                    <li>Insight: Visitors had a narrow mental model of the library’s role, often unaware of its full potential.</li>
                </ul>
                <p className="project__heading--small">2. Synthesis & Persona Development</p>
                <ul className="list-disc list-inside project__text">
                    <li>Identified key themes: passive navigation, limited discovery, time-constrained visits.</li>
                    <li>Created actionable personas to guide design decisions and represent user mindsets.</li>
                </ul>
                <p className="project__heading--small">3. Ideation & Paper Prototyping</p>
                <ul className="list-disc list-inside project__text">
                    <li>Brainstormed concepts addressing key insights (event discovery, passive browsing, quick interactions).</li>
                    <li>Designed and tested paper prototypes to explore layout, content hierarchy, and task flows.</li>
                </ul>
                <p className="project__heading--small">4. UX Design & Iteration</p>
                <ul className="list-disc list-inside project__text">
                    <li>Developed wireframes and user flows based on user goals and environment constraints.</li>
                    <li>Created a storyboard to visualize the typical user journey and emotional touchpoints.</li>
                    <li>Iterated on the kiosk layout for intuitive navigation, minimal cognitive load, and fast engagement.</li>
                </ul>
                <p className="project__heading--small">5. Usability Testing</p>
                <ul className="list-disc list-inside project__text">
                    <li>Conducted multiple rounds of feedback sessions with new and returning users.</li>
                    <li>Adjusted UI elements for clarity, improved onboarding, and streamlined content.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Outcomes & Deliverables</p>
                <ul className="list-disc list-inside project__text">
                    <li>Interactive kiosk concept aimed at promoting events and resources.</li>
                    <li>Wireframes, user journeys, and personas grounded in real user behavior.</li>
                    <li>Storyboard to communicate the interaction context and user goals.</li>
                    <li>Design poster summarizing research, design rationale, and outcomes.</li>
                    <li>The final concept encouraged spontaneous exploration and deeper community engagement.</li>
                </ul>
                <ProjectImgContainer images={[kiosk01]} />
                <ProjectImgContainer images={[kiosk02]} />
                <ProjectImgContainer images={[kiosk03]} />
                <ProjectImgContainer images={[kiosk04]} />
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">What I Learned</p>
                <p className="project__text">This project highlighted the power of designing for discovery and how UX extends beyond the screen in physical environments.</p>
                <ul className="list-disc list-inside project__text">
                    <li>Combined user research and rapid prototyping enabled early validation.</li>
                    <li>Physical UX needs to be immediate and intuitive, especially in shared public spaces.</li>
                    <li>Listening to users uncovered a gap that technology alone wouldn't have solved.</li>
                </ul>
            </div>
            <ProjectDivider />
            <p className="project__heading--medium">Full report, wireframes, and storyboard available upon request.</p>
        </motion.div>
    );
};

export default Kiosk;