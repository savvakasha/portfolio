const Banner = ({ children, className }) => {
    return (
        <section className={`flex pb-10 md:pb-20 pt-14 md:pt-48 ${className}`} style={{ backgroundColor: '#F5EFEF' }}>
            <div className="container md:flex px-6 md:px-10 items-center justify-around">
                {children}
            </div>
        </section>
    );
};

export default Banner;
