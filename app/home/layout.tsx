import React, { ReactNode } from "react";
import { Topbar, LeftSideBar } from "../components/layouts/homeLayout";

interface layoutProps {
  children: ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex  h-screen w-screen">
        <LeftSideBar />
        <div className="flex flex-col flex-1 ">
          <Topbar />
          <div className="w-full h-full overflow-y-auto ">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
