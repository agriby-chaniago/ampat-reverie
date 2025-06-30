"use client";

import { motion } from "framer-motion";

export default function LeftLargeArea() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='
    flex
    flex-col
    justify-between
    w-full lg:w-[1044px]
    h-auto min-h-[380px] sm:min-h-[420px] lg:h-[724px]
    bg-white/5
    backdrop-blur-xs
    shadow-lg
    rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]
    px-4 sm:px-6 lg:px-8
    py-6 sm:py-8 lg:py-10
    border
    border-white
  '
    >
      {/* Title & Description - centered with responsive font sizes */}
      <div className='flex flex-col items-center text-center space-y-3 sm:space-y-4 lg:space-y-6 mt-8 sm:mt-12 lg:mt-20'>
        <div className='max-w-[596px]'>
          <h1
            className='
              font-[Gully]
              font-bold
              text-5xl sm:text-6xl md:text-7xl lg:text-[100px]
              leading-[1.1]
              tracking-[-0.05em]
              text-white
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]
            '
          >
            AMPAT <br /> REVERIE
          </h1>
        </div>
        <div className='max-w-[662px]'>
          <p className='font-[Gully] font-normal text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-[1.5] text-white'>
            A glimpse of paradise from the edge of the world.
          </p>
        </div>
      </div>

      {/* Rating with responsive font sizes */}
      <div className='w-full flex justify-start mt-6 sm:mt-0'>
        <p className='font-[Gully] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.4] text-white'>
          4.93/5.00 |{" "}
          <span className='text-xl sm:text-2xl md:text-2xl lg:text-[28px] text-white'>
            32k+ explorers
          </span>
        </p>
      </div>
    </motion.div>
  );
}
