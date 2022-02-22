import type { NextPage } from "next";


const EditProfile:NextPage = () => {
    return(
        <div className="py-10 px-4 space-y-4">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full bg-slate-500" />
                <label htmlFor="picture" className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
                    Change Photo
                    <input id="picture" type="file" className="hidden" accept="image/*" />
                </label>
            </div>

            <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    email address
                </label>
                    <input 
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholer-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-500" 
                        type="email" 
                        id="email"
                        placeholder="주소를 입력해주세요."
                        required />
            </div>

            <div className="space-y-1">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        phone Number
                </label>
                <div className="flex rounded-md shadow-sm">
                    <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">+82</span>
                    <input type="number" 
                           id="phone"
                           required 
                           className="py-2 px-4 border border-transparent w-full rounded-l-none border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-500 "/>
                  </div>
            </div>
            <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
                    Update Profile
          </button>
        </div>
    )
}

export default EditProfile;