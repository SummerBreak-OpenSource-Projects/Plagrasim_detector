"use client"

import { useState } from "react";
import Features_Tab from "./Features_Tab";

const Sidebar = () => {
  const [sideBarWidth , setSidebarWidth ] =  useState(208);
  
  function handleMouseButton(e:any) {
    const newWidth = e.clientX;
    if(newWidth>100 && newWidth <600){
      setSidebarWidth(newWidth);
    }
  };


  const handleMouseUp = () => {
    document.removeEventListener('mousemove',handleMouseButton);
    document.removeEventListener('mouseup', handleMouseUp);
  }


  return (
    <div className="w-52 h-screen border-solid border-r-2 border-red-100" style={{width:sideBarWidth}}>
      <div className="flex-col m-5">
        {/* logo */}
        <div className="mb-5 flex-col items-center">
          <img src="plag_master.png" />
          <h1 className="text-white">P L A G - M A S T E R</h1>
        </div>
        <h1 className="text-white mb-5"> Start Here</h1>
        <Features_Tab text="Plagrism Check" />
        <Features_Tab text="Research Check" />
      </div>
    </div>
  );
};

export default Sidebar;
