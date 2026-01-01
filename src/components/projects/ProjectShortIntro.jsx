const ProjectShortIntro = ({ type, role, deliverables, timeline }) => {
    return (
        <div className="flex md:flex-row flex-col gap-4 md:gap-16 self-center justify-self-center text-center">
            {type && <div>
                <p className="project__subtitle whitespace-nowrap">Project Type</p>
                <p className="project__heading--small">{type}</p>
            </div>}
            {role && <div>

                <p className="project__subtitle whitespace-nowrap">Role</p>
                <p className="project__heading--small">{role}</p>
            </div>}
            {deliverables && <div>

                <p className="project__subtitle whitespace-nowrap">Deliverables</p>
                <p className="project__heading--small">{deliverables}</p>
            </div>}
            {timeline && <div>

                <p className="project__subtitle whitespace-nowrap">Timeline</p>
                <p className="project__heading--small">{timeline}</p>
            </div>}
        </div>
    );
};

export default ProjectShortIntro;