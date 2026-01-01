import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectProcess from '../../components/projects/ProjectProcess';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import bath01 from '../../assets/images/bath/01.png';

const Bath = () => {
    return (
        <div className="container text-left">
            <h1 className="project__title mt-28">Bath Professional (Improving Usability for a Small Business)</h1>
            <ProjectShortIntro
                type="UX Design, UX Research"
                role="Lead UX Researcher & UX Designer"
                deliverables="Redesigned desktop and mobile prototypes, a usability report with prioritized recommendations, and a stakeholder presentation highlighting design and business impacts."
                timeline="6 months"
            />
            <ProjectDivider />
            <div className="flex flex-row gap-16">
                <div>
                    <p className="project__subtitle">Problem</p>
                    <p className="project__text">The company’s website looked outdated, lacked clear navigation, and did not effectively communicate services or build trust with potential customers. This poor experience contributed to low engagement and limited client inquiries, making it difficult for the business to convert visitors into customers.</p>
                </div>
                <div>
                    <p className="project__subtitle">Solution</p>
                    <p className='project__text'>Through heuristic evaluation and user research, I identified key usability and content issues that prevented users from exploring services or requesting quotes. I redesigned the website to create a more modern, trustworthy, and user-friendly experience by:</p>
                    <ul className='list-disc list-inside project__text'>
                        <li>Simplifying navigation</li>
                        <li>Improving visual hierarchy</li>
                        <li>Aligning content with what potential clients value most</li>
                    </ul>
                </div>
            </div>
            <ProjectDivider />
            <div>
                <h2 className="project__subtitle">Strategy & Approach:</h2>
                <div>
                    <ProjectProcess steps={[
                        "Heuristic Evaluation",
                        "Planning Usability Testing",
                        "Usability Testing, SUPR-Q, Card-Sorting",
                        "Analysis and Prioritization",
                        "Redesign",
                        "Stakeholder Presentation"]} />
                </div>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`1) User Research`}</h3>
                <p className='project__text'>Before testing with users, I conducted a heuristic evaluation of the existing website to identify usability and accessibility issues. Using Nielsen’s heuristics, I assessed clarity, consistency, and navigation flow. This helped identify immediate pain points such as unclear service descriptions, poor visual hierarchy, and missing elements, providing a focused foundation for usability testing.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`2) Planning Usability Testing`}</h3>
                <p className="project__text">I developed a usability testing plan to validate the findings from the heuristic evaluation. This included defining objectives, crafting realistic user tasks (e.g., finding service pricing or booking a consultation), and selecting participants representing the company’s target audience (homeowners seeking bathroom renovations.) I also prepared a SUPR-Q survey to measure users’ overall impressions of usability, trust, and appearance.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`3) Usability Testing, SUPR-Q, Card-Sorting`}</h3>
                <p className="project__text">I ran moderated usability tests and administered the SUPR-Q to capture both behavioral and attitudinal insights. The sessions revealed confusion about navigation labels and unclear pathways to key conversion actions like “Request a Quote.” To address structural issues, I followed up with card sorting sessions, which informed a clearer and more intuitive site hierarchy.</p>
                <ProjectImgContainer images={[bath01]} alt="Bath Prototype" />
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`4) Analysis and Prioritization`}</h3>
                <p className="project__text">After testing, I synthesized findings from observation notes, survey data, and card-sorting results. Insights were grouped into key themes: clarity, trust, and navigation. Issues were prioritized based on frequency and impact. This guided the redesign's focus on simplifying information architecture, enhancing transparency, and improving visual appeal.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`5) Redesign`}</h3>
                <p className="project__text">Based on the research, I redesigned the website’s layout and visual style in Figma, ensuring responsiveness across devices. The new design emphasized credibility through customer testimonials, clean imagery, and consistent branding. Improved navigation, modern typography, and clear call to actions guided users smoothly from browsing services to requesting quotes.</p>
            </div>
            <ProjectDivider />
            <div className='project__process-step'>
                <h3 className="project__subtitle">{`6) Presentation with Stakeholders`}</h3>
                <p className="project__text">Finally, I presented the redesigned prototypes and supporting research insights to company stakeholders. The presentation demonstrated how usability improvements directly supported business goals increasing clarity, trust, and conversion potential. The feedback was positive, and the team expressed plans to implement the redesign in upcoming updates.</p>
            </div>
            <ProjectDivider />
            <div>
                <h2 className="project__subtitle">Results and Reflections</h2>
                <div className='flex flex-row gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Key Outcomes</h4>
                        <ul className='list-disc list-inside project__text'>
                            <li>Identified major barriers to conversion through usability testing and heuristic review.</li>
                            <li>Redefined site structure and layout based on user feedback and card-sorting results.</li>
                            <li>Delivered a clean, modern redesign that increased clarity and improved user confidence.</li>
                        </ul>
                    </div>

                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What I learned</h4>
                        <ul className='list-disc list-inside project__text'>
                            I learned how to adapt UX methods to small business needs, focusing not just on usability, but on how design builds credibility and drives action. This project strengthened my understanding of user trust and visual communication in service-based businesses.
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row gap-20 mb-8'>
                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">Impact</h4>
                        <ul className='list-disc list-inside project__text'>
                            The redesign elevated the company’s digital presence, making the site feel professional and reliable which are key factors for customers choosing a refurbishment service. It also laid the groundwork for improved customer conversion and engagement online.
                        </ul>
                    </div>

                    <div className='flex-grow w-full gap-4'>
                        <h4 className="project__heading--medium">What's Next</h4>
                        <ul className='list-disc list-inside project__text'>
                            Next time, I’d collaborate more closely with marketing early on to align design decisions with SEO and conversion goals, ensuring the redesign delivers both a stronger user experience and measurable business results.
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bath;