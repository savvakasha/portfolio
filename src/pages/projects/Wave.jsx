import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';
import { motion } from 'framer-motion';
const Wave = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1] // Custom easing for smooth reveal
            }}
            className="container text-left">
            <h1 className="project__title md:mt-28 mt-16">4th Wave Business Solutions: Streamlining Workflows for Telecom Field Technicians</h1>
            <ProjectShortIntro
                type="UX Design, UX Research"
                role="Lead UX Researcher & UX Designer"
                deliverables="User interviews and usability testing reports, User journey map, Low- and high-fidelity prototypes, and annotated design documentation."
                timeline="7 months"
            />
            <ProjectDivider />
            <div className="flex md:flex-row flex-col gap-16">
                <div className="w-full">
                    <p className="project__subtitle">Problem</p>
                    <p className="project__text">Technicians relied on an outdated tool to manage service tickets, update project statuses, and log field data. The interface was unintuitive, slow, and inconsistent across devices, causing reporting errors, delays, and frustration. The company needed a more efficient tool to improve accuracy and streamline communication between field teams and operations.</p>
                </div>
                <div className="w-full">
                    <p className="project__subtitle">Solution</p>
                    <p className="project__text">Through interviews and usability testing, I identified pain points in navigation, data entry, and task tracking. The redesigned tool introduced:</p>
                    <ul className='list-disc list-inside project__text'>
                        <li>Simplified workflows</li>
                        <li>Clearer status indicators</li>
                        <li>Offline functionality for technicians working in low-connectivity areas</li>
                        <li>Large, glove-friendly buttons and high-contrast UI</li>
                    </ul>
                    <p className="project__text">By grounding decisions in competitive analysis and iterative feedback, we built a platform that feels both entertaining and reliable, reducing friction in gameplay and payments.</p>
                </div>
            </div>
            <ProjectDivider />
            <div>
                <h2 className="project__subtitle">4th Wave Business Solutions UX Strategy & Approach:</h2>
                <div>
                    <ProjectProcess steps={[
                        "User Research",
                        "Analyze Findings & Define User Needs",
                        "Information Architecture",
                        "Prototyping",
                        "Evaluation & Iteration",
                        "Handoff & Rollout"]} />
                </div>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`1) User Research`}</h3>
                <p className="project__text">I conducted interviews and usability tests with field technicians to understand how they used the existing tool during on-site work. These sessions revealed pain points such as unclear navigation, redundant data entry, and connectivity issues. Observing technicians in context also highlighted the importance of efficiency, visibility under bright light, and minimal interaction steps.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`2) Analyze Findings & Define User Needs`}</h3>
                <p className="project__text">I synthesized the research insights into key themes and mapped user journeys to visualize pain points across the workflow. From this, I defined core user needs: quick access to job information, reliable offline functionality, and clear task status visibility. These insights informed the redesign priorities and success metrics.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`3) Information Architecture`}</h3>
                <p className="project__text">To reduce cognitive load and improve task flow, I restructured the information architecture around technicians’ real-world tasks. Related actions were grouped logically, and redundant steps were removed. This resulted in a cleaner navigation structure and a clearer hierarchy for viewing and updating job data.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`4) Prototyping`}</h3>
                <p className="project__text">I developed low-fidelity wireframes to explore layout options and test navigation logic, followed by high-fidelity Figma prototypes for validation. The prototypes focused on streamlining critical tasks such as job updates, parts requests, and completion reporting while ensuring accessibility and touch-friendly interactions.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`5) Evaluation & Iteration`}</h3>
                <p className="project__text">Technicians participated in usability testing sessions with the prototypes. Their feedback led to iterative improvements, including simplified language, larger action buttons, and better visual cues for task completion. Each iteration brought the interface closer to technicians’ expectations and real usage scenarios.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`6) Handoff & Rollout`}</h3>
                <p className="project__text">Finalized designs and component specifications were handed off to the development team. I supported the rollout by reviewing builds for design consistency and functionality alignment, ensuring a smooth transition from prototype to production.</p>
            </div>
            <ProjectDivider />
            <div>
                <h2 className="project__subtitle">Results and Reflections</h2>
                <div className='flex md:flex-row flex-col gap-8 md:gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Key Outcomes</h4>
                        <ul className='list-disc list-inside project__text'>
                            <li>Reduced average task completion time in testing by 35%</li>
                            <li>Improved technician satisfaction scores in follow-up surveys</li>
                            <li>Enhanced data accuracy due to clearer input validation and visual feedback</li>
                            <li>Established a scalable design foundation for future product features</li>
                        </ul>
                    </div>

                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What I learned</h4>
                        <ul className='list-disc list-inside project__text'>
                            This project deepened my understanding of designing for mobile contexts and offline use. It reinforced the importance of user research and validating assumptions through usability testing with real users.
                        </ul>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Impact</h4>
                        <ul className='list-disc list-inside project__text'>
                            The redesigned tool improved efficiency in the field and strengthened trust between technicians and management by reducing friction in daily operations and making reporting more reliable.
                        </ul>
                    </div>

                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What I'd do Next</h4>
                        <ul className='list-disc list-inside project__text'>
                            Next time, I’d involve more cross-departmental stakeholders earlier, such as operations managers and customer service, to better connect technician workflows.
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Wave;