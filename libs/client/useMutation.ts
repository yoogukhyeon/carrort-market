import { useState } from "react"
import axios from "axios"
interface UseMutationState<T>{
    loading : boolean;
    data? : TemplateStringsArray;
    error? : object;
}

type UseMutationResult<T> = [(data : any) => void , UseMutationState<T> ]

export default function useMutation<T = any>(url:string): UseMutationResult<T>{
    
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