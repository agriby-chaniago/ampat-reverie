"use client";

import { motion } from "framer-motion";

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
};

const Header = () => (
  <div className='flex flex-col w-full text-left gap-1 sm:gap-2 mt-2 sm:mt-4'>
    <h1 className='font-[Gully] font-normal text-2xl sm:text-3xl lg:text-[32px] leading-[1.2] text-[#102437]'>
      Find
    </h1>
    <h2 className='font-[Gully] font-normal text-xl sm:text-2xl lg:text-[24px] leading-[1.2] opacity-60 text-[#102437]'>
      Your Journey
    </h2>
  </div>
);

const CallToActionButton = () => (
  <div className='w-full flex justify-center mb-1 sm:mb-2'>
    <a
      href='#top-destination'
      className='w-full max-w-full sm:max-w-[500px] lg:max-w-[574px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[78px] bg-[#102437] text-white rounded-full flex items-center justify-center cursor-pointer border border-white transition-all duration-300 hover:bg-white hover:text-[#102437] hover:shadow-lg hover:scale-[1.02] hover:border-[#102437] font-[Gully] font-normal text-base sm:text-lg md:text-xl lg:text-[20px] leading-[1.2] px-4'
    >
      <span className='whitespace-nowrap overflow-hidden text-ellipsis'>
        Where would you like to go?
      </span>
    </a>
  </div>
);

export default function RightBottom({ isVisible = true }) {
  const containerClasses =
    "flex flex-col items-stretch justify-between w-full lg:w-[716px] h-auto min-h-[220px] sm:min-h-[280px] lg:h-[360px] bg-white bg-opacity-70 shadow rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-10 border border-white";

  const animationConfig = isVisible
    ? ANIMATION_CONFIG
    : { initial: { opacity: 0, y: 20 } };

  return (
    <motion.div {...animationConfig} className={containerClasses}>
      <Header />
      <CallToActionButton />
    </motion.div>
  );
}
