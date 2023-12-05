import React from "react";
import { KanbanCard } from "../components/cards";
import { FunnelIcon } from "@heroicons/react/24/outline";

const Page: React.FC = () => {
  return (
    <div className="p-5 space-y-10">
      <div className="bg-boards rounded-md h-64 overflow-hidden"></div>
      <div>
        <div className="flex justify-between items-center">
          <h5 className="font-medium ">All Boards</h5>
          <div>
            <button className="bg-black hover:bg-gray-800 text-white text-xs py-2 rounded-md px-5 font-medium flex gap-1">
              <FunnelIcon className="w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-7">
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
        </div>
      </div>
    </div>
  );
};

export default Page;
