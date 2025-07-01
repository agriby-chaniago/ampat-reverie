"use client";

import { useState, useEffect } from "react";
import TopWideSection from "../components/TopWideSection";
import TopNarrowSection from "../components/TopNarrowSection";

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

  return (
    <nav className='w-full sticky top-0 z-50'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly gap-8 lg:gap-4 px-4 sm:px-6 lg:px-8'>
        <TopWideSection isMobile={isMobile} isTablet={isTablet} />
        {!isMobile && (
          <TopNarrowSection isMobile={isMobile} isTablet={isTablet} />
        )}
      </div>
    </nav>
  );
}
