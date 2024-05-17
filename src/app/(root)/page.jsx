import { FlipWords } from "@/components/ui/flip-words";

export default async function Home() {
  
  const words = ["Secure", "Community", "Healing", "Peace"];
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
    <div className=" bg-[#1C1C1C] w-full h-delekheight flex justify-center items-center">
        <div className="text-4xl mx-auto  text-neutral-400">
        For
        <FlipWords words={words} /> <br />
        <div className=" text-lg">
        Write with Dear Diary: A Project by Tenzin Delek
          </div>
      </div>
    </div>

  );
}
