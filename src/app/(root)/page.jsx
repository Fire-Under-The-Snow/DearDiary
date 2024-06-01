
import { CiLock } from "react-icons/ci";
import { getSession} from '@/lib/lib';
import { redirect } from 'next/navigation';
export default async function Home() {
  const session = await getSession();
  
  if(!session)
    {
      redirect("http://localhost:3000/signin"); 
    }
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

    <div className=" flex-1">
    
    <div className=" bg-[#1F2022] p-2 text-gray-500 text-[12px] flex justify-around items-center">
      <p>Author</p>
      <p>Snippet</p>
    </div>
    {
      maindata.map((item,index)=>(
        <div key={index} className=" cursor-pointer mt-2 py-2 rounded-md hover:bg-[#1F2022] transition flex justify-around text-[12px] items-center ml-2">
      <CiLock />
      <div className=" w-64 flex gap-2 justify-around  items-center">
      
      <p className=" text-blue-300 font-semibold">{item.name}</p>
      </div>
     <div>
     {item.message}
     </div>
    </div>
      ))
    }
    <div></div>

</div>
  );
}
