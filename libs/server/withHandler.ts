import {NextApiRequest , NextApiResponse} from "next"

export interface ResponseType{
    ok : boolean;
    [key : string] : any
}

export default function withHandle(
method : "GET" | "POST" | "DELETE" , 
fn : (req:NextApiRequest , res:NextApiResponse ) => void){
    return async function(req:NextApiRequest , res:NextApiResponse) : Promise<any> {
        if(req.method !== method){
            res.status(405).end()
        }
        try{
            await fn(req , res)
        }catch(error){
            console.log(error);
            return res.status(500).end()
        }
    }
}