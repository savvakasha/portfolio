const ProjectImgContainer = ({ images, className }) => {
    return (
        <div className={`flex flex-row gap-16 mb-8 w-full align-center justify-center ${className}`}>
            {images.map((image, index) => (
                <img src={image} alt={`OutSmart ${index + 1}`} />
            ))}
        </div>
    );
};

export default ProjectImgContainer;