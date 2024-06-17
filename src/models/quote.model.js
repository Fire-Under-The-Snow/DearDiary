import mongoose from "mongoose"

const quoteSchema= new mongoose.Schema(
    {
        quote:{
            type:String
        },
       
    }
)

//so while using next make sure u write the mongoose.models.User 
// what mistake i made was the naming of User, i wrote it directly users(which mongo does) but for Next give the
//same name that u save
const Quote= mongoose.models.Quote || mongoose.model("Quote",quoteSchema)
export default Quote