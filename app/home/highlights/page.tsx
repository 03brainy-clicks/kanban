import React from "react";
import { KanbanCard } from "../../components/cards";

const Page: React.FC = () => {
  return (
    <div className="p-5 space-y-10">
      <div className="bg-highlights rounded-md h-64 ">
    
      </div>
      <div>
        <h5 className="font-medium ">Highlighted Boards</h5>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-7">
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
          <KanbanCard title="Kanban" kanban_id="1" desc="Kanban board" />
        </div>
      </div>
    </div>
  );
};

export default Page;
