const Banner = ({ children, className }) => {
    return (
        <section className={`flex pb-20 pt-64 ${className}`} style={{ backgroundColor: '#F5EFEF' }}>
            <div className="container flex px-10 items-center justify-around">
                {children}
            </div>
        </section>
    );
};

export default Banner;