"use client";

import CenterLargeArea from "../components/CenterLargeArea";
import LeftLowerSection from "../components/LeftLowerSection";
import RightLowerSection from "../components/RightLowerSection";
import { useEffect, useState } from "react";

export default function About() {
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

  return (
    <div
      id='about'
      className='w-full flex flex-col gap-2 sm:gap-4 lg:gap-6 py-16 sm:py-24 lg:py-34 px-4 sm:px-6 relative'
    >
      {isMobile ? (
        <>
          <CenterLargeArea deviceSize={deviceSize} />
          <LeftLowerSection deviceSize={deviceSize} />
          <RightLowerSection deviceSize={deviceSize} />
        </>
      ) : (
        <>
          <CenterLargeArea deviceSize={deviceSize} />
          <div className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 sm:gap-8 lg:gap-10'>
            <LeftLowerSection deviceSize={deviceSize} />
            <RightLowerSection deviceSize={deviceSize} />
          </div>
        </>
      )}
    </div>
  );
}
