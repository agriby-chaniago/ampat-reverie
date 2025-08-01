"use client";

import { motion } from "framer-motion";
import { Globe, Sailboat } from "lucide-react";

export default function LeftLowerSection({ deviceSize, isVisible = true }) {
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        w-full
        h-auto
        min-h-[250px]
        sm:min-h-[280px]
        lg:h-[300px]
        bg-white
        rounded-[12px]
        sm:rounded-[16px]
        lg:rounded-[20px]
        flex
        flex-col sm:flex-row
        justify-between
        px-3 sm:px-6 md:px-8 lg:px-10
        py-4 sm:py-8 lg:pt-10
        shadow-lg
        gap-6 sm:gap-8 lg:gap-10
        ${!isMobile ? "ml-4 sm:ml-6 lg:ml-8" : ""}
      `}
    >
      {/* Left Content */}
      <div className='flex flex-col w-full sm:w-[45%] mb-6 sm:mb-0'>
        <div className='flex items-center gap-2'>
          <div className='w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-[8px] flex items-center justify-center shadow-sm bg-gray-50'>
            <Globe
              size={isMobile ? 24 : 30}
              strokeWidth={2.5}
              color='#102437'
            />
          </div>
          <h4 className='font-[Gully] font-semibold text-lg sm:text-xl lg:text-[24px] leading-tight tracking-normal text-[#102437]'>
            Geographic Wonder
          </h4>
        </div>
        <h3 className='ml-[46px] sm:ml-[52px] mt-2 sm:mt-3 font-[Gully] font-semibold text-base sm:text-lg lg:text-[20px] leading-snug tracking-normal text-gray-800 max-w-full sm:max-w-[370px]'>
          Located at the northwest tip of Papua, Raja Ampat sits at the heart of
          the Coral Triangle.
        </h3>
      </div>

      {/* Right Content */}
      <div className='flex flex-col w-full sm:w-[45%] sm:mr-4'>
        <div className='flex items-center gap-2'>
          <div className='w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-[8px] flex items-center justify-center shadow-sm bg-gray-50'>
            <Sailboat
              size={isMobile ? 24 : 30}
              strokeWidth={2.5}
              color='#102437'
            />
          </div>
          <h4 className='font-[Gully] font-semibold text-lg sm:text-xl lg:text-[24px] leading-tight tracking-normal text-[#102437]'>
            Marine Paradise
          </h4>
        </div>
        <h3 className='ml-[46px] sm:ml-[52px] mt-2 font-[Gully] font-semibold text-base sm:text-lg lg:text-[20px] leading-snug tracking-normal text-gray-800'>
          Home to 75% of all known coral species and over 1,700 fish species,
          making it the most biodiverse marine region on the planet.
        </h3>
      </div>
    </motion.div>
  );
}
