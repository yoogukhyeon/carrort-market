import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../component/layout";
import TextArea from "../../component/textarea";
import Button from "../../component/button";

interface WriteForm {
    question: string;
  }

const Write: NextPage = () => {
    const [loading , setLoading] = useState(false)
    const { register, handleSubmit } = useForm<WriteForm>();
    return (
        <Layout canGoBack>
            <form className="px-4 py-10 pt-6">
            <TextArea
                register={register("question", { required: true, minLength: 5 })}
                required
                placeholder="Ask a question!"
            />
               <Button text={loading ? "Loading..." : "Submit"} />
            </form>
        </Layout>
    )
}

export default Write;