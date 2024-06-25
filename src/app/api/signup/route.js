import { connecttoDB } from "@/dbconfig/dbconfig";
import User from "@/models/usersdetail.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  connecttoDB();
  try {
    const reqbody = await req.json();
    const { username, email, password } = reqbody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedpass = await bcryptjs.hash(password, salt);

    const newUser = new User({ username, email, password: hashedpass });
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created succeess",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
