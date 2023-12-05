"use client";
import React, { useState, ReactNode, MouseEvent } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface collabsibleProps {
  open?: boolean;
  title: string;
  children: ReactNode;
}

const Collabsible: React.FC<collabsibleProps> = ({
  open = true,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  // Function to toggle the dropdown state when the title is clicked
  const handleToggle = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Render the dropdown with title and toggle icon
  return (
    <div className="border-b">
      <div
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={handleToggle}
      >
        <h6 className="text-xs font-semibold">{title}</h6>
        {isOpen ? (
          <ChevronUpIcon className="w-3" />
        ) : (
          <ChevronDownIcon className="w-3" />
        )}
      </div>
      {isOpen && <div className="">{children}</div>}
    </div>
  );
};

export default Collabsible;
