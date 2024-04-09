import mongoose from "mongoose";

export async function connecttoDB()
{
    try {
        mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(`something went wrong in connecting with the database ${error}`)
    }
}