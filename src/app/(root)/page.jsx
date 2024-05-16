
import { AiOutlineMessage } from "react-icons/ai";

import { IoIosArrowRoundDown } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { getSession, logout } from "@/lib/lib";
export default async function Home() {
  const session = await getSession();
  console.log(session)
 
  const maindata=[{
    name :"Tenzin Delek",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    name :"Tenzin Aryan",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },{
    name :"Tenzin Tsamphel",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },{
    name :"Tenzin Yarphel",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },{
    name :"Tenzin Sherab",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    name :"Tenzin Sherab",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    name :"Tenzin Sherab",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    name :"Tenzin Delek",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  
]
  return (
    <>
    <div className="flex overflow-hidden bg-white h-screen text-black rounded-r-2xl w-full  ">
      {/* leftpanel */}
     
      <div className=" w-full ">
          <div className=" text-sm font-semibold flex justify-between items-center p-4">
            <p>#Dear Diary</p>
            <div className=" flex gap-1">
              <div className=" flex space-x-2 border-2 px-2 py-1 rounded-md"><AiOutlineMessage /><IoIosArrowRoundDown /></div>
              <div className=" flex space-x-2 border-2 px-2 py-1 text-gray-400 rounded-md text-md">All</div>
            </div>
          </div>
          <div className=" bg-[#f3f3f3] p-2 text-gray-500 text-lg flex justify-around items-center">
            <p>Author</p>
            <p>Snippet</p>
          </div>
          {
            maindata.map((item,index)=>(
              <div key={index} className=" mt-2 py-2 rounded-md hover:bg-[#E6E6E6] transition flex justify-around text-lg items-center ml-2">
            <div className=" flex gap-2 items-center">
            <CiLock />
            <p className=" text-purple-500 font-semibold">{item.name}</p>
            </div>
           <div>
           {item.message}
           </div>
          </div>
            ))
          }
          <div></div>

      </div>
    </div>
    </>
    
  );
}
{/* <p>tenzin</p>
      <pre>Welcome {session?.user.username}</pre>
      <form
        action={async () => {
          "use server";
          await logout();
        }}
      >
        <button type="submit">Logout</button>
      </form> */}