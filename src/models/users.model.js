import mongoose from "mongoose"

const userSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"provide the username bro"]
        },
        email:{
            type:String,
            required:[true,"provide the email man"]
        },
        password:{
            type:String,
            required:[true,"provide the password acho"]
        }
    }
)

const User= mongoose.models.users || mongoose.model("User",userSchema)
export default User