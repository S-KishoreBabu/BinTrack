import React from 'react';

const BannerButton = () => {
  return (
    <button href="#" className="flex cursor-pointer overflow-hidden items-center text-sm font-medium mt-12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white shadow hover:bg-green-600/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2  transition-all duration-300 ease-out hover:ring-2 ">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
      <div className="flex items-center">
        <span className="ml-1 text-white">Start Now</span>
      </div>
    </button>
  );
}

export default BannerButton;
