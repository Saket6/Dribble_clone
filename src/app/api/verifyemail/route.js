import connect from "@/db/conn";
import { NextResponse } from "next/server";
import User from "@/models/User";
connect();

export async function POST(request)
{
    try {
        // console.log(request)
        const reqBody=await request.json();
        console.log(reqBody);
        const token=reqBody.token;
        console.log("token is ",token);

        const user=await User.findOne({verifyToken: token,verifyTokenExpiry: {$gt: Date.now() }});

        if(!user){
            return NextResponse.json({ "error": 'Invalid token' },{status: 400});
        }
        console.log(user);

        user.isVerified=true;
        user.verifyToken=null;
        user.verifyTokenExpiry=null;
        await user.save();
        return NextResponse.json({ "message": 'User verified' });

    } catch (error) {
        console.log(error);
    }
}