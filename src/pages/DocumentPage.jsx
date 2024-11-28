import React from "react";
import { FileInput } from "../components/ui/FileInput";
import { DescInput } from "../components/ui/DescInput";

const inputs = [
  { label: "Curriculum Vitae", description: "Format PDF maksimal 2MB" },
  { label: "Transkrip Nilai", description: "Format PDF maksimal 2MB" },
];

export const DocumentPage = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">Lengkapi Dokumen</h1>
      <hr className="my-6" />
      <div className="space-y-6">
        {inputs.map((input, index) => (
          <React.Fragment key={index}>
            <FileInput label={input.label} description={input.description} />
            <hr />
          </React.Fragment>
        ))}
        <DescInput
          label="Drop Matakuliah"
          description="Tuliskan matakuliah yang ingin didrop"
        />
        <DescInput label="Jumlah Konversi" description="Maksimal 20 SKS" />
      </div>
    </>
  );
};
