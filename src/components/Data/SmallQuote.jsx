"use client";
import { motion } from "framer-motion";
import React from "react";
import { IoClose } from "react-icons/io5";
import { deleteserver } from "@/action/action";
const SmallQuote = ({ post, id }) => {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={{
          top: -200,
          right: 400,
          bottom: 100,
          left: -400,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className=" hover:cursor-crosshair border-[1px] transition hover:text-gray-300 p-4 rounded-md z-20 w-full bg-[#1F2022] flex items-center justify-between">
          {post.quote}
          <form action={deleteserver}>
            <input type="hidden" name="id" value={id} />
            <button
              type="submit"
              className=" hover:cursor-pointer p-2 hover:bg-red-500 transition rounded-md"
            >
              <IoClose />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SmallQuote;
