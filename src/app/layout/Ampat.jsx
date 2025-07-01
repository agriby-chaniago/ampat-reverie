"use client";

import { motion } from "framer-motion";
import LeftLargeArea from "../components/LeftLargeArea";
import RightTop from "../components/RightTop";
import RightBottom from "../components/RightBottom";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { LazyLoadingSkeleton } from "../components/LazyLoadingSkeleton";

export default function Ampat() {
  const { ref, isInView, hasLoaded } = useLazyLoad({
    threshold: 0.1,
    rootMargin: "100px 0px",
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      id='ampat'
      className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-evenly py-6 sm:py-8 lg:py-12 gap-8 lg:gap-4 px-4 sm:px-6 lg:px-8 scroll-mt-50'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <LeftLargeArea isVisible={isInView} />

      <motion.div
        className='flex flex-col gap-6 sm:gap-8 lg:gap-11 w-full lg:w-auto'
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <LazyLoadingSkeleton isLoaded={hasLoaded}>
          <RightTop isVisible={isInView} />
        </LazyLoadingSkeleton>

        <LazyLoadingSkeleton isLoaded={hasLoaded}>
          <RightBottom isVisible={isInView} />
        </LazyLoadingSkeleton>
      </motion.div>
    </motion.section>
  );
}
