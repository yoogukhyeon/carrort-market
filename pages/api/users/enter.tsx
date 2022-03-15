import mail from "@sendgrid/mail"
import twilio from "twilio"
import client from "@libs/server/client";
import withHandle , {ResponseType} from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SEND_MAIL!)
const twilioClient = twilio(process.env.TWILIO_SID , process.env.TWILIO_TOKEN)

async function handler(
    req:NextApiRequest , res:NextApiResponse<ResponseType> 
)
{   
    const {phone , email} = req.body;
    const user = phone ? {phone : +phone} : email ? {email} : null
    if(!user) return res.status(400).json({ok : false})
    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    
   /*  const insertUser = await client.user.upsert({
        where : {
            ...user,
        },
        create : {
            name : "Anonymous",
            ...user
        },
        update : {}
    }) */


     const token = await client.token.create({
        data : {
            payload,
            user : {
                connectOrCreate : {
                    where : {
                        ...user
                    },
                    create : {
                        name : "Anonymous",
                        ...user
                    }
                }
            }
        }
    })
    console.log("token" , token) 
    
    if(phone){
     /*    const message = await twilioClient.messages.create({
            messagingServiceSid : process.env.TWILIO_MSID,
            to : process.env.MYPHONE!,
            body : `Your Login token is ${payload}.`
        }) */

    }else if(email){
      /*   const email = await mail.send({
            from : "rnrgus012345@naver.com",
            to : "rnrgus5897@gmail.com",
            subject : "Your Carrot Market Verification Email",
            text : `Your token is ${payload}`
        }) */

        console.log("email" , email)
    }


    return res.json({
        ok : true
    });
}

export default withHandle("POST" , handler)