"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { FormEvent, useState } from "react";

interface createTaskForm {
  handleClose: () => void;
}

const CreateTaskForm: React.FC<createTaskForm> = ({ handleClose }) => {
  const [boardName, setBoardName] = useState<string>("");
  const [formValidation, setFormValidation] = useState({
    name: false,
  });
  // close and reset form values
  const handleCanCel = (e: FormEvent): void => {
    e.preventDefault();
    setBoardName("");
    handleClose();
  };

  // create a kanban board
  const handleCreate = (e: FormEvent): void => {
    e.preventDefault();
    setFormValidation((prev) => ({
      name: false,
      desc: false,
    }));
    try {
      if (!boardName) {
        setFormValidation((prev) => ({ ...prev, name: true }));
      }
    } catch (error) {}
  };

  return (
    <div className="w-96">
      <div className="flex items-center justify-between mb-3">
        <h3 className=" font-medium ">Create Task</h3>
        <XMarkIcon
          onClick={handleClose}
          className="w-4 hover:text-red-600 cursor-pointer transition duration-300"
        />
      </div>
      <form className="flex flex-col gap-2">
        <div>
          <label htmlFor="Kanban" className="text-xs">
            Task name
          </label>{" "}
          <br />
          <input
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            className="w-full text-xs p-2 bg-gray-100 outline-none rounded-md"
            placeholder="Task name"
          />
          {formValidation.name && (
            <span className="text-red-600 text-xs">
              Board name is required{" "}
            </span>
          )}
        </div>
        <div className="flex text-center gap-2">
          <button
            onClick={handleCreate}
            className="text-center flex-1 bg-black border border-black hover:bg-gray-800 text-white text-xs py-2 rounded-md px-5 font-medium"
          >
            Create
          </button>
          <button
            onClick={handleCanCel}
            className="text-center flex-1 bg-transparent border border-black hover:border-gray-700 text-black hover:text-gray-700 text-xs py-2 rounded-md px-5 font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
