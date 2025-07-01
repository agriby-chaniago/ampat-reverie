"use client";
import { motion } from "framer-motion";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { TextSkeleton } from "./LazyLoadingSkeleton";

export default function CenterLargeArea({ deviceSize }) {
  const { ref, isInView } = useLazyLoad({
    threshold: 0.1,
    rootMargin: "100px 0px",
    triggerOnce: true,
  });

  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`
        flex flex-col lg:flex-row items-start lg:items-center
        ${
          isMobile
            ? "w-full max-w-full mx-3"
            : isTablet
            ? "w-full max-w-[750px] mx-auto"
            : "w-full max-w-[1800px] mx-auto"
        }
        min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]
        bg-transparent backdrop-blur-xs 
        rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]
        px-5 sm:px-8 md:px-10 lg:px-[52px] 
        py-4 sm:py-7 md:py-9 lg:py-[32px]
        mt-8 sm:mt-10 lg:mt-[56px] 
        mb-2 sm:mb-2 lg:mb-5 
        border border-white overflow-hidden shadow-md z-10 relative
      `}
    >
      {isInView ? (
        <>
          <motion.div
            className='flex-1 flex flex-col justify-start lg:pr-6'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2
              className='text-white font-[Gully] font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              About
            </motion.h2>
            <motion.h1
              className='text-white font-[Gully] text-4xl sm:text-5xl md:text-6xl lg:text-[88px] leading-[1.05] mt-2 sm:mt-4 lg:mt-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              RAJA AMPAT
            </motion.h1>
            <motion.p
              className='text-white font-[Gully] font-light text-base sm:text-lg md:text-xl lg:text-[22px] leading-[1.25] max-w-full lg:max-w-[840px] mt-2 sm:mt-4 lg:mt-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              Meaning "Four Kings" in Indonesian, refers to the four main
              islands: Misool, Salawati, Batanta, and Waigeo. This remote
              archipelago in West Papua is home to the richest marine
              biodiversity on Earth.
            </motion.p>
          </motion.div>

          <motion.div
            className='w-full lg:w-[480px] h-auto lg:h-[300px] flex items-start justify-start mt-3 sm:mt-5 lg:mt-8 mr-0 lg:mr-4'
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className='text-white font-[Gully] font-light text-base sm:text-lg md:text-2xl lg:text-[48px] leading-tight tracking-tight text-center lg:text-left'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Discover the crown jewel of marine biodiversity where pristine
              nature meets ancient culture
            </motion.p>
          </motion.div>
        </>
      ) : (
        <>
          {/* Loading Skeleton */}
          <div className='flex-1 flex flex-col justify-start lg:pr-6'>
            <TextSkeleton lines={1} className='h-12 lg:h-16 mb-4' />
            <TextSkeleton lines={1} className='h-16 lg:h-24 mb-4' />
            <TextSkeleton lines={4} className='h-4 lg:h-6' />
          </div>

          <div className='w-full lg:w-[480px] h-auto lg:h-[300px] flex items-start justify-start mt-3 sm:mt-5 lg:mt-8 mr-0 lg:mr-4'>
            <TextSkeleton lines={3} className='h-6 lg:h-12' />
          </div>
        </>
      )}
    </motion.div>
  );
}
