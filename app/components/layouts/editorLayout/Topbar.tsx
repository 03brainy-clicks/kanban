"use client";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Modal } from "../../utills";
import { CreateListForm } from "../../forms";

const Topbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="border-b w-full h-14  flex items-center">
      <div className="logo text-lg font-semibold text-center px-5">
        <span>KanBan.</span>
      </div>
      <div className="flex gap-5 items-center ml-auto px-5">
        <button
          onClick={handleModal}
          className="bg-black cursor-pointer hover:bg-gray-800 text-white text-xs py-2 rounded-md px-5 font-medium flex gap-1"
        >
          <PlusIcon className="w-4" />
          <span>Add list</span>
        </button>
        <Modal isOpen={isOpen} onClose={handleModal}>
          <CreateListForm handleClose={handleModal} />
        </Modal>
        <div className="border-r h-8 border-gray-400"></div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <div className="mt-2">
            <h6 className="text-xs text-black font-medium leading-[1px]">
              Rahul Dasuja
            </h6>
            <span className="text-[10px] text-gray-700 leading-none">
              Rahul@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
