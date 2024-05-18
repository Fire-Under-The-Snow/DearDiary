import React from 'react'
import { GoPlus } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { FaCircleNodes } from "react-icons/fa6";
import { MdNotes } from "react-icons/md";
import Link from 'next/link';
const Leftpanel = () => {
    const data = [
        "Core Projects",
        "Reflect Landing Page",
        "Reflect Master plan",
        "Reflect roadmap",
        "Reflect spring planning",
        "Top in mind",
      ];
  return (
    <div className="flex-2 rounded-l-2xl bg-[#1F2022] p-2 h-full w-72">
    <div className=" flex justify-between">
      <div className=" flex space-x-1">
        <div className=" bg-red-500 rounded-full h-5 w-5" />
        <div className=" bg-yellow-500 rounded-full h-5 w-5" />
        <div className=" bg-green-500 rounded-full h-5 w-5" />
      </div>
      <div className=" bg-[#68696A] rounded-full flex items-center justify-center text-lg h-6 w-6">
        <GoPlus />
      </div>
    </div>
    <div className=" mt-4 flex gap-2 items-center w-full bg-[#68696A] rounded-md text-md text-gray-400 px-2 py-1">
      <IoMdSearch />
      search
    </div>
    <div className=" mt-4">
    <Link href="/Dairy">
      <div className=" flex hover:bg-slate-50 transition p-2 rounded-md items-center gap-1 text-md cursor-pointer font-medium text-gray-500">
        <MdOutlineEditNote />
        Daily notes
      </div>
      </Link>
      <Link href="/About">
     
      <div className=" flex hover:bg-slate-50 transition p-2 rounded-md items-center gap-1 text-md cursor-pointer font-medium text-gray-500">
        <MdNotes />
        Quote of the Day
      </div>
      </Link>
      <Link href="/">
      
      <div className=" flex hover:bg-slate-50 transition p-2 rounded-md items-center gap-1 text-md cursor-pointer font-medium text-gray-500">
        <FaCircleNodes />
        Brains
      </div>
      </Link>
    </div>

    <p className="ml-2 text-white font-semibold mt-10 text-lg ">PINNED NOTES</p>
    <div className=" mt-4 space-y-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center ml-2 gap-1 text-md cursor-pointer font-medium text-gray-400"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
  )
}

export default Leftpanel