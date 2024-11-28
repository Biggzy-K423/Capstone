export const DescInput = ({label, description}) => {
  return (
    <div>
      <label className="block font-bold text-lg">{label}</label>
      <p className="text-sm opacity-50 mb-4">{description}</p>
      <input type="text" className="h-28 w-full border rounded-lg" />
    </div>
  );
};
