import type { NextPage } from "next";
import {useState} from "react"
import Input from "../../component/input"
import Button from "../../component/button"
import { useForm } from "react-hook-form";

interface EditProfileForm {
    email?: string;
    phone?: string;
    name?: string;
    avatar?: FileList;
    formErrors?: string;
  }

const EditProfile:NextPage = () => {
    const [loading , setLoading] = useState(false)

    const {
        register,
        setValue,
        handleSubmit,
        setError,
        formState: { errors },
        watch,
      } = useForm<EditProfileForm>();
    return(
        <form className="py-10 px-4 space-y-4">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full bg-slate-500" />
                <label htmlFor="picture" className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
                    Change Photo
                    <input id="picture" type="file" className="hidden" accept="image/*" />
                </label>
            </div>

            <Input
                register={register("name")}
                required={false}
                label="Name"
                name="name"
                type="text"
            />
            <Input
                register={register("email")}
                required={false}
                label="Email address"
                name="email"
                type="email"
            />
            <Input
                register={register("phone")}
                required={false}
                label="Phone number"
                name="phone"
                type="text"
                kind="phone"
            />
     
          <Button text={loading ? "Loading..." : "Update profile"} />
        </form>
    )
}

export default EditProfile;