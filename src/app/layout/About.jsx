"use client";

import { useEffect, useState } from "react";
import CenterLargeArea from "../components/CenterLargeArea";
import LeftLowerSection from "../components/LeftLowerSection";
import RightLowerSection from "../components/RightLowerSection";

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = deviceSize === "mobile";

  return (
    <div
      id='about'
      className='w-full max-w-screen-xl mx-auto flex flex-col items-center gap-2 sm:gap-4 lg:gap-6 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 pb-6 relative'
    >
      {/* Menampilkan CenterLargeArea dengan ukuran lebar penuh di desktop */}
      <CenterLargeArea deviceSize={deviceSize} />

      {/* Menampilkan LeftLowerSection dan RightLowerSection secara responsif */}
      <div
        className={`
          w-full
          flex flex-col lg:flex-row 
          items-center lg:items-start
          justify-center gap-6 sm:gap-8 lg:gap-10
        `}
      >
        <LeftLowerSection deviceSize={deviceSize} />
        <RightLowerSection deviceSize={deviceSize} />
      </div>
    </div>
  );
}
