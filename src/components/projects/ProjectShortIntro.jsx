const ProjectShortIntro = ({ type, role, deliverables, timeline }) => {
    return (
        <div className="flex flex-row gap-16 self-center text-center">
            {type && <div>
                <p className="project__subtitle">Project Type</p>
                <p className="project__heading--small">{type}</p>
            </div>}
            {role && <div>

                <p className="project__subtitle">Role</p>
                <p className="project__heading--small">{role}</p>
            </div>}
            {deliverables && <div>

                <p className="project__subtitle">Deliverables</p>
                <p className="project__heading--small">{deliverables}</p>
            </div>}
            {timeline && <div>

                <p className="project__subtitle">Timeline</p>
                <p className="project__heading--small">{timeline}</p>
            </div>}
        </div>
    );
};

export default ProjectShortIntro;