import { LabelInput } from "../components/ui/LabelInput";

export const PasswordPage = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">Ganti Sandi</h1>
      <hr className="my-6" />
      <h2 className="font-semibold text-xl mt-8 mb-6">
        Silahkan ganti dengan yang baru
      </h2>
      <LabelInput
        label="Kata sandi sekarang"
        name="password"
        placeholder="********"
        labelClassName="font-bold text-lg"
      />
      <LabelInput
        label="Kata sandi baru"
        name="newPassword"
        placeholder="********"
        labelClassName="font-bold text-lg"
      />
      <LabelInput
        label="Konfirmasi sandi"
        name="newPasswordConfirmation"
        placeholder="********"
        labelClassName="font-bold text-lg"
      />
    </>
  );
};
