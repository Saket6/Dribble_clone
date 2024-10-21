
import * as jose from 'jose';
export async function getDataFromToken(request){

    try{
        console.log('at get data from token')
        const token=request.cookies.get('user')?.value|| '';
        // console.log(token)
        // const tokenData=await jwtVerify(token,process.env.SECRET_KEY);
       const data= await jose.jwtVerify(
            token, new TextEncoder().encode(process.env.SECRET_KEY)
        );
        console.log("data:",data);
        if(data){
            console.log("data received")
            return data;
        }
           
    
    }
    catch(e){console.log("error at jwt:"+ e)}
   
}