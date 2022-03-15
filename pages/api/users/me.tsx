import client from "@libs/server/client";
import withHandle , {ResponseType} from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";


declare module "iron-session"{
    interface IronSessionData{
        user?: {
            id: number
        }
    }
}

async function handler(
    req:NextApiRequest , res:NextApiResponse<ResponseType> 
)
{   
    
    console.log(req.session.user)
    const profile = await client.user.findUnique({
        where : {
            id : req.session.user?.id
        }
    })

    console.log("profile" , profile)
    res.send({
        ok : true,
    });
    
}

export default withIronSessionApiRoute(withHandle("GET" , handler), {
    cookieName : "carrotsession",
    password: "1231231232132132132132313112312312312312312312",
})

