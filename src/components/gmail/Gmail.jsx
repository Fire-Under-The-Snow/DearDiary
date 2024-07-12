import React from "react";
import { GoPlus } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { FaCircleNodes } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotes } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";
import { CiLock } from "react-icons/ci";
const Gmaill = () => {
  const data = [
    "Core Projects",
    "Reflect Landing Page",
    "Reflect Master plan",
    "Reflect roadmap",
    "Reflect spring planning",
    "Top in mind",
  ];
  const maindata = [
    {
      name: "Tenzin Delek",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Aryan",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Tsamphel",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Yarphel",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Sherab",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Sherab",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Sherab",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: "Tenzin Delek",
      message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="flex overflow-hidden bottom-7 right-0 text-gray-500 rounded-l-2xl bg-[#1C1C1C] absolute w-[720px]  h-[540px] ">
      {/* leftpanel */}
      <div className="flex-2 rounded-l-2xl bg-[#1F2022] p-2 h-full w-40">
        <div className=" flex justify-between">
          <div className=" flex space-x-1">
            <div className=" bg-red-500 rounded-full h-3 w-3" />
            <div className=" bg-yellow-500 rounded-full h-3 w-3" />
            <div className=" bg-green-500 rounded-full h-3 w-3" />
          </div>
          <div className=" bg-[#1F2022] rounded-full flex items-center justify-center text-xs h-5 w-5">
            <GoPlus />
          </div>
        </div>
        <div className=" mt-4 flex gap-2 items-center w-full bg-[#68696A] rounded-md text-xs text-gray-400 px-2 py-1">
          <IoMdSearch />
          search
        </div>
        <div className=" mt-4">
          <div className=" flex hover:bg-slate-50 transition p-2 rounded-md items-center gap-1 text-xs cursor-pointer font-medium text-gray-500">
            <MdOutlineEditNote />
            Daily notes
          </div>
          <div className=" flex hover:bg-slate-50 transition p-2 rounded-md items-center gap-1 text-xs cursor-pointer font-medium text-gray-500">
            <MdNotes />
            Quote of the Day
          </div>
          <div className=" flex hover:bg-slate-50 transition p-2 rounded-md items-center gap-1 text-xs cursor-pointer font-medium text-gray-500">
            <FaCircleNodes />
            Brains
          </div>
        </div>

        <p className="ml-2 text-gray-700 font-semibold mt-2 text-[10px] ">
          PINNED NOTES
        </p>
        <div className=" mt-2 space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center ml-2 gap-1 text-[10px] cursor-pointer font-medium transition hover:text-white text-gray-400"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex-1">
        <div className=" text-sm font-semibold flex justify-between items-center p-4">
          <p>#Dear Diary</p>
          <div className=" flex gap-1">
            <div className=" flex space-x-2 border-[1px] items-center px-2 py-1 rounded-md">
              <AiOutlineMessage />
              <IoIosArrowRoundDown />
            </div>
            <div className=" flex space-x-2 border-[1px] px-2 py-1 font-normal text-gray-400 rounded-md text-xs">
              <p>All</p>
            </div>
          </div>
        </div>
        <div className=" bg-[#1F2022] p-2 text-gray-500 text-[10px] flex justify-around items-center">
          <p>Author</p>
          <p>Snippet</p>
        </div>
        {maindata.map((item, index) => (
          <div
            key={index}
            className=" mt-2 py-2 rounded-md hover:bg-[#1F2022] transition flex justify-around text-[10px] items-center ml-2"
          >
            <CiLock />
            <div className=" flex gap-2 justify-around  items-center">
              <p className=" text-blue-300 font-semibold">{item.name}</p>
            </div>
            <div>{item.message}</div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Gmaill;
