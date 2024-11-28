import { useState } from "react";
import { Link } from "react-router";

export const LogbookPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const weeks = [
    { title: "Minggu 1", content: "Progress" },
    { title: "Minggu 2", content: "Progress" },
    { title: "Minggu 3", content: "Progress" },
    { title: "Minggu 4", content: "Progress" },
    { title: "Minggu 5", content: "Progress" },
    { title: "Minggu 6", content: "Progress" },
  ];

  return (
    <>
      <h1 className="font-semibold text-2xl">Logbook</h1>
      <hr className="my-6" />
      <div className="divide-y divide-gray-300">
        {weeks.map((week, index) => (
          <div key={index} className="py-2">
            <button
              className="flex gap-4 items-center w-full text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span>{openIndex === index ? "▾" : "▸"}</span>
              <span className="text-lg">{week.title}</span>
            </button>
            {openIndex === index && week.content && (
              <div className="mt-2 p-4 rounded-sm border-2 border-gray-200">
                <Link to={`/profile/logbook/${index+1}`} className="flex items-center">
                  <img
                    src="/File_dock_add_fill.svg"
                    alt="icon"
                    className="mr-2"
                  />
                  <span>{week.content}</span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
