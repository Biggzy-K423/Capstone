export const LabelSelect = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  error = "",
  className = "",
  labelClassName = "",
  selectClassName = "",
  options = [],
}) => {
  return (
    <div className={`my-5 space-y-3 ${className}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${labelClassName}`}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-2 py-2 border rounded-md focus:outline-blue-500 
              ${error ? "border-red-500" : "border-gray-300"}
              ${selectClassName}`}
        required={required}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
