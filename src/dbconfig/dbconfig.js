import mongoose from "mongoose";

const connection={}

export async function connecttoDB()
{
    // in next apart from others, it runs on edge time meaning that
    //it only connect when needed so when a same request is sent, it again 
    //create new, so to avoid that we check if it is connected, if it is, then
    //we simply return
    try {
        if(connection.isConnected)
        {
            console.log("already connected so using existing connection")
            return;
        }
        const db=await mongoose.connect(process.env.MONGO_URL)
        //db has so much thing try clg once
        //below as you can see connections is an array where we extract the first
        //value and check if it is ready or not 
        //ready state is in number format
        connection.isConnected=db.connections[0].readyState
        console.log("db connect success for the first time")
    } catch (error) {
        console.log(`something went wrong in connecting with the database ${error}`)
        process.exit(1) //if cant connect we gracefully exit
    }
}