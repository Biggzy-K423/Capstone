export const LabelInput = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  error = "",
  className = "",
  labelClassName = "",
  inputClassName = "",
}) => {
  return (
    <div className={`my-5 space-y-3 ${className}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-blue-500 
            ${error ? "border-red-500" : "border-gray-300"}
            ${inputClassName}`}
        required={required}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
