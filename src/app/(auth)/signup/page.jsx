"use client"
import React, { useState } from 'react'

const Signup = () => {
  const [data,setData]=useState({
    username:"",
    email:"",
    password:""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  const checkit=()=>{
    console.log("i got click",data)
  }
  return (
    <div className='flex justify-center items-center w-full h-screen '>
     <div className=' flex-col'>
      <p className=''>
        Signup to DearDiary
      </p>
        <input type="text" name="username" onChange={handleChange} value={data.username} placeholder='Enter Username'  className='  outline-none '/>
        <input type="text" name="email" onChange={handleChange} value={data.email} placeholder='Enter Email'  className='  outline-none '/>
        <input type="text" name="password" onChange={handleChange} value={data.password} placeholder='Enter Password'  className='  outline-none '/>
        <button onClick={checkit}>Submit</button>
      </div>
    </div>
  )
}

export default Signup