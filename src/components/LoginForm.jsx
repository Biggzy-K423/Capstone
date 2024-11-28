import { useState } from "react";
import { LabelInput } from "./ui/LabelInput";
import { ButtonFill } from "./ui/ButtonFill";

export const LoginForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
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
    onSubmit(credentials);
    localStorage.setItem("isLoggedIn", true)
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        label="Alamat Email"
        type="email"
        name="email"
        placeholder="Masukkan email Anda"
        value={credentials.email}
        onChange={handleChange}
        required
        error={errors.email}
      />
      <LabelInput
        label="Kata Sandi"
        type="password"
        name="password"
        placeholder="Masukkan kata sandi"
        value={credentials.password}
        onChange={handleChange}
        required
        error={errors.password}
      />
      <div className="w-full mx-auto text-center">
        <ButtonFill text="Masuk" type="submit" />
      </div>
    </form>
  );
};
