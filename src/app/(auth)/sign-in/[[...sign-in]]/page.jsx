import { SignIn } from "@clerk/nextjs";
import Gmaill from "../../../../components/gmail/Gmail";

export default function Page() {
  return (
    <div className=" text-white bg-black flex justify-center items-center w-full h-screen ">
      <div className=" flex-1  h-screen flex items-center justify-center border-2 border-black flex-col w-[720px]">
        <div className=" mb-4">
          <p className=" text-left font-bold text-4xl">DearDairy</p>
          <p className=" text-gray-300 text-sm">
            Welcome to the World of journal and healing
          </p>
        </div>
        <div className=" space-y-3 w-[26rem] rounded-md bg-white h-72 flex items-center justify-center border-2 border-black flex-col">
          <SignIn />
        </div>
      </div>
      <div className=" hidden xl:block  h-screen w-fit  max-sm:hidden  flex-1 ">
        <Gmaill />
      </div>
    </div>
  );
}
