export const FileInput = ({ label, description }) => (
  <div>
    <label className="block font-bold text-lg">{label}</label>
    <p className="text-sm opacity-50 mb-4">{description}</p>
    <input
      type="file"
      accept=".pdf"
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
    />
  </div>
);
