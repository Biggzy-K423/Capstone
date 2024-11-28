import React, { useState } from "react";
import { LabelInput } from "./ui/LabelInput";
import { ButtonFill } from "./ui/ButtonFill";

export const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    nim: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Contoh validasi sederhana
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value) ? "Email tidak valid" : "",
      }));
    }
  };

  const handleSubmit = (e) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Password salah");
      return;
    }
    onSubmit(formData);
    localStorage.setItem("isLoggedIn", true)
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        label="Nama lengkap"
        type="text"
        name="fullName"
        placeholder="Masukkan nama lengkap Anda"
        value={formData.fullname}
        onChange={handleChange}
        required
        error={errors.fullName}
      />
      <LabelInput
        label="Email"
        type="email"
        name="email"
        placeholder="Masukkan email Anda"
        value={formData.email}
        onChange={handleChange}
        required
        error={errors.email}
      />
      <LabelInput
        label="NIM"
        type="text"
        name="nim"
        placeholder="Masukkan NIM Anda"
        value={formData.nim}
        onChange={handleChange}
        required
        error={errors.nim}
      />
      <LabelInput
        label="Nomer Telepon"
        type="number"
        name="phoneNumber"
        placeholder="Masukkan nomer telepon Anda"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        error={errors.phoneNumber}
      />
      <LabelInput
        label="Password"
        type="password"
        name="password"
        placeholder="********"
        value={formData.password}
        onChange={handleChange}
        required
        error={errors.password}
      />
      <LabelInput
        label="Konfirmasi Password"
        type="confirmPassword"
        name="confirmPassword"
        placeholder="********"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        error={errors.confirmPassword}
      />
      <div className="mx-auto text-center">
        <ButtonFill text="Daftar" type="submit" />
      </div>
    </form>
  );
};
