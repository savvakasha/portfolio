import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import charity01 from '../../assets/images/charity/01.png';
import charity02 from '../../assets/images/charity/02.png';
import charity03 from '../../assets/images/charity/03.png';
import charity04 from '../../assets/images/charity/04.png';
import { motion } from 'framer-motion';

const Charity = () => {
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
            <h1 className="project__title md:mt-28 mt-16">UX Evaluation for a UK Charity: Enhancing Findability and Cross-Site Flow</h1>
            <ProjectShortIntro
                type="UX Research, UX Design"
                timeline="8 months"
            />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Project Overview</p>
                <p>This project involved a comprehensive UX evaluation of a UK-based charity’s main website and microsite, focusing on usability, information findability, and cross-site navigation. The evaluation responded to a real-world brief, aimed at improving the experience for key audiences including donors, volunteers, and service users.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">My Role</p>
                <p className='project__heading--medium'>User Research, UX Designer</p>
                <p className="project__text">I led the planning, execution, and analysis of the evaluation process, from participant recruitment to presenting findings to stakeholders. This included defining test objectives based on Diabetes UK’s UX goals and aligning them with user scenarios. I was also responsible for creating redesigns based on user data.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Methodology</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Moderated usability testing (remote and in-person).</li>
                    <li>Surveys for gathering quantitative and qualitative feedback.</li>
                    <li>Task analysis and heuristic evaluation.</li>
                    <li>Thematic analysis of usability test findings.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Key Findings & Insights</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Users struggled to navigate between the main site and microsite, often perceiving them as disconnected.</li>
                    <li>Key calls-to-action (e.g., donate, volunteer) lacked visibility and clarity.</li>
                    <li>First impressions were affected by content hierarchy and accessibility issues on both sites.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Outcomes & Deliverables</p>
                <ul className='list-disc list-inside project__text'>
                    <li>A prioritized set of redesign recommendations, supported by user evidence.</li>
                    <li>A detailed UX evaluation report.</li>
                    <li>A stakeholder presentation outlining pain points, user feedback, and actionable improvements to guide the Diabetes UK team. This presentation gave new suggestions along with confirming some of the team’s hypotheses.</li>
                </ul>
            </div>
            <ProjectImgContainer
                images={[charity01, charity02]}
                alt="Charity Website Screenshot"
            />
            <ProjectImgContainer
                images={[charity03, charity04]}
                alt="Charity Website Screenshot"
            />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">What I Learned</p>
                <ul className='list-disc list-inside project__text'>
                    <li>The value of clear task flows and test objectives in usability testing.</li>
                    <li>How to translate research findings into stakeholder-friendly insights and visual presentations.</li>
                    <li>The importance of evaluating multi-domain navigation and its effect on user confidence and trust.</li>
                    <li>Gained confidence facilitating usability testing sessions and articulating user needs to non-design stakeholders</li>
                </ul>
            </div>
            <ProjectDivider />
            <p className="project__heading--medium">Full report available upon request.</p>
        </motion.div>
    );
};

export default Charity;