"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => { 
   const router=useRouter()
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const checkit =async () => {
    try {
      const res=await axios.post("/api/signup",data)
      console.log("signup done",res.data)
      router.push("/signin")
    } catch (error) {
      console.log("error for signup",error.message)
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className=" flex-col">
        <p className="">Signup to DearDiary</p>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={data.username}
          placeholder="Enter Username here"
          className="  outline-none "
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="Enter Email"
          className="  outline-none "
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={data.password}
          placeholder="Enter Password"
          className="  outline-none "
        />
        <button onClick={checkit}>Submit</button>
      </div>
    </div>
  );
};

export default Signup;
