import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import outsmart01 from '../../assets/images/outsmart/01.png';
import outsmart02 from '../../assets/images/outsmart/02.png';
import outsmart03 from '../../assets/images/outsmart/03.png';
import outsmart04 from '../../assets/images/outsmart/04.png';
import outsmart05 from '../../assets/images/outsmart/05.png';
import outsmart06 from '../../assets/images/outsmart/06.png';
import outsmart07 from '../../assets/images/outsmart/07.png';
import outsmart08 from '../../assets/images/outsmart/08.png';
import { motion } from 'framer-motion';
const OutSmart = () => {
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
            <ProjectImgContainer images={[outsmart01, outsmart02]} className="mt-28" />
            <h1 className="project__title">Designing OutSmart: A Competitive Skill-Based Gaming App</h1>
            <ProjectShortIntro
                type="UX Design, UI Design, UX Research"
                role="Lead UX Designer"
                deliverables="UI designs, Design System, Wireframes"
                timeline="8 months"
            />
            <ProjectDivider />
            <div className="flex flex-row gap-16">
                <div>
                    <p className="project__subtitle">Problem</p>
                    <p className="project__heading--medium">Balancing excitement with Trust </p>
                    <p className="project__text">Real-money gaming apps often struggle to balance excitement with usability and trust. </p>
                    <p className="project__text">Players face confusing navigation, inconsistent UI patterns, and limited transparency around gameplay and transactions, leading to poor retention and credibility issues.</p>
                </div>
                <div>
                    <p className="project__subtitle">Solution</p>
                    <p className="project__heading--medium">Strategy Based on clarity and fairness.</p>
                    <p className="project__text">I led the creation of a cohesive design system, user experience strategy, and UI design centered on clarity, engagement, skill-building, and fairness. </p>
                    <p className="project__text">By grounding decisions in competitive analysis and iterative feedback, we built a platform that feels both entertaining and reliable, reducing friction in gameplay and payments.</p>
                </div>
            </div>
            <ProjectDivider />
            <div>
                <h2 className="project__subtitle">Strategy & Process</h2>
                <div>
                    <ProjectProcess steps={[
                        "Ideation with Stakeholders",
                        "Competitor Analysis",
                        "Low Fidelity Prototyping",
                        "Design System Creation",
                        "High fidelity Designs",
                        "Iterate & Refine",
                        "Final Design & Interactions",
                        "Handoff"]} />
                </div>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`1) Ideation with Stakeholders`}</h3>
                <p className="project__text">At the start of the project, I led collaborative ideation sessions with key stakeholders to align on the app’s vision, goals, and desired player experience. These discussions helped define the overall essence (a balance between excitement, competition, and trustworthiness) as well as the visual and tonal direction for the brand.</p>
                <p className="project__text">Through these meetings, I gained clarity on the product’s positioning in the real-money gaming space and established a shared design language that guided all subsequent design decisions.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`2) Competitor Analysis`}</h3>
                <p className="project__text">I conducted an in-depth analysis of four major “get paid-to-play” apps using a Miro board to compare their aesthetics, UX patterns, and gameplay structures. Each competitor’s premise, strengths, and weaknesses were documented to identify gaps and opportunities for Outsmart.</p>
                <p className="project__text">The findings highlighted differentiators around trust, engagement, and design clarity. I then presented this analysis to stakeholders, sparking a discussion that helped align the team on Outsmart’s competitive positioning and next design steps. These insights directly informed the visual direction and early wireframes.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`3) Low Fidelity Prototyping`}</h3>
                <p className="project__text">Building on insights from the competitor analysis, I began with quick sketches to explore different gameplay flows, menu structures, and reward mechanisms. These rough concepts helped visualize how users would navigate between mini-games, balances, and leaderboard screens. </p>
                <p className="project__text">I then translated the strongest ideas into low-fidelity wireframes to map out the user journey and key interactions. The focus was on usability, clarity, and pacing rather than visual detail. These early prototypes became valuable discussion tools for aligning with engineers and stakeholders before moving into high-fidelity design.</p>
                <ProjectImgContainer images={[outsmart03, outsmart04]} className="mb-8" />
                <ProjectImgContainer images={[outsmart05]} />
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`4) Design System Creation`}</h3>
                <p className="project__text">To ensure consistency and scalability across platforms, I developed a design system in Figma that served as the foundation for OutSmart’s interface. It included a cohesive color palette reflecting the brand’s energetic and competitive spirit, a typographic hierarchy, and a comprehensive component library for buttons, navigation elements, etc. </p>
                <p className="project__text">This system streamlined collaboration with developers, reduced design redundancy, and allowed rapid iteration. Documenting the system also ensured future designers and engineers could easily expand or adapt it as the product evolved.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`5) High fidelity Designs`}</h3>
                <p className="project__text">Building on the design system, I created 14 high-fidelity screens in Figma to visualize OutSmart’s full user experience. These included onboarding and sign-up flows, profile and settings pages, game detail views, and leaderboards.</p>
                <ProjectImgContainer images={[outsmart06]} />
                <p className="project__text">I designed both light and dark mode variations to ensure accessibility and visual flexibility across different user preferences. Each screen was built with attention to hierarchy, clarity, and consistency, aligning with the product’s energetic brand identity. These designs were also optimized for collaboration with developers, serving as the foundation for handoff and implementation in React Native.</p>
                <ProjectImgContainer images={[outsmart07]} />
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`6) Iterate & Refine`}</h3>
                <p className="project__text">I iteratively refined high-fidelity designs by gathering stakeholder feedback and collaborating with developers to ensure feasibility. Adjustments were made to interactions, layouts, and visuals, balancing usability, brand consistency, and technical implementation.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`7) Final Design & Interactions`}</h3>
                <p className="project__text">The final designs were completed, with polished screens and implemented interactions. Prototypes were built to demonstrate navigation and user flows, providing a realistic preview of the app experience for stakeholders and developers.</p>
                <ProjectImgContainer images={[outsmart08]} />
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`8) Handoff`}</h3>
                <p className="project__text">Final designs were handed off to developers with detailed documentation, annotations, and interactive prototypes. Regular communication ensured accurate implementation, and version-controlled files maintained consistency, optimizing collaboration between the design, development, and business teams.</p>
            </div>
            <ProjectDivider />
            <div>
                <h3 className="project__subtitle mb-10">Results and Reflections</h3>
                <div className='flex flex-row gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Key Outcomes</h4>
                        <ul className='list-disc list-inside project__text'>
                            <li>Established OutSmart’s first cross-platform design system for mobile.</li>
                            <li>Created a streamlined onboarding flow that improved player trust and engagement.</li>
                            <li>Enabled faster developer implementation through scalable Figma components and documentation.</li>
                        </ul>
                    </div>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What I learned</h4>
                        <ul className='list-disc list-inside project__text'>
                            I deepened my understanding of designing for trust in competitive and monetary contexts. Balancing engagement with ethical design required strategic UX decisions and close collaboration with engineers to maintain consistency, performance, and accessibility across React Native.
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Impact</h4>
                        <ul className='list-disc list-inside project__text'>
                            OutSmart’s new design system reduced design debt, improved user confidence, and positioned the application for future scalability across mini-games and platforms.
                        </ul>
                    </div>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What's Next</h4>
                        <ul className='list-disc list-inside project__text'>
                            <li>I’d conduct user interviews to validate assumptions around motivation, risk perception, and reward feedback loops before beginning the design process.</li>
                            <li>I’d involve developers earlier in the ideation phase to co-define technical constraints and opportunities, to ensure faster iteration and alignment between UX goals and product delivery.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default OutSmart;