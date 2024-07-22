"use server";

import { revalidatePath } from "next/cache";

const { connecttoDB } = require("@/dbconfig/dbconfig");
const { default: Quote } = require("@/models/quote.model");

export const deleteserver = async (formData) => {
  const id = formData.get("id");
  connecttoDB();
  const deleteOneResult = await Quote.deleteOne({ _id: id });
  revalidatePath("/About");
};
