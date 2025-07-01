"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/layout/Navbar";
import Ampat from "@/app/layout/Ampat";
import About from "@/app/layout/About";
import TopDestination from "@/app/layout/TopDestination";
import Why from "@/app/layout/Why";
import GalleryVisual from "@/app/layout/GalleryVisual";
import Footer from "@/app/layout/Footer";

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

const GalleryFooterSection = () => {
  const deviceSize = useDeviceSize();
  const isMobile = deviceSize === "mobile";

  const backgroundStyles = {
    backgroundImage: "url('/assets/bgGalleryFooter.png')",
    backgroundSize: isMobile ? "cover" : "100% 2160px",
    backgroundPosition: isMobile ? "center" : "bottom",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: isMobile ? "scroll" : "fixed",
  };

  return (
    <div className='relative w-full' style={backgroundStyles}>
      <div className='absolute inset-0 bg-black/40 z-0' />
      <div className='relative z-10 flex flex-col'>
        <GalleryVisual />
        <Footer />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <Navbar />
      <Ampat />
      <About />
      <TopDestination />
      <Why />
      <GalleryFooterSection />
    </main>
  );
}
