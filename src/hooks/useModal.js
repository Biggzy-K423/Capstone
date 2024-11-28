import { useState } from "react";

const useModal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return {
    activeModal,
    openModal,
    closeModal,
    isLoginModalOpen: activeModal === "login",
    isRegisterModalOpen: activeModal === "register",
  };
};

export default useModal;