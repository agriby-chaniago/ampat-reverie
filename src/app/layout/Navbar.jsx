"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TopWideSection from "../components/TopWideSection";
import TopNarrowSection from "../components/TopNarrowSection";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { LazyLoadingSkeleton } from "../components/LazyLoadingSkeleton";

const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
};

const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.mobile) {
        setDeviceSize("mobile");
      } else if (width < BREAKPOINTS.tablet) {
        setDeviceSize("tablet");
      } else {
        setDeviceSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    deviceSize,
    isMobile: deviceSize === "mobile",
    isTablet: deviceSize === "tablet",
    isDesktop: deviceSize === "desktop",
  };
};

export default function Navbar() {
  const { isMobile, isTablet } = useDeviceSize();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const { ref, isInView, hasLoaded } = useLazyLoad({
    threshold: 0,
    rootMargin: "0px",
    triggerOnce: false, // Navbar should respond to scroll changes
  });

  useEffect(() => {
    // Set initial load complete after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      ref={ref}
      className='w-full sticky top-0 z-50'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly gap-8 lg:gap-4 px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <LazyLoadingSkeleton isLoaded={!isInitialLoad}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <TopWideSection
              isMobile={isMobile}
              isTablet={isTablet}
              isVisible={!isInitialLoad}
            />
          </motion.div>
        </LazyLoadingSkeleton>

        {!isMobile && (
          <LazyLoadingSkeleton isLoaded={!isInitialLoad}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <TopNarrowSection
                isMobile={isMobile}
                isTablet={isTablet}
                isVisible={!isInitialLoad}
              />
            </motion.div>
          </LazyLoadingSkeleton>
        )}
      </motion.div>
    </motion.nav>
  );
}
