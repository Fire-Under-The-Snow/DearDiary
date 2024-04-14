"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => { 
   const router=useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading,setloading]=useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const checkit =async () => {
    try {
      setloading(true)
      const res=await axios.post("/api/signin",data)
      console.log("signin done",res.data)
      router.push("/")
    } catch (error) {
      console.log("error for signin",error.message)
    }
    finally{
      setloading(false)
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className=" flex-col">
        <p className="">Signin to DearDiary</p>
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
