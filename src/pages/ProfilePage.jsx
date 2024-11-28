import React from "react";

export const ProfilePage = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">Edit Profile</h1>
      <hr className="my-6" />
      <div className="py-2">
        <div className="flex flex-row items-center gap-5 px-4">
          <img src="/User_circle.svg" alt="User Logo" />
          <h2 className="text-lg">Data Pribadi</h2>
        </div>
        <hr className="my-3" />
        <div className="flex flex-row items-center gap-5 px-4">
          <img src="/Home_fill.svg" alt="Home Logo" />
          <h2 className="text-lg">Kontak Pribadi</h2>
        </div>
        <hr className="my-3" />
        <div className="flex flex-row items-center gap-5 px-4">
          <img src="/mobile_fill.png" alt="Mobile Logo" />
          <h2 className="text-lg">Akun Sosial Media</h2>
        </div>
      </div>
    </>
  );
};
