import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../../component/layout";
import Input from "../../component/input";
import { useForm } from "react-hook-form";
import TextArea from "../../component/textarea"
import Button from "../../component/button"
interface UploadProductForm {
  name: string;
  price: number;
  description: string;
  photo: FileList;
}


const Upload: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<UploadProductForm>();
  const [loading , setLoading] = useState(false)
  return (
    <Layout hasTabBar canGoBack>
       <form className="p-4 space-y-4 pt-10">
    <div className="px-4 py-4">
      <div>
        <div className="w-full text-gray-600 cursor-pointer hover:border-orange-500 transition-colors hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 py-6 h-48 rounded-md">
          <label>
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true" 
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
      </div>

      <Input 
        register={register("name", { required: true })}
        required
        label="Name"
        name="name"
        type="text"
      ></Input>


      <Input 
        register={register("price", { required: true })}
        required
        label="Price"
        name="price"
        type="text"
        kind="price"
      ></Input>

      <TextArea 
           register={register("description", { required: true })}
           name="description"
           label="Description"
           required
      />  


      <Button text={loading ? "Loading..." : "Upload item"} />
    </div>
    </form>
  </Layout>
  );
};

export default Upload;