"use client";
import Gmail from "@/components/gmail/Gmail";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [errors, seterrors] = useState(false);
  const [loading, setloading] = useState(false);
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
  const checkit = async () => {
    try {
      setloading(true);
      const res = await axios.post("/api/signup", data);
      console.log("signup done", res.data);
      seterrors(false);
      router.push("/signin");
    } catch (error) {
      seterrors(true);
      console.log("error for signup", error.message);
    } finally {
      setloading(false);
    }
  };
  //to do (images and all)
  return (
    <div className=" text-white bg-black flex justify-center items-center w-full h-screen ">
      <div className=" flex-1  h-screen flex items-center justify-center border-2 border-black flex-col w-[720px]">
        <div className=" mb-4">
          <p className=" text-left font-bold text-4xl">DearDairy</p>
          <p className=" text-gray-300 text-sm">
            Welcome to the World of journal and healing
          </p>
        </div>
        <div className=" space-y-3 p-3 flex items-center justify-center border-2 border-black flex-col">
          <p className=" font-semibold text-sm">Signup to DearDiary</p>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={data.username}
            placeholder="Username"
            className=" bg-black text-xs px-6 py-3 rounded-lg outline-none border-[1px] "
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email"
            className=" bg-black text-xs px-6 py-3 rounded-lg outline-none border-[1px] "
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
            className="  bg-black text-xs px-6 py-3 rounded-lg outline-none border-[1px] "
          />
          <button
            className={`${loading ? "animate-pulse" : ""} px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition`}
            onClick={checkit}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
        <div className=" mb-4">
          <p className=" text-left text-xs">
            Already have an Account?{" "}
            <Link className=" font-bold underline" href="/signin">
              {" "}
              Login
            </Link>
          </p>
          {errors ? (
            <p className=" text-center text-xs text-red-400">
              Something went wrong
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className=" hidden xl:block  h-screen w-fit  max-sm:hidden  flex-1 ">
        <Gmail />
      </div>
    </div>
  );
};

export default Signup;
