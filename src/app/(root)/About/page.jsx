'use client'
import { motion } from "framer-motion";
import React, { useRef } from 'react'
import { FlipWords } from "@/components/ui/flip-words";
import Searchinput from '@/components/searchinput/Searchinput';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/take", {next:{revalidate:3600}});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const About = async() => {
  const ref=useRef()
  const posts = await getData();
  const words = ["Secure", "Community", "Healing", "Peace"];
  return (
    <div ref={ref} className="  bg-[#1C1C1C] w-[90%] h-delekheight flex justify-center items-center">
    <div className="text-xl mx-auto  text-neutral-400">
    For
    <FlipWords words={words} /> <br />
    <div className=" text-sm">
    Write with Dear Diary: A Project by Tenzin Delek
    <div className= ' absolute bottom-20'>
    <Searchinput />
    </div>
    
      </div>
  </div>
  <div className=" absolute">
  {posts.map((post,index) => (
        <motion.div drag dragConstraints={ref}   key={index}>
          <div className=" hover:cursor-pointer border-[1px] transition hover:text-gray-300 p-4 rounded-md z-20 w-full bg-[#1F2022] flex items-center justify-center">
            {post.quote}
           </div>
        </motion.div>
      ))}
  </div>
</div>

  )
}

export default About