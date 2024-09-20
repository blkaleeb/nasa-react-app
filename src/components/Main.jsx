import React from 'react';

export default function Main({ data }) {
  return (
    <div className="flex flex-col max-h-screen h-screen w-screen">
      <img
        className="w-full h-full flex-1 object-cover"
        src={data?.hdurl}
        alt={data ? data.title : 'Photo of planet mars'}
      />
    </div>
  );
}
