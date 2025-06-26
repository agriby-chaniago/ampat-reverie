"use client";

// Import the UserMenu component
import UserMenu from "./UserMenu";

export default function TopWideSection() {
  return (
    <div className='fixed top-16 left-16 w-[1044px] h-[102px] max-w-full bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center justify-between z-50'>
      {/* Icon kiri */}
      <button
        onClick={() =>
          document
            .getElementById("ampat")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className='flex items-center'
      >
        <img
          src='/assets/icon.png'
          alt='Icon'
          className='w-50 h-50 cursor-pointer'
        />
      </button>

      {/* Menu kanan */}
      <nav className='hidden md:flex space-x-6 text-gray-800 font-medium text-lg'>
        <a href='#about' className='hover:text-blue-600 transition-colors'>
          About
        </a>
        <a
          href='#top-destination'
          className='hover:text-blue-600 transition-colors'
        >
          Top Destination
        </a>
        <a href='#why-visit' className='hover:text-blue-600 transition-colors'>
          Why Visit
        </a>
        <a href='#gallery' className='hover:text-blue-600 transition-colors'>
          Gallery
        </a>
        {/* Add the UserMenu component */}
        <UserMenu />
      </nav>
    </div>
  );
}
