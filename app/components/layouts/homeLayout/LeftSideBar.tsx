"use client";
import {
  Cog8ToothIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

interface triggersArray {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref">
  >;
  title: string;
  trigger: string;
  navigate: string;
}

const LeftSideBar: React.FC = () => {
  const [active, setActive] = useState<string>("boards");
  const triggersArray: triggersArray[] = [
    {
      title: "Board",
      icon: Squares2X2Icon,
      trigger: "boards",
      navigate: "/home",
    },
    {
      title: "Highlights",
      icon: StarIcon,
      trigger: "highlights",
      navigate: "/home/highlights",
    },
    {
      title: "Settings",
      icon: Cog8ToothIcon,
      trigger: "settings",
      navigate: "/home/settings",
    },
  ];
  return (
    <div className="w-64 border-r h-full">
      <div className="logo text-lg font-semibold text-center h-14 border-b leading-none flex items-center justify-center">
        <span>KanBan.</span>
      </div>
      <div className="p-5 flex flex-col gap-10">
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
        <div>
          <ul className="space-y-2">
            {triggersArray.map((item) => {
              return (
                <div onClick={() => setActive(item.trigger)} key={item.trigger}>
                  <Link href={item.navigate}>
                    <li
                      className={`p-2 text-xs  rounded-md flex gap-2 ${
                        active === item.trigger
                          ? "bg-black text-white"
                          : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      } transition duration-300 cursor-pointer`}
                    >
                      <item.icon className="w-4" /> <span>{item.title}</span>
                    </li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
