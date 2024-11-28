import React from "react";
import { useNavigate } from "react-router";
import { SidebarLink } from "./ui/SidebarLink";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/beranda");
  };

  const SIDEBAR_LINKS = [
    {
      to: "/profile",
      icon: "/User_fill.svg",
      label: "Profil",
      alt: "User Logo",
    },
    {
      to: "/profile/lengkapi-dokumen",
      icon: "/File_dock_fill.svg",
      label: "Lengkapi Dokumen",
      alt: "File Logo",
    },
    {
      to: "/profile/ganti-sandi",
      icon: "/Lock_fill.svg",
      label: "Ganti Sandi",
      alt: "Lock Logo",
    },
    {
      to: "/profile/logbook",
      icon: "/Book_check.svg",
      label: "Logbook",
      alt: "Book Logo",
    },
    {
      to: "/beranda",
      icon: "/Sign_out_squre.svg",
      label: "Keluar",
      alt: "Sign Out Logo",
      onClick: handleLogout,
    },
  ];

  return (
    <div className="w-full bg-white shadow-xl rounded-xl border">
      <div className="py-6 px-4">
        {SIDEBAR_LINKS.map((link, index) => (
          <React.Fragment key={link.to}>
            <SidebarLink {...link} />
            {index < SIDEBAR_LINKS.length - 1 && <hr className="my-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
