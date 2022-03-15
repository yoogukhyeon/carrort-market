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

    const { token } = req.body;
    const tokenUser = await client.token.findUnique({
        where : {
            payload : token
        }
    })
    if(!tokenUser) return res.status(404).end();

    req.session.user = {
        id : tokenUser?.userId
    }

    await req.session.save()
    res.status(200).end();
    
}

export default withIronSessionApiRoute(withHandle("POST" , handler), {
    cookieName : "carrotsession",
    password: "1231231232132132132132313112312312312312312312",
})

