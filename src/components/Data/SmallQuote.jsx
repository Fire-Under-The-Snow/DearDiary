'use client'
import { motion } from 'framer-motion'
import React from 'react'

const SmallQuote = ({post}) => {
  return (
    <div>
         <motion.div drag
                dragConstraints={{
                    top: -200,
                    right: 400,
                    bottom: 100,
                    left: -400,
                }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }} >
    <div className="hover:cursor-pointer border-[1px] transition hover:text-gray-300 p-4 rounded-md z-20 w-full bg-[#1F2022] flex items-center justify-center">
      {post.quote}
    </div>
  </motion.div></div>
  )
}

export default SmallQuote