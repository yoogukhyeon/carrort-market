import type { NextPage } from "next";

const Write: NextPage = () => {
    return (
        <form className="px-4 py-10">
            <textarea className="mt-1 shadow-sm w-full focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300" id="content" rows={4} placeholder="질문을 입력해주세요." />
            <button className='mt-2 bg-orange-500 w-full hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none'>Save</button>
        </form>
    )
}

export default Write;