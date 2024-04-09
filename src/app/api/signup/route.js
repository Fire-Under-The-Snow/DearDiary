import { connecttoDB } from "@/dbconfig/dbconfig"
import User from "@/models/users.model"

export async function POST(req){
    connecttoDB()
    try {
        const reqbody=await req.json()
        const{username,email,password}=reqbody
    
        const user=await User
    
    } catch (error) {
        
    }
}