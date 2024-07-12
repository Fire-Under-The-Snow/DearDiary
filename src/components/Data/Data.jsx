import React from "react";
import SmallQuote from "./SmallQuote";
import { connecttoDB } from "../../dbconfig/dbconfig";
import Quote from "@/models/quote.model";

const Data = async () => {
  await connecttoDB();

  const posts = await Quote.find().lean();
  const cleanPosts = posts.map(({ _id, __v, ...post }) => post);

  return (
    <div>
      {cleanPosts.map((post, index) => (
        <div key={index}>
          <SmallQuote post={post} />
        </div>
      ))}
    </div>
  );
};

export default Data;
