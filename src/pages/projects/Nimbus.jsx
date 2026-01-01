import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import nimbus01 from '../../assets/images/nimbus/01.png';
import nimbus02 from '../../assets/images/nimbus/02.png';
import nimbus03 from '../../assets/images/nimbus/03.png';
import nimbus04 from '../../assets/images/nimbus/04.png';
import nimbus05 from '../../assets/images/nimbus/05.png';
import { motion } from 'framer-motion';
const Nimbus = () => {
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
            <h1 className="project__title md:mt-28 mt-16">Co-Designing AI for Mindful Tech Use</h1>
            <ProjectShortIntro
                type="UX Research, UX Design, Product Design"
                role="UX Researcher, UX Designer"
                deliverables="User Personas, Storyboard for key intervention moments, Conceptual UI Prototypes,  Ethical design principles for AI-driven behavior change tools."
                timeline="5 months"
            />
            <ProjectDivider />
            <div className="flex md:flex-row flex-col gap-16">
                <div>
                    <p className="project__subtitle">Problem</p>
                    <p className="project__text">Digital overuse has become a widespread challenge, yet most existing self-regulation tools feel rigid, impersonal, and often fail to create lasting change. Little is known about how these tools affect users over time, and even less about how Artificial Intelligence and co-design could be combined to make them more effective.</p>
                    <p className="project__text">I set out to create support that feels personalised, respectful, and proactive, helping users regain control of their digital habits without feeling restricted or monitored. This meant designing with users, not just for them, exploring how AI could enhance digital self-control in a more human-centred way.</p>
                </div>
                <div>
                    <p className="project__subtitle">Solution</p>
                    <p className="project__text">To address these gaps, I explored how AI and co-design could enhance digital self-control tools. Through user interviews, a co-design workshop, and evaluation sessions, I developed Nimbus, an AI-enhanced digital self-control concept created with users that encourages mindful device use and real-life engagement, without sacrificing ethics nor user trust.</p>
                    <p className="project__text">This project demonstrates how a user-centred, collaborative design approach can inspire future innovation in AI-integrated digital well-being tools.</p>
                </div>
            </div>
            <ProjectDivider />
            <div>
                <h2 className="project__subtitle">Nimbus AI Strategy & Approach:</h2>
                <div>
                    <ProjectProcess steps={[
                        "Exploratory Research",
                        "User Research",
                        "Persona Creation",
                        "Codesign Workshop",
                        "Conceptual Design of Nimbus",
                        "Evaluation of Nimbus",
                        "Final Design Principles"]} />
                </div>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`1) Exploratory Research`}</h3>
                <p className="project__text">Before beginning user research, I conducted a literature review exploring three key areas: technology overuse, artificial intelligence (AI), and user-centred design, with a focus on co-design methods.</p>
                <p className="project__text" style={{ marginBottom: '0px' }}>The review revealed that:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Excessive digital use continues to negatively affect well-being.</li>
                    <li>Existing self-control tools are often rigid and focused on short-term outcomes.</li>
                    <li>AI is being successfully integrated into areas like mental health and productivity, but has not yet been applied to digital self-control nor designed collaboratively with users.</li>
                </ul>
                <p className="project__text">These findings established a clear research gap and informed my project’s direction: developing an AI-enhanced digital self-control tool through <b>co-design</b>.
                </p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`2) User Research`}</h3>
                <p className="project__text">To understand how people manage their digital device use and what they need from self-control tools, I conducted semi-structured interviews with eight participants.</p>
                <p className='project__text' style={{ marginBottom: '0px' }}>The research explored:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>What motivates people to manage their device usage and how they do it.</li>
                    <li>How well current digital self-control tools meet users’ needs and preferences.</li>
                </ul>
                <p className="project__text">Participants were selected based on their experience or interest in managing their technology habits. The interview script included 25 core questions across five topics, covering motivations, behaviours, current tools, and perspectives on AI. Semi-structured interviews provided a consistent structure while allowing open, exploratory discussion.</p>
                <p className="project__text">The data was analysed using thematic analysis in MAXQDA 24, combining both inductive (data-driven) and deductive(literature-informed) approaches. I generated 185 initial codes, refined them into 42 code groups, and identified nine key themes that represented user motivations, behaviours, and needs.</p>
                <p className="project__text" style={{ marginBottom: '0px' }}>Key Interview Findings:</p>
                <ul className='list-decimal list-outside project__text pl-12'>
                    <li>Users want to regulate usage due to negative feelings and impact on mood from their device use and social media.</li>
                    <li>People want to reduce screen time to focus on the present moment and on real-life activities, often finding them more productive and beneficial, especially in the long run.</li>
                    <li>Users want to regulate their device usage due to concerns about their physical health and their privacy.</li>
                    <li>Users have found physical approaches and having planned activities outside of their homes to be effective in limiting device usage, sometimes discovering these approaches accidentally.</li>
                    <li>Using time-based and boundary-setting approaches are helpful for users, though some find that it only helps temporarily.</li>
                    <li>Norms in real-life socialisation prompt people to consciously limit their device use, often by silencing notifications to avoid seeming rude. This approach is effective because notifications easily garner users' attention.</li>
                    <li>Digital devices are integrated in multiple facets of users' daily routines for entertainment, work, and stress relief. Current tools are unable to detect the different intentions behind usage, weakening their effectiveness.</li>
                    <li>Current tools are too aggressive and rigid with users wanting a digital self-control tool that provides flexibility for changing contexts, offers support, and promotes mindfulness and self-soothing.</li>
                    <li>Some users are not aware of digital self-control tools, and when introduced by the tools built into their devices, the tools' insights are not seen as significant.</li>
                </ul>
                <p className="project__text">These insights revealed a clear opportunity to design personalised, context-aware, and user-centred solutions. They directly informed the next phase of the project, co-designing Nimbus, an AI-enhanced digital self-control concept built collaboratively with users.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`3) Persona Creation`}</h3>
                <p className="project__text">Based on interview findings, I created two personas representing key user groups to guide design decisions.</p>
                <p className="project__text list-disc">Sophie represents younger adults struggling with streaming and gaming, needing flexible, personalised tools to manage time, multitasking, and emotional use of devices.</p>
                <ProjectImgContainer images={[nimbus01]} alt="Sophie Persona" />
                <p className="project__text">Thomas represents professionals overusing social media, seeking supportive tools that suggest engaging real-life alternatives and address long-term habits.</p>
                <ProjectImgContainer images={[nimbus02]} alt="Thomas Persona" />
                <p className="project__text">Both personas highlight frustrations with current digital self-control tools and reflect users’ goals, motivations, and behaviours. These personas informed the co-design workshop for Nimbus, ensuring the AI-enhanced tool addresses real user needs in a user-centred, adaptable way.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`4) Codesign Workshop`}</h3>
                <p className="project__text">To ideate an AI-enhanced digital self-control tool, I ran a codesign workshop with five participants who regularly use digital devices and expressed discomfort with their screen time. Codesign was chosen to directly involve users, ensuring ideas address real needs while fostering creativity.</p>
                <p className="project__text">The workshop began with an icebreaker and warm-up exercises, encouraging playful brainstorming about how AI could be integrated into everyday objects. Participants then used personas (Sophie and Thomas) to shift focus from themselves and ideate solutions.</p>
                <p className="project__text">In the first activity, groups built “magical AI machines” using physical materials, exploring creative possibilities for a digital self-control tool.</p>
                <p className="project__text">The second activity focused on storyboarding interactions, mapping how the personas would engage with the tool, including context, goals, and challenges.</p>
                <p className="project__text" style={{ marginBottom: '0px' }}>Thematic analysis of the workshop data revealed four key ideation themes:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Physical approaches: hands-on methods to support regulation.</li>
                    <li>Reward mechanisms: celebrating progress toward usage goals.</li>
                    <li>Encouraging real-life activities: promoting offline engagement.</li>
                    <li>AI activity detection: monitoring device use versus real-life activity to provide support.</li>
                </ul>
                <p className="project__text">These insights highlighted how codesign effectively generates user-centred ideas and clarified how AI can enhance digital self-control tools. They directly informed the design of Nimbus, guiding its features, interactions, and approach to supporting users.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`5) Conceptual Design of Nimbus`}</h3>
                <p className="project__text">The Nimbus concept was inspired by a cloud lamp idea from the codesign workshop. Its development involved defining key features and creating supporting materials, including sketches, a scenario, a storyboard, digital screen mockups, and a presentation to visualise the AI-enhanced digital self-control tool.</p>
                <p className="project__text" style={{ marginBottom: '0px' }}>Nimbus’ key features to help users regulate their digital device use included:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>"Fog mode" that blurs distractions from users.</li>
                    <li>Thunderstorms form when a user is on their digital device for too long.</li>
                    <li>Nimbus floats across homes/offices, accompanying the user.</li>
                    <li>Customisable privacy settings allow users to control how much Nimbus knows about them.</li>
                    <li>Customisable strictness settings allow users to control their usage goals and boundaries.</li>
                    <li>Nimbus uses artificial intelligence to detect user’s activities.</li>
                    <li>Nimbus uses artificial intelligence to personalise suggestions for real-life activities to users.</li>
                    <li>Nimbus has a calming presence.</li>
                    <li>Nimbus rewards users for staying off their devices with a crystal rain shower and turning the user’s favourite colours.</li>
                    <li>Nimbus learns users’ colour preferences through AI.</li>
                    <li>Nimbus uses AI to constantly learn about the user’s needs, goals, and challenges as contexts change.</li>
                </ul>
                <p className="project__text">The sketches below were created to explore what Nimbus’ feature could look like and iterate if
                    necessary and to rapidly develop the idea of Nimbus visually. Like most low fidelity prototyping techniques, sketching allows for quick and easy adjustments while also encouraging potential features.</p>
                <ProjectImgContainer images={[nimbus03]} alt="Nimbus Sketches" />
                <p className="project__text">I wanted to visually represent a user’s main interactions with Nimbus, begin thinking about the user flow, and communicate main features of Nimbus during evaluation. This storyboard was also based on the Thomas persona and inspired by group 1’s storyboard.</p>
                <ProjectImgContainer images={[nimbus04]} alt="Nimbus Storyboard" />
                <p className="project__text">An early screen interface for Nimbus was created in Figma to show the activity suggestions feature, the tool’s only screen-based function. The design followed common app and web conventions, keeping it simple to focus on functionality and content and to invite feedback during evaluation.</p>
                <ProjectImgContainer images={[nimbus05]} alt="Nimbus Screen Interface" />
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`6) Evaluation`}</h3>
                <p className="project__text">To evaluate the Nimbus concept, I conducted a focus group interview following a 34-slide presentation that introduced the concept, its 11 key features, AI integration, and user scenarios through a detailed storyboard. The presentation, which included a few AI-generated visual mockups, was designed to immerse participants in Nimbus’ envisioned user experience and prompt meaningful feedback.</p>
                <p className='project__text'>A focus group was selected over usability testing because Nimbus was still in its conceptual stage. This method enabled open, collaborative discussion about participants’ first impressions, expectations, and concerns, allowing nuanced insights to emerge that would not have been possible through task-based evaluation. The session lasted 90 minutes and encouraged participants to critically reflect on Nimbus’ potential value, usability, and emotional impact.</p>
                <p className='project__text'>Thematic analysis of the discussion revealed six main findings:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Positive first impressions – Participants found Nimbus innovative and engaging, appreciating its novel approach to digital self-control.</li>
                    <li>Appealing features – The floating form, fog mode, and customisable privacy and strictness settings were especially well-received for balancing function with user autonomy.</li>
                    <li>Mixed reactions to rewards and punishments – While some appreciated motivational elements, others viewed them as overly simplistic or lacking depth.</li>
                    <li>Divergent views on personification – Some participants preferred Nimbus to feel more “alive” or companion-like, while others found the idea unsettling.</li>
                    <li>Desire for mobility – Users wanted Nimbus to extend beyond fixed locations, rewarding positive real-world behaviours across contexts.</li>
                    <li>Perceived effectiveness – Participants believed Nimbus could support healthier digital habits but expressed uncertainty about its long-term impact.</li>
                </ul>
                <p className='project__text'>Overall, the evaluation confirmed Nimbus’ potential as an innovative and user-centred concept, while also identifying key areas for refinement, particularly around personalisation, meaningful feedback, and AI’s role in promoting long-term behaviour change. These insights informed recommendations for future iterations and contributed to a deeper understanding of how AI-enhanced digital self-control tools can balance support, autonomy, and trust in design.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`7) Final Design Principles`}</h3>
                <p className="project__text">Drawing from all project phases, several principles emerged for designing AI-driven self-regulation tools. Such tools should:</p>
                <ul className='list-disc list-inside project__text'>
                    <li>Empower, not control, helping users make mindful digital choices while respecting autonomy.</li>
                    <li>Be adaptive and context-aware, learning from users’ habits to offer timely, personalised support.</li>
                    <li>Encourage real-world engagement and include meaningful rewards that reinforce reflection rather than restriction.</li>
                    <li>Include subtle personification to enhance connection, provided users control its presence.</li>
                    <li>Promote transparency, trust, and long-term habits, evolving with users over time.</li>
                </ul>
                <p className='project__text'>Furthermore, ongoing co-design with users ensures the experience remains relevant, supportive, and human-centred.</p>
            </div>
            <ProjectDivider />
            <div>
                <h3 className="project__subtitle mb-10">Results and Reflections</h3>
                <div className='flex md:flex-row flex-col gap-8 md:gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Key Outcomes</h4>
                        <p className="project__text">This project explored how users manage digital device usage and how AI can enhance digital self-control tools. Findings revealed that people are motivated to reduce screen time due to emotional, mental, and physical strain. The codesign workshop generated the Nimbus concept; an AI-driven tool that adapts to users’ habits, encourages real-life engagement, and promotes balanced technology use.</p>
                    </div>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What I learned</h4>
                        <ul className='list-disc list-inside project__text'>
                            I learned to conduct user interviews, codesign workshops, and focus group evaluations, gaining valuable insights into user-centred design. I also developed practical skills in storyboarding and conceptual development, and discovered the creative potential of engaging participants as collaborators in ideation.
                        </ul>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Impact</h4>
                        <ul className='list-disc list-inside project__text'>
                            The project contributes to Human-Computer Interaction by emphasizing user inclusion in design and showing how combining AI with codesign can improve digital wellbeing.
                        </ul>
                    </div>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What's Next</h4>
                        <ul className='list-disc list-inside project__text'>
                            <li>Recruit a more diverse participant group.</li>
                            <li>Conduct multiple workshops.</li>
                            <li>Develop Nimbus into a detailed, testable prototype.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Nimbus;