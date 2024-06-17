import Quote from "@/models/quote.model";
import { connecttoDB } from "@/dbconfig/dbconfig";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connecttoDB();

    const posts = await Quote.find();
    console.log(posts)
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
