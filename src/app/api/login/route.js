
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
// import Jwt  from "jsonwebtoken";
import { User } from "@/model/model";
import connect from "@/db/conn";
import * as jose from 'jose';
connect();
export async function POST(NextRequest) {
    try{
        const userDet = await NextRequest.json();
        console.log(userDet);
        const {email,password}=userDet;
        const existUser = await User.findOne({ email });
        if(!existUser) return NextResponse.json({ "error": 'Not registered yet' },{status: 401});

        const verifiedPwd=await bcrypt.compare(password,existUser.password);
        if(!verifiedPwd)  return NextResponse.json({ "error": 'Invalid Credentials' },{status: 401});

        const tokendata={
            id: existUser.id,
            name: existUser.name,
            email: existUser.email
        }
        // const token= await Jwt.sign(tokendata,process.env.SECRET_KEY);
        const token = await new jose.SignJWT(tokendata)
                        .setProtectedHeader({ alg: 'HS256' })
                        .setIssuedAt()
                        .setExpirationTime('30d')
                        .sign(new TextEncoder().encode(process.env.SECRET_KEY));
        console.log(existUser);
        const response=NextResponse.json({ "message": 'Sign in successful','User':existUser });
        response.cookies.set('user', token,{
            maxAge: 86400000 ,
            htttpOnly: true
        })

        return response ;
    }
    catch(err){
        console.log(err);
    }
    
}