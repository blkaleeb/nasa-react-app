import React from 'react';

export default function SideBar({ handleToggleModal }) {
  return (
    <div className="fixed inset-0 sm:relative sm:min-w-[30%] sm:max-h-screen flex flex-col z-10 shadow-sm shadow-[0_0_40px_1px_#030615]">
      <div className="absolute inset-0 bg-[#030615] opacity-60"></div>
      <div className="z-20 relative flex flex-col gap-4 p-4 overflow-y-scroll ml-auto sm:ml-0 h-full w-11/12 max-w-[800px] bg-[#030615]">
        <h2>The Brutal Martian Landspace</h2>
        <div className="flex-1">
          <p>Description</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque repellendus ut aliquam
            consequatur, porro magnam rem quam, deleniti accusamus placeat quasi culpa necessitatibus voluptates sed
            obcaecati corporis et modi.
          </p>
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
