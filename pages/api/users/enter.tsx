import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client"
import withHandle from "../../../libs/server/withHandler";

async function handler(
    req:NextApiRequest , res:NextApiResponse 
)
{
    console.log(":::" , req.body)
    return res.status(200).end();
}

export default withHandle("POST" , handler)