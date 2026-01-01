import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';

const Refuge = () => {
    return (
        <div className="container text-left">
            <h1 className="project__title mt-28">Refuge Network International Accessibility Audit</h1>
            <ProjectShortIntro
                type="UX Research, Accessibility, Inclusive Design"
                timeline="November – December 2023"
            />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Project Overview</p>
                <p className="project__text">
                    This accessibility audit was conducted for Refuge Network International's website. The website was evaluated based on Web Content Accessibility Guidelines (WCAG 2.2), Web Accessibility Initiative (W3C) personas, and the Autism Accessibility Guidelines by Hassell Inclusion. The 10 most severe accessibility violations were compiled into a comprehensive report along with redesign suggestions to correct the violations.
                </p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">My Role</p>
                <p className="project__heading--medium">
                    Lead Accessibility Specialist
                </p>
                <p className="project__text">I led the accessibility audit along with generating redesign suggestions and compiling the findings into a comprehensive accessibility report.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Methods Used</p>
                <p className="project__heading--small">1. Manual Accessibility Check</p>
                <ul className="list-disc list-inside project__text">
                    <li>An initial manual check was done for each page to detect potential issues to investigate further.</li>
                    <li>This was done by scanning each page manually for compliance with WCAG 2.2 and the Autism Accessibility Guidelines.</li>
                    <li>Potential violations from this check were then noted.</li>
                </ul>
                <p className="project__heading--small">2. Automated Accessibility Check</p>
                <ul className="list-disc list-inside project__text">
                    <li>Another review was conducted using WAVE, which is a web accessibility evaluation tool, which provided a deeper look into the structure of the web pages and flagged accessibility issues to explore further.</li>
                    <li>Noted issues.</li>
                    <li>Potential violations from this check were noted.</li>
                </ul>
                <p className="project__heading--small">3. Assistive Technology (AT) Check</p>
                <ul className="list-disc list-inside project__text">
                    <li>In the pursuit of a more in-depth understanding of the websites’ accessibility, available assistive technology (AT) and accessibility features were also used to check the web pages.</li>
                    <li>To specifically investigate the experience of screen reader users, the VoiceOver tool and keyboard navigation keys (Tab, Enter, etc.) were used, since these tools are commonly used in collaboration with one another while using a screen reader.</li>
                    <li>Google Chrome’s zoom feature (Used to 400%) was utilised to understand the experience of users with vision impairments.</li>
                    <li>All potential issues detected in this check were also noted.</li>
                </ul>
                <p className="project__heading--small">4. Final Manual Review & Violation Severity Ranking</p>
                <ul className="list-disc list-inside project__text">
                    <li>A final manual review was done to match all noted issues to the violated guidelines and to verify issues detected by WAVE along with what was detected by Assistive Technology.</li>
                    <li>During this step, the severity of issues was analyzed through the personas of users with disabilities from the Web Accessibility Initiative (W3C).</li>
                    <ul className="list-disc list-inside ml-8 project__description" style={{ marginBottom: '0px' }}>
                        <li>The more difficult the issue is to overcome for users, the higher the issue is ranked in severity based on both of the utilised guidelines.</li>
                    </ul>
                    <li>The WCAG system was utilised to evaluate severity:</li>
                    <ul className="list-disc list-inside ml-8 project__description" style={{ marginBottom: '0px' }}>
                        <li>Level A conformance: Provides the least amount of accessibility for users.</li>
                        <li>Level AA conformance: Provides accessibility for most users.</li>
                        <li>Level AAA conformance: The highest level of conformance.</li>
                    </ul>
                    <li>For the Autism Accessibility Guidelines violations, the scale from the guidelines was utilised:</li>
                    <ul className="list-disc list-inside ml-8 project__description" style={{ marginBottom: '0px' }}>
                        <li>High: Critical importance for autistic users.</li>
                        <li>Medium: Issue(s) causing difficulty but not preventing the completion of core tasks.</li>
                        <li>Low: issue(s) being considered minor issues.</li>
                    </ul>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Key Findings & Insights</p>
                <ul className="list-disc list-inside project__text">
                    <li>The 10 most severe accessibility violations were all ranked as being High in severity.</li>
                    <li>More than half of the most severe WCAG violations made the website incomplete for screen-reader users, indicating an inaccessible experience for users with vision impairments.</li>
                    <li>The most severe Autism Accessibility violations rendered the website overwhelming and uncontrollable for users with autism.</li>
                    <li>Solutions to fix each of the 10 most severe accessibility violations were provided and described, with most solutions being simple and quick to implement.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Outcomes & Deliverables</p>
                <p className="project__text">A comprehensive accessibility report containing:</p>
                <ul className="list-disc list-inside project__text">
                    <li>An executive summary.</li>
                    <li>The 10 most severe accessibility violations along with the guidelines violated.</li>
                    <li>Explanation for why each violation is significant.</li>
                    <li>Redesign suggestions to improve violations.</li>
                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">What I Learned</p>
                <ul className="list-disc list-inside project__text">
                    <li>I became proficient in WCAG and the Autism Accessibility Guidelines, allowing me to:</li>
                    <ul className="list-disc list-inside ml-8 project__description" style={{ marginBottom: '0px' }}>
                        <li>Design more inclusive experiences.</li>
                        <li>Spot and correct accessibility violations in software.</li>
                    </ul>
                    <li>I gained expertise in checking websites with Assistive technology and semantic HTML.</li>
                    <li>I gathered a strong understanding of diverse needs, especially how to design for users with differing needs; visual impairments, cognitive disabilities, autism, motor disabilities, hearing impairments, etc.</li>
                </ul>
            </div>
            <ProjectDivider />
            <p className="project__heading--medium">Full report available upon request.</p>
        </div>
    );
};

export default Refuge;  