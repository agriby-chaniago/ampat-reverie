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
    <div
      className='
        w-full
        flex
        flex-col lg:flex-row
        items-center lg:items-start
        justify-center lg:justify-evenly
        gap-8 lg:gap-4
        px-4 sm:px-6 lg:px-8
        sticky top-0 z-50
      '
    >
      {/* TopWideSection akan ditampilkan di semua ukuran layar */}
      <TopWideSection isMobile={isMobile} isTablet={isTablet} />

      {/* TopNarrowSection hanya ditampilkan di tablet dan desktop, disembunyikan pada mobile */}
      {!isMobile && (
        <div>
          <TopNarrowSection isMobile={isMobile} isTablet={isTablet} />
        </div>
      )}
    </div>
  );
}
