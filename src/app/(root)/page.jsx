import { FlipWords } from "@/components/ui/flip-words";

export default async function Home() {
  
  const words = ["Secure", "Community", "Healing", "Peace"];

  return (
    <div className=" bg-[#1C1C1C] w-10/12  h-delekheight flex justify-center items-center">
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
