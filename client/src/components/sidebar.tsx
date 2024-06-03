"use client";

import SideTab from "./side-tab";
import { FaRegFilePowerpoint } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="h-full w-80 bg-black border-r border-r-[#2B2B2B] text-white">
      <header className="p-10">
        <div className="flex gap-3">
          <div className="w-3 h-3 rounded-full bg-[#712E9A]" />
          <div className="w-3 h-3 rounded-full bg-[#EC6762]" />
          <div className="w-3 h-3 rounded-full bg-[#F5C05F]" />
        </div>
        <div className="text-3xl">T R I N K A</div>
      </header>
      <nav className="pl-3 flex flex-col gap-4">
        <h1 className="px-7 text-lg">Start Here</h1>
        <SideTab
          icon={FaRegFilePowerpoint}
          text="Plagiarism Checker"
          href="/plagiarism-checker"
        />
        <SideTab
          icon={FaRegFilePowerpoint}
          text="Grammar Checker"
          href="/grammar-checker"
        />
      </nav>
    </div>
  );
}
