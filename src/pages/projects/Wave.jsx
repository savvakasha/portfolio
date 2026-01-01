import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';

const Wave = () => {
    return (
        <div className="container text-left">
            <h1 className="project__title mt-28">4th Wave Business Solutions: Streamlining Workflows for Telecom Field Technicians</h1>
            <ProjectShortIntro
                type="UX Design, UX Research"
                role="Lead UX Researcher & UX Designer"
                deliverables="User interviews and usability testing reports, User journey map, Low- and high-fidelity prototypes, and annotated design documentation."
                timeline="7 months"
            />
            <ProjectDivider />
            <div className="flex flex-row gap-16">
                <div>
                    <p className="project__subtitle">Problem</p>
                    <p className="project__text">Technicians relied on an outdated tool to manage service tickets, update project statuses, and log field data. The interface was unintuitive, slow, and inconsistent across devices, causing reporting errors, delays, and frustration. The company needed a more efficient tool to improve accuracy and streamline communication between field teams and operations.</p>
                </div>
                <div>
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
                        "User Interviews",
                        "Usability Testing",
                        "User Journey Map",
                        "Low- and high-fidelity prototypes",
                        "Annotated design documentation"]} />
                </div>
            </div>
        </div>
    );
};

export default Wave;