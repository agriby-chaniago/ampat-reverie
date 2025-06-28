"use client";

import { motion } from "framer-motion";
import { Globe, Sailboat } from "lucide-react";

export default function LeftLowerSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='
        w-[1044px]
        h-[300px]
        bg-white
        rounded-[20px]
        flex 
        justify-between 
        px-10 
        pt-10
        shadow-lg
      '
    >
      {/* Left Content Group */}
      <div className='flex flex-col gap-4 max-w-[45%]'>
        <div className='flex items-center gap-2'>
          <div className='w-[42px] h-[42px] rounded-[8px] flex items-center justify-center shadow-sm bg-gray-50'>
            <Globe size={30} strokeWidth={2.5} color='#102437' />
          </div>
          <h4 className='font-[Gully] font-semibold text-[24px] leading-[25px] tracking-normal text-[#102437]'>
            Geographic Wonder
          </h4>
        </div>
        <h3 className='ml-[52px] mt-3 font-[Gully] font-semibold text-[20px] leading-[25px] tracking-normal text-gray-800 max-w-[370px]'>
          Located at the northwest tip of Papua, Raja Ampat sits at the heart of
          the Coral Triangle.
        </h3>
      </div>

      {/* Right Content Group */}
      <div className='flex flex-col gap-4 max-w-[45%] mr-4'>
        <div className='flex items-center gap-2'>
          <div className='w-[42px] h-[42px] rounded-[8px] flex items-center justify-center shadow-sm bg-gray-50'>
            <Sailboat size={30} strokeWidth={2.5} color='#102437' />
          </div>
          <h4 className='font-[Gully] font-semibold text-[24px] leading-[25px] tracking-normal text-[#102437]'>
            Marine Paradise
          </h4>
        </div>
        <h3 className='ml-[52px] mt-2 font-[Gully] font-semibold text-[20px] leading-[25px] tracking-normal text-gray-800'>
          Home to 75% of all known coral species and over 1,700 fish species,
          making it the most biodiverse marine region on the planet.
        </h3>
      </div>
    </motion.div>
  );
}
