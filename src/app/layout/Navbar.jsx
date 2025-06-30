"use client";

import { useState, useEffect } from "react";
import TopWideSection from "../components/TopWideSection";
import TopNarrowSection from "../components/TopNarrowSection";

export default function Navbar() {
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

    // Set initial value
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  return (
    <div className='w-full flex flex-row items-start justify-evenly sticky top-0 z-50'>
      <TopWideSection isMobile={isMobile} isTablet={isTablet} />
      {/* Hide TopNarrowSection on mobile */}
      {!isMobile && (
        <TopNarrowSection isMobile={isMobile} isTablet={isTablet} />
      )}
    </div>
  );
}
