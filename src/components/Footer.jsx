import React from 'react';

export default function Footer({ showModal, handleToggleModal }) {
  return (
    <footer className="p-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t  from-[#030615]"></div>
      <div className="flex flex-col">
        <h2 className="font-bold">The Brutal Martian Landspace</h2>
        <h1>APOD PROJECT</h1>
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
