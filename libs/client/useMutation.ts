import { useState } from "react"
import axios from "axios"
interface UseMutationState{
    loading : boolean;
    data? : object;
    error? : object;
}

type UseMutationResult = [(data : any) => void , UseMutationState ]

export default function useMutation(url:string): UseMutationResult{
    
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState<undefined | any>(undefined);
    const [error , setError] = useState<undefined | any>(undefined);
    function mutation(data: any){
        setLoading(true);
        axios(url , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            data : data
        }).then((res) => res)
        .then((res) => setData(res))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }
    return [mutation , {loading , data , error}]
}