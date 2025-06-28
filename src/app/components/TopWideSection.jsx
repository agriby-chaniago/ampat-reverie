"use client";
import { motion } from "framer-motion";

export default function TopWideSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='
        flex
        items-center
        justify-between
        w-[1044px]
        h-[102px]
        max-w-full
        bg-white
        shadow-lg
        rounded-2xl
        px-6
        py-4
        mt-[64px]
        z-50
      '
    >
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
          className='w-[175px] h-[175px] cursor-pointer'
        />
      </button>

      {/* Menu kanan */}
      <nav className='hidden md:flex space-x-6 text-gray-800 font-medium text-lg'>
        <a href='#about' className='hover:text-[#107773] transition-colors'>
          About
        </a>
        <a
          href='#top-destination'
          className='hover:text-[#107773] transition-colors'
        >
          Top Destination
        </a>
        <a href='#why-visit' className='hover:text-[#107773] transition-colors'>
          Why Visit
        </a>
        <a href='#gallery' className='hover:text-[#107773] transition-colors'>
          Gallery
        </a>
      </nav>
    </motion.div>
  );
}
