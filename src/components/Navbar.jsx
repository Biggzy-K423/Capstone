import { NavLink, useNavigate } from "react-router";
import useModal from "../hooks/useModal";

import { Button } from "./ui/Button";
import { ProfileButton } from "./ui/ProfileButton";
import { Modal } from "./Modal";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import useAuth from "../hooks/useAuth";

export const Navbar = () => {
  const isLoggedIn = useAuth();
  const navigate = useNavigate()

  const { openModal, closeModal, isLoginModalOpen, isRegisterModalOpen } =
    useModal();

  const handleLogin = (credentials) => {
    console.log("Login:", credentials);
    closeModal();
    navigate("/topik")
  };

  const handleRegister = (credentials) => {
    console.log("Register: ", credentials);
    closeModal();
    navigate("/topik")
  };
  return (
    <>
      <div className="w-full bg-[#273B4A]">
        <div className="max-w-[1440px] m-auto px-6 py-10">
          <nav className="flex flex-row justify-between items-center">
            <img src="/logo.svg" alt="Logo Capstone" className="hidden lg:block" />
            {isLoggedIn ? (
              <>
                <div className="md:flex flex-row font-semibold text-xl gap-8 hidden">
                  {["Beranda", "Topik", "Bantuan", "Notifikasi"].map((item) => (
                    <NavLink
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive ? "text-[#206EBB]" : "text-white"
                      }
                    >
                      {item}
                    </NavLink>
                  ))}
                </div>
                <ProfileButton />
              </>
            ) : (
              <Button
                text="Masuk ke Akun"
                onClick={() => openModal("login")}
                className="hidden md:block"
              />
            )}
          </nav>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="w-full bg-white">
          <div className="max-w-6xl m-auto px-6 py-10">
            <div className="flex flex-row justify-between items-center font-semibold text-2xl">
              {["Beranda", "Topik", "Bantuan"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-[#206EBB]" : "text-black"
                  }
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal Login*/}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={closeModal}
        title="Masuk"
        switchText={{
          prefix: "Belum punya akun?",
          action: "Daftar",
        }}
        onSwitch={() => openModal("register")}
      >
        <LoginForm onSubmit={handleLogin} />
      </Modal>

      {/* Modal Register */}
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={closeModal}
        title="Daftar"
        switchText={{
          prefix: "Sudah punya akun?",
          action: "Masuk",
        }}
        onSwitch={() => openModal("login")}
      >
        <RegisterForm onSubmit={handleRegister} />
      </Modal>
    </>
  );
};
