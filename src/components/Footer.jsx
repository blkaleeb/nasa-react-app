import React from 'react';

export default function Footer({ showModal, handleToggleModal, data }) {
  return (
    <footer className="p-4 flex justify-between items-center gap-4 fixed bottom-0 left-0 w-full">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t  from-[#030615]"></div>
      <div className="flex flex-col gap-2">
        <h1 className="font-light">APOD PROJECT</h1>
        <h2 className="font-bold">{data?.title}</h2>
      </div>
      <button
        onClick={() => handleToggleModal()}
        className="duration-200 bg-transparent border-none outline-none text-white p-4 hover:opacity-70 cursor-pointer"
      >
        <i className="fa-solid fa-circle-info text-3xl"></i>
      </button>
    </footer>
  );
}
