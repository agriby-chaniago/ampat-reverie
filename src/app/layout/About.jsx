"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CenterLargeArea from "../components/CenterLargeArea";
import LeftLowerSection from "../components/LeftLowerSection";
import RightLowerSection from "../components/RightLowerSection";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { LazyLoadingSkeleton } from "../components/LazyLoadingSkeleton";

const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceSize("mobile");
      } else if (width < 1024) {
        setDeviceSize("tablet");
      } else {
        setDeviceSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceSize;
};

export default function About() {
  const deviceSize = useDeviceSize();
  const { ref, isInView, hasLoaded } = useLazyLoad({
    threshold: 0.1,
    rootMargin: "100px 0px",
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      id='about'
      className='w-full mx-auto flex flex-col items-center gap-2 sm:gap-4 lg:gap-6 py-16 sm:py-24 lg:py-32 px-2 sm:px-4 lg:px-6 relative'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <CenterLargeArea deviceSize={deviceSize} />

      <motion.div
        className='w-full grid lg:grid-cols-[56%_38%] justify-evently items-start gap-6 sm:gap-8 lg:gap-18'
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <LazyLoadingSkeleton isLoaded={hasLoaded}>
          <LeftLowerSection deviceSize={deviceSize} isVisible={isInView} />
        </LazyLoadingSkeleton>

        <LazyLoadingSkeleton isLoaded={hasLoaded}>
          <RightLowerSection deviceSize={deviceSize} isVisible={isInView} />
        </LazyLoadingSkeleton>
      </motion.div>
    </motion.section>
  );
}
