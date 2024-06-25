import { connecttoDB } from "@/dbconfig/dbconfig";
import User from "@/models/usersdetail.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { encrypt } from "@/lib/lib";
import { cookies } from "next/headers";
connecttoDB();
export async function POST(req) {
  try {
    const reqbody = await req.json();
    const { email, password } = reqbody;
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user doesnot exist" },
        { status: 400 }
      );
    }

    const validpassword = await bcryptjs.compare(password, user.password);
    if (!validpassword) {
      return NextResponse.json(
        {
          error: "the password is not valid ",
        },
        {
          status: 400,
        }
      );
    }
    const expires = new Date(Date.now() + 30 * 60 * 1000);
    const session = await encrypt({ user, expires });
    cookies().set("session", session, { expires, httpOnly: true });
    return NextResponse.json({
      message: "Login success",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
