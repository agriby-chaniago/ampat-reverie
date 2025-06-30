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
        flex
        flex-col
        lg:flex-row
        w-full
        lg:w-[1816px]
        h-auto
        min-h-[300px]
        sm:min-h-[350px]
        lg:h-[400px]
        max-w-full
        mx-auto
        bg-transparent
        backdrop-blur-xs
        rounded-[12px]
        sm:rounded-[16px]
        lg:rounded-[20px]
        px-5
        sm:px-8
        md:px-10
        lg:px-[60px]
        py-6
        sm:py-8
        md:py-10
        lg:py-[40px]
        mt-4
        sm:mt-12
        lg:mt-[64px]
        mb-2
          sm:mb-3
        lg:mb-4
        border
        border-white
        overflow-hidden
        shadow-md
        z-10
        relative
      `}
    >
      {/* Left Side with responsive typography */}
      <div className='flex-1 flex flex-col justify-start gap-2 lg:pr-8'>
        <h2 className='text-white font-[Gully] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-[1.05]'>
          About
        </h2>
        <h1 className='text-white font-[Gully] text-4xl sm:text-5xl md:text-6xl lg:text-[100px] leading-[1.05] mt-3 sm:mt-5 lg:mt-10'>
          RAJA AMPAT
        </h1>
        <p className='text-white font-[Gully] font-light text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.2] max-w-full lg:max-w-[850px] mt-3 sm:mt-5 lg:mt-10'>
          Raja Ampat, meaning "Four Kings" in Indonesian, refers to the four
          main islands: Misool, Salawati, Batanta, and Waigeo. This remote
          archipelago in West Papua is home to the richest marine biodiversity
          on Earth.
        </p>
      </div>

      {/* Right Side - hidden on mobile, display on larger screens */}
      <div className='w-full lg:w-[492px] h-auto lg:h-[332px] flex items-center justify-start my-4 lg:my-auto mr-0 lg:mr-5 mt-6 lg:mt-0'>
        <p className='text-white font-[Gully] font-light text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight tracking-tight text-center lg:text-left'>
          Discover the crown jewel of marine biodiversity where pristine nature
          meets ancient culture
        </p>
      </div>
    </motion.div>
  );
}
