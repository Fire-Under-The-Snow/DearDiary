"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import Link from "next/link";

const Navbar1 = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="  h-20 flex overflow-hidden bg-[#1F2022] text-white rounded-r-2xl w-full  ">
      <div className=" w-full ">
        <div className=" text-sm font-semibold flex justify-between items-center p-4">
          <p>#Dear Diary</p>
          <SignedIn>
            <pre>Welcome {user?.fullName}</pre>
            <div className=" flex items-center gap-6">
              <Link href="/docs">
                <p className=' className=" border-2 p-2 rounded-lg border-[#E6E6E6] transition hover:text-gray-200 text-gray-500"'>
                  Docs
                </p>
              </Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
