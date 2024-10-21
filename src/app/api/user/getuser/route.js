import { NextResponse } from "next/server";
import { User } from "@/model/model";
import { jwtVerify } from "jose";
export async function GET(req)
{
    try{
        const token=req.cookies.get('user');
        if(!token){
            console.log("User not found");
            return NextResponse.json({"error": "User not found"});
        } 
        const encodedSecretKey = new TextEncoder().encode(process.env.SECRET_KEY);
        const decoded=await jwtVerify(token.value,encodedSecretKey,{ algorithms: ['HS256'] });
        // console.log("token data",decoded);
        const user=await User.findById(decoded.payload.id);
        const resp=NextResponse.json({"User":user});
        return resp;
    }catch(e){console.log(e)}
    
}