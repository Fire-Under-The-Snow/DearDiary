import React from "react";
import { CiLock } from "react-icons/ci";
const DiaryCard = () => {
  return (
    <div className=" bg-delektheme rounded-md gap-y-2 text-gray-400 flex flex-col items-center p-5">
      <div className="flex justify-between items-center w-full">
        <div>
          <CiLock className=" hover:text-yellow-400 transition" />
        </div>
        <div className=" transition hover:bg-green-700 bg-green-500 text-white text-xs px-3 font-bold rounded-xl py-1">
          Happy
        </div>
      </div>
      <p className=" hover:text-white text-start w-full  font-semibold transition">My College year</p>
      <p className=" text-xs text-gray-500">It as about the last day of my college</p>
      <button className=" bg-[#2e2e2e] text-sm px-4 py-1 rounded-md transition hover:text-gray-300">View</button>
    </div>
  );
};

export default DiaryCard;
