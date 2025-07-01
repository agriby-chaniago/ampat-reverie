"use client";
import { motion } from "framer-motion";

export default function CenterLargeArea({ deviceSize }) {
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        flex flex-col lg:flex-row items-start lg:items-center w-full
        max-w-full mx-auto min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]
        bg-transparent backdrop-blur-xs rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]
        px-5 sm:px-8 md:px-10 lg:px-[52px] py-4 sm:py-7 md:py-9 lg:py-[32px]
        mt-8 sm:mt-10 lg:mt-[56px] mb-2 sm:mb-2 lg:mb-5 border border-white overflow-hidden shadow-md z-10 relative
        lg:max-w-none lg:w-full  {/* Allow full width on desktop */}
      `}
    >
      <div className='flex-1 flex flex-col justify-start lg:pr-6'>
        <h2 className='text-white font-[Gully] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1]'>
          About
        </h2>
        <h1 className='text-white font-[Gully] text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-[1.05] mt-2 sm:mt-4 lg:mt-6'>
          RAJA AMPAT
        </h1>
        <p className='text-white font-[Gully] font-light text-base sm:text-lg md:text-xl lg:text-[22px] leading-[1.25] max-w-full lg:max-w-[840px] mt-2 sm:mt-4 lg:mt-6'>
          Meaning "Four Kings" in Indonesian, refers to the four main islands:
          Misool, Salawati, Batanta, and Waigeo. This remote archipelago in West
          Papua is home to the richest marine biodiversity on Earth.
        </p>
      </div>

      <div className='w-full lg:w-[480px] h-auto lg:h-[300px] flex items-start justify-start mt-3 sm:mt-5 lg:mt-8 mr-0 lg:mr-4'>
        <p className='text-white font-[Gully] font-light text-base sm:text-lg md:text-2xl lg:text-[48px] leading-tight tracking-tight text-center lg:text-left'>
          Discover the crown jewel of marine biodiversity where pristine nature
          meets ancient culture
        </p>
      </div>
    </motion.div>
  );
}
