const ProjectProcess = ({ steps }) => {
    return (
        <div className="flex flex-row items-start gap-2">
            {steps.map((step, index) => (
                <div className="flex flex-col items-start gap-2" key={index}>
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-20 h-20 rounded-full flex text-2xl items-center justify-center" style={{ border: '3px solid rgba(63, 160, 165, 0.5)' }}>{index + 1}</div>
                        {index < steps.length - 1 && <div className="text-4xl">→</div>}
                    </div>
                    <p className="project__description min-w-20 max-w-20 text-center">{step}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectProcess;