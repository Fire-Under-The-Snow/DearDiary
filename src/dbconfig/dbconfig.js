import mongoose from "mongoose";

const connection={}

export async function connecttoDB()
{
    try {
        if(connection.isConnected)
        {
            console.log("already connected so using existing connection")
            return;
        }
        const db=await mongoose.connect(process.env.MONGO_URL)
        connection.isConnected=db.connections[0].readyState
        
    } catch (error) {
        console.log(`something went wrong in connecting with the database ${error}`)
    }
}