import Searchinput from "../../../components/searchinput/Searchinput";
import React from "react";
import Data from "../../../components/Data/Data";
import { FlipWords1 } from "../../../components/ui/flip-words";
const About = () => {
  const words = ["Secure", "Community", "Healing", "Peace"];
  return (
    <div className="bg-[#1C1C1C] relative w-[90%] h-delekheight flex justify-center items-center">
      <div className="text-xl mx-auto text-neutral-400">
        For
        <FlipWords1 words={words} /> <br />
        <div className="text-sm">
          Write with Dear Diary: A Project by Tenzin Delek
          <div className="absolute bottom-20 z-40">
            <Searchinput />
          </div>
        </div>
      </div>
      <div className="absolute z-10">
        <Data />
      </div>
    </div>
  );
};

export default About;
