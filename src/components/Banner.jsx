const Banner = ({ children }) => {
    return (
        <section className="flex pb-20 pt-64 " style={{ backgroundColor: '#F5EFEF' }}>
            <div className="container flex px-10">
                {children}
            </div>
        </section>
    );
};

export default Banner;