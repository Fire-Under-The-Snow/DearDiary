import React from 'react'
import { IoSend } from "react-icons/io5";
const Searchinput = () => {
  return (
    <div className='  w-96 flex items-center  bg-[#1F2022] justify-around rounded-md '>
        <input className=' w-64  bg-[#1F2022] px-2 py-4 text-sm text-white outline-none' type="text" placeholder='Enter your Quote' />
        <IoSend className=' hover:text-white transition ' />
    </div>
  )
}

export default Searchinput