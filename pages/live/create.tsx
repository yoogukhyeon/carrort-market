import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../../component/layout";
import Input from "../../component/input";
import TextArea from "../../component/textarea";
import { useForm } from "react-hook-form";
import Button from "../../component/button"
interface CreateForm {
    name: string;
    price: string;
    description: string;
  }


const Create: NextPage = () => {
    const { register, handleSubmit } = useForm<CreateForm>();
    const [loading , setLoading] = useState(false)
    return (
        <Layout canGoBack>
         
         <form className=" space-y-4 py-3 px-4">
            <Input
                register={register("name", { required: true })}
                required
                label="Name"
                name="name"
                type="text"
                />
            <Input
                register={register("price", { required: true, valueAsNumber: true })}
                required
                label="Price"
                name="price"
                type="text"
                kind="price"
            />
            <TextArea
                register={register("description", { required: true })}
                name="description"
                label="Description"
            />
            <Button text={loading ? "Loading..." : "Go live"} />
      </form>
    </Layout>
    )
}   

export default Create