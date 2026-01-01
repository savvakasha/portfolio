const ProjectImgContainer = ({ images, className }) => {
    return (
        <div className={`flex sm:flex-row flex-col gap-8 md:gap-16 mb-8 w-full align-center justify-center ${className}`}>
            {images.map((image, index) => (
                <img src={image} alt={`OutSmart ${index + 1}`} key={index} />
            ))}
        </div>
    );
};

export default ProjectImgContainer;