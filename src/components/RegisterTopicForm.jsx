import React, { useState } from "react";
import { LabelInput } from "./ui/LabelInput";
import { LabelSelect } from "./ui/LabelSelect";
import { ButtonFill } from "./ui/ButtonFill";

const ROLE_OPTIONS = [
  { value: "database engineer", label: "Database Engineer" },
  { value: "api development", label: "API Development" },
  { value: "frontend development", label: "Front End Development" },
  { value: "ui/ux engineer", label: "UI / UX Engineer" },
  { value: "reporting", label: "Reporting" },
  {
    value: "augmented reality",
    label: "AR (Khusus topik pengenalan lingkungan kampus)",
  },
  {
    value: "virtual reality",
    label: "VR (Khusus topik pengenalan lingkungan kampus)",
  },
  {
    value: "game mobile",
    label: "Game Mobile (Khusus topik pengenalan lingkungan kampus)",
  },
  {
    value: "embedded system",
    label: "Embedded System (Khusus topik pengenalan lingkungan kampus)",
  },
];

const PRODI = [
  { value: "SI", label: "Sistem Informasi (SI)" },
  { value: "TI", label: "Teknologi Informasi (TI)" },
  { value: "IF", label: "Informatika (IF)" },
];

export const RegisterTopicForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    role1: "",
    role2: "",
    programStudi: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        label="Nama"
        type="text"
        name="name"
        placeholder="Masukkan nama Anda"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <LabelInput
        label="NIM"
        type="text"
        name="nim"
        placeholder="Masukkan nim Anda"
        value={formData.nim}
        onChange={handleChange}
        required
      />
      <LabelSelect
        label="Role 1"
        name="role1"
        placeholder="Pilih role pertama"
        options={ROLE_OPTIONS}
        value={formData.role1}
        onChange={handleChange}
      />
      <LabelSelect
        label="Role 2"
        name="role2"
        placeholder="Pilih role kedua"
        options={ROLE_OPTIONS}
        value={formData.role2}
        onChange={handleChange}
      />
      <LabelSelect
        label="Program Studi"
        name="programStudi"
        placeholder="Pilih program studi"
        options={PRODI}
        value={formData.programStudi}
        onChange={handleChange}
      />
      <LabelInput
        label="Nomer Whatsapp"
        type="text"
        name="phoneNumber"
        placeholder="Masukkan nomer telepon Anda"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      <div className="text-right">
        <ButtonFill text="Selesai" type="submit" />
      </div>
    </form>
  );
};
