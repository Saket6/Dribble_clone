import { NextResponse } from "next/server";

export function GET()
{
    const res=NextResponse.json({"message":'Logout successful'});

    res.cookies.set('user','',{
        maxAge: -1,
        httpOnly: true
    }  )

    return res;
}