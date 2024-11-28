import React from "react";
import { data, Link } from "react-router";
import { OutlineButton } from "./ui/OutlineButton";

import { Modal } from "./Modal";
import useModal from "../hooks/useModal";

import { RegisterTopicForm } from "./RegisterTopicForm";

export const Card = ({ title, description }) => {
  const { openModal, closeModal, isLoginModalOpen } = useModal();

  const handleRegister = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <div className="shadow-2xl rounded-2xl w-80">
      <div className="px-6 py-8">
        <div className="mb-7 space-y-4">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p>{description}</p>
        </div>
        <OutlineButton text="Cari Posisi Topik" />
        <div className="text-[#206EBB] text-lg font-bold mt-9 space-y-1">
          <Link className="flex flex-row justify-between items-center">
            Tentang Topik <span className="text-2xl">&rarr;</span>
          </Link>
          <hr />
          <Link
            onClick={() => openModal("login")}
            className="flex flex-row justify-between items-center"
          >
            Daftar <span className="text-2xl">&rarr;</span>
          </Link>
        </div>
      </div>

      <Modal isOpen={isLoginModalOpen} onClose={closeModal} title="Daftar">
        <RegisterTopicForm onSubmit={handleRegister} />
      </Modal>
    </div>
  );
};
