import React, { useState } from "react"
import { FieldErrors, useForm } from "react-hook-form"

interface LoginForm {
    username : string;
    email : string;
    password : string;
    errors? : string
}

export default function Forms(){
    const { register, 
            handleSubmit , 
            setError,
            reset,
            formState: { errors }
    } = useForm<LoginForm>({
        mode : "onBlur"
    });
    const onValid = (data:LoginForm) => {
        console.log("i am valid")
        reset();
    }
    const onInvalid = (errors:FieldErrors) => {
        console.log(errors)
    }

    console.log("errors" , errors)
    return (
        <form onSubmit={handleSubmit(onValid , onInvalid)} className="p-5">
            <div>
                <input {...register("username" , {
                    required : "userName is required",
                    maxLength : {
                        message : "The userName should be 5 chars.",
                        value : 5
                    }
                })} type="text" placeholder="Username" />
            </div>
            <div>
                <input {...register("email" , {
                    required : "Email is required",
                    validate : {
                        notGmail : (value) => !value.includes("@gmail.com") || "Gmail is not allowed"
                    }
                })} type="email" placeholder="Email" />
            </div>
            {errors.email?.message}
            <div>
                <input {...register("password" , {
                    required : "Password is required"
                })} type="password" placeholder="password" />
            </div>
            <input type="submit" value="Create Account" />
        </form>
    )
}