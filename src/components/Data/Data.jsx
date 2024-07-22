import React from "react";
import SmallQuote from "./SmallQuote";
import { connecttoDB } from "../../dbconfig/dbconfig";
import Quote from "@/models/quote.model";

const Data = async () => {
  await connecttoDB();
  const posts = await Quote.find().lean();
  const cleanPosts = posts.map(({ _id, __v, ...post }) => {
    const id = _id.toString(); // Convert _id to a string
    return { ...post, id }; // Add the id back to the post object
  });

  return (
    <div>
      {cleanPosts.map((post) => (
        <div key={post.id}>
          <SmallQuote post={post} id={post.id} />
        </div>
      ))}
    </div>
  );
};

export default Data;
