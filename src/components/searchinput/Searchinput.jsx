import { connecttoDB } from "@/dbconfig/dbconfig";
import Quote from "@/models/quote.model";
import { revalidatePath } from "next/cache";
import { IoSend } from "react-icons/io5";

const Searchinput = () => {
  const serveractionll = async (formData) => {
    "use server";
    const quote = formData.get("datas");
    connecttoDB();
    const newquote = new Quote({ quote });
    const newquotesaved = await newquote.save();
    revalidatePath("/About");
    console.log(quote);
  };
  return (
    <div className="w-96 flex items-center bg-[#1F2022] justify-around rounded-md">
      <form action={serveractionll}>
        <input
          name="datas"
          className="w-64 bg-[#1F2022] px-2 py-4 text-sm text-white outline-none"
          type="text"
          placeholder="Enter your Quote here"
        />
        <button>
          <IoSend className="hover:text-white transition" />
        </button>
      </form>
    </div>
  );
};

export default Searchinput;
