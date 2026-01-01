import ProjectShortIntro from '../../components/projects/ProjectShortIntro';
import ProjectDivider from '../../components/projects/ProjectDivider';
import ProjectImgContainer from '../../components/projects/ProjectImgContainer';
import nyc01 from '../../assets/images/nyc/01.png';
import nyc02 from '../../assets/images/nyc/02.png';
import nyc03 from '../../assets/images/nyc/03.png';
import nyc04 from '../../assets/images/nyc/04.png';
import nyc05 from '../../assets/images/nyc/05.png';

const NYC = () => {
    return (
        <div className="container text-left">
            <h1 className="project__title text-center mt-28">New York City Tourism Website</h1>
            <ProjectShortIntro
                type="Information Architecture, UX Design, UX Research"
                timeline="October – December 2023"
            />
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Project Overview</p>
                <p className="project__text">The aim of this project was to demonstrate, design, and evaluate the information architecture of a website on a topic of my choice. This website was designed for first-time visitors of New York City, offering essential tourism information. I envisioned users utilising the site to gather all necessary information before and during their travel to NYC.</p>
                <p className="project__text">The project overall focused on the architecture of informational content through expert interviews, a comprehensive domain map, site map, user journey, wireframes, and subsequent usability tests of such wireframes.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">My Role</p>
                <p className="project__heading--medium">Lead User Researcher, Lead Information Architect, and Lead Designer</p>
                <p className="project__text">I led the planning, designing, and evaluation of the website from the exploratory research to the evaluation of the final wireframes. This included a focus on information architecture, the creation of a site map, domain map, and a user journey.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Methods Used</p>
                <p className="project__heading--small">1. Expert interviews</p>
                <p className="project__text">Interviews with New York City experts were conducted to gather a thorough understanding of the key aspects of the city, which were integral to include in the tourism website.</p>
                <p className="project__text">Interviews were semi-structured to encourage exploration, while having the conversation remain focused.</p>
                <p className="project__heading--small">2. Domain map</p>
                <p className="project__text">The interview findings were represented in a Value Proposition Structure, to express how concepts in the main domain (New York City) connect to one another.</p>
                <p className="project__text">The important entities are topics that all domain experts, not only mentioned, but returned to multiple times during their interviews.</p>
                <p className="project__text">Entities on the model are topics that were mentioned by all experts, but were only discussed once during the interviews, indicating less significance than the important entities, but significance nonetheless.</p>
                <ProjectImgContainer images={[nyc01]} alt="NYC Domain Map" />
                <p className="project__heading--small">3. Card Sorting</p>
                <p className="project__text">An open card sort was performed to gather insights into how entities from the domain map could be organized in a site map.</p>
                <p className="project__text">Participants were encouraged to organize the entities into groups and label the groups.</p>
                <p className="project__text">After conducting an open card sort, I was encouraged to be more detailed in the site’s topic pages and add more content in the “transportation” section of the site.</p>
                <p className="project__text">A “Residents of NYC” section and its components were repeatedly organised incorrectly in the open card sort, confirming that participants felt these components felt out of place compared to the rest of the content.</p>
                <p className="project__heading--small">4. Site Map</p>
                <p className="project__text">In creating my site map, I developed a set beginning point and a clear hierarchy for the site pages.</p>
                <p className="project__text">I kept the labels in consistent vocabulary and phrasing styles. If a term or phrase was used in one part of the site map, the same term or phrase refers to the same things in other parts of the site map.</p>
                <p className="project__text">Using consistent language provides users with the knowledge that these components are the same.</p>
                <p className="project__text">Components in the site map were organized into global topics, topic pages, page content, and search and filter options.</p>
                <ProjectImgContainer images={[nyc02]} alt="NYC Site Map" />
                <p className="project__heading--small">5. Tree Testing</p>
                <p className="project__text">I conducted a tree test using the site map I created to evaluate the site’s information architecture and check that users can easily find information by the structure and labels of the navigation menu.</p>
                <p className="project__text">The results were supp  ortive of the navigation as all of the participants scored perfect or near-perfect results.</p>
                <p className="project__heading--small">6. User Journey</p>
                <p className="project__text">NYC having more to offer than just venues for tourists came up constantly while doing user research. It seemed that many people visiting NYC desired to see the “real” New York City, or rather, have a NYC experience that is closer to what the residents have daily.</p>
                <p className="project__text">User journeys are used to help create sites that mirror users’ needs, it was vital for the goal to incorporate this need.</p>
                <p className="project__text">Since it is important to have multiple ways for the user to complete the goal, there are a total of 4 different ways in the case of this user journey.</p>
                <p className="project__text">This was done intentionally, demonstrating both browsing and filtered searching options on the site.</p>
                <ProjectImgContainer images={[nyc03]} alt="NYC User Journey" />
                <p className="project__heading--small">7. Wireframes</p>
                <p className="project__text">To show how I wanted pages to look and what I wanted to include on the site I created 4 wireframes.</p>
                <p className="project__text">These wireframes included an interior view feature page, a notable neighborhood search page, a subway route content page, and a food type content page.</p>
                <p className="project__text">All wireframes display a global navigation bar, with the relevant section shadowed in.</p>
                <p className="project__text">The navigation bar is horizontal since the amount of global topics can fit across the top of the site and they are unlikely to change in the future as content gets added.</p>
                <p className="project__text">The wireframes contain breadcrumbs to give users a more comprehensive understanding of where each page is inside of the website.</p>
                <p className="project__text">I included the footer in all the wireframes to show that it is a static feature across all pages on the site.</p>
                <ProjectImgContainer images={[nyc04]} alt="NYC Wireframes" />
                <ProjectImgContainer images={[nyc05]} alt="NYC Wireframes" />
                <p className="project__heading--small">8. Usability Testing</p>
                <p className="project__text">The wireframes were evaluated by 3 potential users through remote and in-person usability testing, focused on the information architecture of the pages.</p>
                <p className="project__text">Information architecture-focused usability testing was chosen since it gave insight into how the participants navigate these pages while granting the opportunity to delve into their choices by asking “why” questions during findability tasks.</p>
                <p className="project__text">I was able to understand how comfortable users are while trying to find and search for information on the site.</p>
                <p className="project__text">The wireframes were subsequently edited based on these findings.</p>

            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Key Findings & Insights</p>
                <ul className='list-disc list-inside project__text'>
                    <li>From the expert interviews, the “energy” of New York City was noted several times, highlighting its importance. However, I learned from user feedback that tourists to NYC might think that word refers to electricity. The word had to be clarified throughout the project to mean “busyness”.</li>
                    <li>Although an important aspect of the domain map, information about NYC residents was found to be irrelevant to new users based on the results from the card sort and was replaced by a “Hidden Gems” and a “Budget Friendly” section.</li>
                    <li>Based on user research, I found that many tourists sought after the “real” New York City, or rather, having a NYC experience that is closer to what the residents have daily. They are looking for more than just “tourist attractions”.</li>
                    <li>From the usability tests, I found that users valued specificity especially when evaluating wireframes with filtered searches and sorting options.</li>
                    <ul className='list-disc list-inside ml-8 project__text'>
                        <li>Users also wanted more details on the informational wireframes for things like opening hours and train route types.</li>
                        <li>Users also provided guidance on verbiage, noting titles of pages that were unclear.</li>
                    </ul>

                </ul>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">Outcomes & Deliverables</p>
                <p className="project__heading--small">Site map</p>
                <p className="project__text">The site map contained 5 global topics, 21 topic pages, and 72 content pages displayed hierarchically. It also contained the search and filter options on the site.</p>
                <p className="project__heading--small">User Journey</p>
                <p className="project__text">The user journey was designed based on the goal of a tourist in NYC wanting to have a family outing in Brooklyn, while avoiding popular tourist spots, preferring to interact with locals. The user journey displays 4 different ways a user could accomplish this goal on the website. The user journey includes the user's actions, the user’s thoughts, the filter options on the site, and the site pages the user is on in each step.</p>
                <p className="project__heading--small">Domain Map</p>
                <p className="project__text">The domain map displays all of the important aspects of the site’s topic, New York City, and how these aspects connect with one another.</p>
                <p className="project__text">The domain map contains Main entities, important entities, entities, and specific examples of entities.</p>
                <p className="project__heading--small">Wireframes</p>
                <p className="project__text">Four wireframes were created to show how the websites pages were set to look and the information they contained.</p>
                <p className="project__text">These wireframes included: An interior view feature page A notable neighborhood search page A subway route content page A food type content page.</p>
                <p className="project__heading--small">Report</p>
                <p className="project__text">The report details the entire process of the project from the introduction of the website’s topic to the findings from the usability tests done on the wireframes.</p>
            </div>
            <ProjectDivider />
            <div>
                <p className="project__subtitle">What I Learned</p>
                <ul className='list-disc list-inside project__text'>
                    <li>How to design information architecture for websites and apps that’s consistent and clear.</li>
                    <li>How to properly conduct card sorting and tree testing with users.</li>
                    <li>The importance of user-friendly and straightforward navigation.</li>
                    <li>How to create a comprehensive site map.</li>
                    <li>The importance of evaluating wireframes before development</li>
                </ul>
            </div>
            <ProjectDivider />
            <p className="project__heading--medium">Full report available upon request.</p>
        </div>
    );
};

export default NYC; 