const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full max-w-80 h-14 px-8 py-3 rounded-full transition-colors shadow-xl bg-transparent text-[#358489] border border-[#2B6669] hover:bg-[#3FA0A5] hover:text-white hover:border-[#3FA0A5]"
        >
            {children}
        </button>
    );
};

export default Button;