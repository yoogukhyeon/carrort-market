import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
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

      <div className="my-5">
        <label htmlFor="name" className="text-sm mb-1 block font-medium text-gray-500">Name</label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <input id="name" type="text" placeholder="이름을 입력해주세요." className="py-2 px-4 border border-transparent w-full border-gray-300 rounded-md shadow-sm pl-7 placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-500" />
        </div>
      </div>


      <div className="my-5">
        <label htmlFor="price" className="text-sm mb-1 block font-medium text-gray-500">Price</label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute pointer-events-none left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input id="price" type="text" placeholder="0.00" className="py-2 px-4 border border-transparent w-full border-gray-300 rounded-md shadow-sm pl-7 placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-500" />
          <div className="absolute pointer-events-none right-0 pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>

      
      <div>
        <label htmlFor="content" className="text-sm mb-1 block font-medium text-gray-500">Description</label>
          <textarea className="mt-1 shadow-sm w-full focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300" id="content" rows={4} />
      </div>
      <button className="mt-5 bg-orange-500 w-full hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">Upload product</button>
    </div>
  );
};

export default Upload;