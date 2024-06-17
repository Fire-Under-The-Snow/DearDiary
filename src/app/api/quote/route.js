import { connecttoDB } from "@/dbconfig/dbconfig"
import Quote from "@/models/quote.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req){
    connecttoDB()
    try {
        const reqbody=await req.json()
        const{quote}=reqbody
    
        const quotes=await Quote.findOne({quote})
        if (quotes)
        {
            return NextResponse.json(
                {error:"quote already exist"},
                {status:400}
            )
        }
        const newquote=new Quote({quote})
        const savedquote=await newquote.save()

        return NextResponse.json(
            {
                message:"quote typed succeess",
                success:true,
                savedquote
            }
        )
        } catch (error) {
        return NextResponse.json({error:error.message}
        ,{status:500})
    }
}