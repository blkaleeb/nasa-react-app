import React from 'react';

export default function SideBar({ handleToggleModal, data, showModal }) {
  return (
    <div
      className={`fixed inset-0 sm:relative flex flex-col
         z-10 shadow-[0_0_40px_1px_#030615] sm:max-h-full transition-all duration-300
         ${showModal ? 'w-full flex sm:min-w-[30%]' : 'w-0'}`}
    >
      <div className={`absolute inset-0 bg-[#030615] opacity-60 ${showModal ? 'w-full' : 'w-0 hidden'} `}></div>
      <div
        className={`transition-all sm:ml-0 duration-300 z-20 relative flex flex-col gap-4 p-4 overflow-y-scroll ml-auto h-full bg-[#030615] ${
          showModal ? 'w-11/12 sm:w-full p-4' : 'w-0 hidden'
        } `}
      >
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
