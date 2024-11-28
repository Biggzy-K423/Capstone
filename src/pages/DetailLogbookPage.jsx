// Komponen React dengan TailwindCSS
import React, { useState } from "react";
import { Link, useParams } from "react-router";

export const DetailLogbookPage = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    namaDosen: "",
    target: "",
    rincian: "",
    kendala: "",
    output: "",
    buktiKegiatan: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      buktiKegiatan: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data: ", formData);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src="/File_dock_add_fill.svg"
          alt="Document Icon"
          className="mr-4 w-12"
        />
        <div>
          <p className="text-sm text-gray-500">Minggu {id}</p>
          <h2 className="font-semibold text-3xl">Pengumpulan Progress 1</h2>
        </div>
        <button className="ml-auto text-sm text-gray-500 px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
          Mark as Done
        </button>
      </div>
      <hr className="my-4" />

      {/* Timeline */}
      <div className="mb-6 text-sm text-gray-500">
        <p>Dimulai: Senin, 7 Oktober 2024, 12:00</p>
        <p>Tenggat: Jumat, 11 Oktober 2024, 12:00</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Nama Dosen
                </td>
                <td className="border border-gray-300 py-2">
                  <input
                    type="text"
                    name="namaDosen"
                    value={formData.namaDosen}
                    onChange={handleChange}
                    className="w-full border border-none rounded-md px-2 py-1 focus:outline-none"
                    placeholder="Wajib diisi"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Target
                </td>
                <td className="border border-gray-300 py-2">
                  <input
                    type="text"
                    name="target"
                    value={formData.target}
                    onChange={handleChange}
                    className="w-full border border-none rounded-md px-2 py-1 focus:outline-none"
                    placeholder="Wajib diisi"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Rincian Kegiatan
                </td>
                <td className="border border-gray-300 py-2">
                  <input
                    type="text"
                    name="rincian"
                    value={formData.rincian}
                    onChange={handleChange}
                    className="w-full border border-none rounded-md px-2 py-1 focus:outline-none"
                    placeholder="Wajib diisi"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Kendala
                </td>
                <td className="border border-gray-300 py-2">
                  <input
                    type="text"
                    name="kendala"
                    value={formData.kendala}
                    onChange={handleChange}
                    className="w-full border border-none rounded-md px-2 py-1 focus:outline-none"
                    placeholder="Wajib diisi"
                  />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Bukti Kegiatan
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  <label
                    htmlFor="file-input"
                    className="px-4 py-1 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
                  >
                    Pilih file
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {formData.buktiKegiatan && (
                    <p className="text-sm text-gray-600 mt-2">
                      File: {formData.buktiKegiatan.name}
                    </p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Output
                </td>
                <td className="border border-gray-300 py-2">
                  <input
                    type="text"
                    name="output"
                    value={formData.output}
                    onChange={handleChange}
                    className="w-full border border-none rounded-md px-2 py-1 focus:outline-none"
                    placeholder="Wajib diisi"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <Link
            className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600"
            to="/profile/logbook"
          >
            Kembali
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600"
          >
            Selesai
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailLogbookPage;