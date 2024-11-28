import { NavLink } from "react-router";

export const SidebarLink = ({ to, icon, label, alt, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 py-2 px-4 rounded-lg ${
          isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
        }`
      }
      end={to === "/profile"}
    >
      <img src={icon} alt={alt} className="w-6 h-6" />
      <span>{label}</span>
    </NavLink>
  );
};