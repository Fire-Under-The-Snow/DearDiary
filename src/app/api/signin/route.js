import { connecttoDB } from "@/dbconfig/dbconfig"
import User from "@/models/usersdetail.model"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connecttoDB()
export async function POST(req){
    try {
        const reqbody=await req.json()
        const{email,password}=reqbody
        const user=await User.findOne({email})
        if (!user)
        {
            return NextResponse.json(
                {error:"user doesnot exist"},
                {status:400}
            )
        }
        
        const validpassword= await bcryptjs.compare(password,user.password)
        if(!validpassword)
        {
            return NextResponse.json(
                {
                    error:"the password is not valid "
                },
                {
                    status:400
                }
            )
        }
        return NextResponse.json(
            {
                message:"Login success",
                success:true,
            }
        )
        } catch (error) {
        return NextResponse.json({error:error.message}
        ,{status:500})
    }
}