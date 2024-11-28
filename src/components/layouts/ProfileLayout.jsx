import React from "react";
import { Outlet } from "react-router";
import { ProfileCard } from "../ProfileCard";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";

export const ProfileLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-6 flex lg:flex-row flex-col gap-8">
        <section className="lg:w-3/6 w-full flex flex-col gap-4">
          <ProfileCard
            name="Akbar Aditya Firmansyah"
            title="Mahasiswa"
            university="Universitas Jember"
          />
          <Sidebar />
        </section>
        <section className="bg-white w-full rounded-xl shadow-xl border">
          <main className="py-6 px-5">
            <Outlet />
          </main>
        </section>
      </div>
    </>
  );
};
