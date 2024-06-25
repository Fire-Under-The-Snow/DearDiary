import { getSession, logout } from "@/lib/lib";
import React from "react";

import { AiOutlineMessage } from "react-icons/ai";

import { IoIosArrowRoundDown } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import Link from "next/link";
const Navbar = async () => {
  const session = await getSession();
  return (
    <div className="flex overflow-hidden bg-[#1F2022] text-white rounded-r-2xl w-full  ">
      <div className=" w-full ">
        <div className=" text-sm font-semibold flex justify-between items-center p-4">
          <p>#Dear Diary</p>
          <pre>Welcome {session?.user.username}</pre>
          <div className=" flex items-center gap-6">
            <Link href="/docs">
              <p className=' className=" border-2 p-2 rounded-lg border-[#E6E6E6] transition hover:text-gray-200 text-gray-500"'>
                Docs
              </p>
            </Link>
            <form
              action={async () => {
                "use server";
                await logout();
              }}
            >
              <button
                className=" border-2 p-2 rounded-lg bg-[#E6E6E6] transition hover:text-black text-gray-500"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// {
//   maindata.map((item,index)=>(
//     <div key={index} className=" mt-2 py-2 cursor-pointer rounded-md hover:bg-[#E6E6E6] transition flex justify-around text-lg items-center ml-2">
//   <div className=" flex gap-2 items-center">
//   <CiLock />
//   <p className=" text-purple-500 font-semibold">{item.name}</p>
//   </div>
//  <div>
//  {item.message}
//  </div>
// </div>
//   ))
// }
