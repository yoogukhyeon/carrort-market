import type { NextPage } from "next";
import Layout from "../../component/layout";
const Chats: NextPage = () => {
    return (
        <Layout hasTabBar title="Chats">
            <div className="py-10 divide-y-[1px]">
                {[1,2,3,4,5].map((_ , i) => (
                    <div
                    className="flex px-4 cursor-pointer py-4 last:border-b-0 items-center space-x-3" key={i}>
                    <div className="w-12 h-12 rounded-full bg-slate-300"/>
                    <div>
                        <p className="text-gray-700">Steve Jebs</p>
                        <p className="text-sm text-gray-600">See you Tommorow at the corner</p>
                    </div>
                </div>
                ))}
            </div>
        </Layout>
    )
}

export default Chats