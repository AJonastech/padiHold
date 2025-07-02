"use client";
import React from "react";

const Globe = () => {
  return (
    <div className="flex justify-center items-center ">
      <img
        src="/globe.svg"
        alt="Globe"
        className="w-full h-auto  scale-[180%] origin-top-left -translate-x-[20%] -translate-y-[20%] hover:animate-pulse"
      />
    </div>
  );
};

export default Globe;
