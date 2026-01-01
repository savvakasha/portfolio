const FormInput = ({ label, id, name, type = 'text', value, onChange, required = false }) => {
    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className="block text-left text-lg md:text-xl text-gray-900 mb-1"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border bg-transparent h-14"
                style={{ borderRadius: '10px', borderColor: '#3FA0A5' }}
                required={required}
            />
        </div>
    );
};

export default FormInput;

