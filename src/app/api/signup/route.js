import { NextRequest, NextResponse } from "next/server";
import { User } from "@/model/model";
import connect from "@/db/conn";
import bcrypt from 'bcrypt'
import { upload } from "@/helpers/upload";

export const config = {
    api: {
      bodyParser: false, // Disable Next.js body parsing
    },
  };
connect();
export async function POST(req) {

    try {
        // let secure_url;
        const data = await req.formData();
        const uploadedFile = data.get('avatar');
        const res=await upload(uploadedFile);
        const secure_url=res.secure_url;
        console.log(secure_url);
        // const { name, email, password, c_password,desc,githubUrl,linkedinUrl } = data;

        const name=data.get('name');
        const email=data.get('email');
        const password=data.get('password');
        const c_password=data.get('c_password');
        const desc=data.get('desc');
        const githubUrl=data.get('githubUrl');
        const linkedinUrl=data.get('linkedinUrl');


        console.log(data);
        if (password !== c_password) {
            return NextResponse.json({ "error": 'Password and Confirm Password must be same.' },{
                status:400
            });
        }
        else {
            const existUser = await User.findOne({ email });
            if (existUser) {
                return NextResponse.json({ "error": 'User already exists. Please sign in' },{
                    status:400
                });
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const h_pass = await bcrypt.hash(password, salt);
                const hc_pass = await bcrypt.hash(c_password, salt);
                // console.log(h_pass);

                const newUser = new User({
                    name,
                    email,
                    password: h_pass,
                    c_password: hc_pass,
                    desc,
                    githubUrl,
                    linkedUrl:linkedinUrl,
                    isVerified: false,
                    avatarUrl: secure_url
                })



                const savedUser=await newUser.save();
                return NextResponse.json({ "message": 'Signed up successfully',"user":savedUser });
            }
        }

                // await sendMail({email, emailType:"VERIFY", userId:savedUser._id } );

               
    } catch (error) {
        console.log(error)
    }


}