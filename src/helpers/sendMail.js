import nodemailer from 'nodemailer';
import User from '@/models/User';
import bcrypt from 'bcrypt';
export async function sendMail({ email, emailType, userId }) {
    try {
        const hashed_id = await bcrypt.hash(userId.toString(), 10);
        let user;
        if (emailType === 'VERIFY') {
            user = await User.findByIdAndUpdate(userId, {
                verifyToken: hashed_id,
                verifyTokenExpiry: Date.now() + 36000000
            })
        }
        else if (emailType === 'CHANGE_PASS') {
            user = await User.findByIdAndUpdate(userId, {
                changePassToken: hashed_id,
                changePassTokenExpiry: Date.now() + 3600000
            })
        }

        console.log("user sent mail:", user);
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6342c3d2b25d3d",
                pass: "37406ecde65a8d"
            }
        });

        const mailOptions = {
            from: "saket@gmail.com", 
            to: email,
            subject: emailType==='VERIFY'?'Verify your email':'Reset your password',
            text: "Hello world?", // plain text body
            html: `<p> Click this link to verify your email: <a>http://localhost:3000/verifyemail?token=${hashed_id} </a> </p>`,
        }
        const mailresponse=await transport.sendMail(mailOptions);
        return mailresponse;

    } catch (error) {
        console.log(error);
    }
}