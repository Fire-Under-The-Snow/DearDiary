import mongoose from "mongoose";

export async function connecttoDB()
{
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("mongo is connected")
        })
        connection.on('error',(err)=>{
            console.log("mongo connection error",err)
            process.exit()
        })
    } catch (error) {
        console.log(`something went wrong in connecting with the database ${error}`)
    }
}