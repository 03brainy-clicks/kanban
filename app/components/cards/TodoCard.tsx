import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { GripIcon } from "@/public/icons";

interface todoCardProps {
  title: string;
  desc?: string;
  priority?: "High" | "Medium" | "Low";
  id: UniqueIdentifier;
}

const TodoCard: React.FC<todoCardProps> = ({ title, desc, priority, id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });

  const handlePriority = (priority: string = "Low"): React.JSX.Element => {
    switch (priority) {
      case "High": {
        return (
          <span className="text-[10px] px-1 bg-red-50 border border-red-600 text-red-600 rounded-md">
            {priority}
          </span>
        );
      }
      case "Medium": {
        return (
          <span className="text-[10px] px-1 bg-yellow-50 border border-yellow-600 text-yellow-600 rounded-md">
            {priority}
          </span>
        );
      }
      case "Low": {
        return (
          <span className="text-[10px] px-1 bg-green-50 border border-green-600 text-green-600 rounded-md">
            {priority}
          </span>
        );
      }
      default: {
        return (
          <span className="text-[10px] p-1 bg-gray-50 border border-white text-white rounded-md">
            {priority}
          </span>
        );
      }
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "w-full p-2 rounded-md border flex flex-col gap-2",
        isDragging && "opacity-50"
      )}
    >
      <div className="flex items-center gap-2">
        <div {...listeners}>
          <Image
            src={GripIcon}
            alt="Grip icon"
            className="w-2 md:block hidden"
          />
        </div>
        <h6 className="text-sm font-medium ">{title}</h6>
        <div className="flex gap-1 items-center ml-auto">
          {handlePriority(priority)}
          <EllipsisVerticalIcon className="w-4 cursor-pointer" />
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-1 line-clamp-2">{desc}</div>
    </div>
  );
};

export default TodoCard;
