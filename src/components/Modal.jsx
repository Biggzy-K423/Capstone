export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  switchText,
  onSwitch,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
        {children}
        {onSwitch && (
          <div className="text-center mt-4">
            <p>
              {switchText.prefix}{" "}
              <button
                onClick={onSwitch}
                className="text-[#206EBB] font-semibold hover:underline"
              >
                {switchText.action}
              </button>
            </p>
          </div>
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
