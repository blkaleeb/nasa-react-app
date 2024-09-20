import React from 'react';

export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="fixed inset-0 sm:relative sm:min-w-[30%] sm:max-h-full flex flex-col z-10 shadow-sm shadow-[0_0_40px_1px_#030615]">
      <div className="absolute inset-0 bg-[#030615] opacity-60"></div>
      <div className="z-20 relative flex flex-col gap-4 p-4 overflow-y-scroll ml-auto sm:ml-0 h-full w-11/12 md:w-full max-w-[800px] bg-[#030615]">
        <h2 className="text-2xl font-light">{data?.title}</h2>
        <div className="flex-1 flex flex-col gap-2">
          <p className="text-lg font-extralight">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button
          onClick={() => handleToggleModal()}
          className="bg-transparent text-white mr-auto duration-200 hover:opacity-70 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-right text-3xl"></i>
        </button>
      </div>
    </div>
  );
}
