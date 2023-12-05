"use client";

import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { ReactNode, useState } from "react";
import { TodoCard } from ".";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { Modal } from "../utills";
import CreateTaskForm from "../forms/CreateTaskForm";
import Image from "next/image";
import { GripIcon } from "@/public/icons";

interface boardCardProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  title?: string;
  description?: string;
  onAddItem?: () => void;
}

const BoardCard: React.FC<boardCardProps> = ({
  id,
  title,
  description,
  onAddItem,
  children,
}) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "w-[500px] rounded-md bg-white shadow-md",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex items-center  border-b p-3 rounded-t-md gap-2">
        <div {...listeners}>
          <Image
            src={GripIcon}
            alt="Grip icon"
            className="w-3 md:block hidden"
          />
        </div>
        <h2 className="font-semibold">{title}</h2>
        <EllipsisVerticalIcon className="w-4 cursor-pointer ml-auto" />
      </div>
      <div className="p-3">
        <div>
          <button className=" w-full bg-black hover:bg-gray-800 text-white text-xs py-2 rounded-md font-medium flex items-center justify-center gap-1 cursor-pointer">
            <PlusIcon className="w-4" />
            <span>Add a card</span>
          </button>
          <Modal isOpen={isOpen} onClose={handleModal}>
            <CreateTaskForm handleClose={handleModal} />
          </Modal>
        </div>
        <div className="pt-3 flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};

export default BoardCard;
