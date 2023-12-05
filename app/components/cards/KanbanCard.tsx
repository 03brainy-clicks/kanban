import { EllipsisVerticalIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

interface kanbanCardProps {
  title: string;
  desc: string;
  kanban_id: string;
}

const KanbanCard: React.FC<kanbanCardProps> = ({ title, desc, kanban_id }) => {
  return (
    <div className="p-3 rounded-md bg-white shadow-md ">
      <div className=" h-24 bg-kanban-card rounded-md text-white p-3 relative">
        <span className="absolute top-3 left-3 cursor-pointer">
          <StarIcon className="w-4" />
        </span>{" "}
        <span className="absolute top-3 right-3 cursor-pointer">
          <EllipsisVerticalIcon className="w-4" />
        </span>
      </div>
      <div className="mt-3">
        <h5 className="text-sm font-medium">{title}</h5>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default KanbanCard;
