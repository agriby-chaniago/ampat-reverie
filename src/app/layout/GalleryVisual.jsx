"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
};

const GALLERY_CONFIG = {
  TOTAL_IMAGES: 15,
  MOBILE_VISIBLE: 6,
  DESKTOP_VISIBLE: 8,
};

const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.MOBILE) {
        setDeviceSize("mobile");
      } else if (width < BREAKPOINTS.TABLET) {
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

const SectionHeader = ({ isMobile, isTablet }) => {
  const isSmallDevice = isMobile || isTablet;

  return (
    <motion.header
      className={`text-center ${
        isSmallDevice ? "mb-3 sm:mb-4" : "mb-5 md:mb-8"
      }`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2
        className={`text-white font-[Gully] font-normal tracking-[0.05em] ${
          isMobile
            ? "text-4xl"
            : isTablet
            ? "text-5xl"
            : "text-5xl sm:text-6xl md:text-[80px]"
        } ${
          isSmallDevice ? "leading-tight" : "leading-tight md:leading-[100px]"
        }`}
      >
        Gallery Visual
      </h2>
      <p
        className={`text-gray-300 mx-auto ${
          isMobile
            ? "text-sm max-w-xs"
            : isTablet
            ? "text-base max-w-md"
            : "text-lg max-w-2xl"
        }`}
      >
        Explore the breathtaking beauty of Raja Ampat
        {!isMobile && " through our collection"}
      </p>
    </motion.header>
  );
};

const GalleryItem = ({ img, idx, isMobile, isTablet, onClick }) => {
  const isSmallDevice = isMobile || isTablet;

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: Math.min(idx * 0.1, 0.5),
      }}
      className={`relative border border-white/70 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform ${
        !isSmallDevice && "flex-shrink-0"
      }`}
      onClick={onClick}
    >
      <img
        src={img.thumb}
        alt={`Gallery Visual ${idx + 1}`}
        className={`block ${
          isMobile
            ? "h-32 w-full object-cover"
            : isTablet
            ? "h-48 w-full object-cover"
            : "h-64 w-auto max-w-full object-contain"
        }`}
        loading='lazy'
      />
      <div className='absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300' />
    </motion.div>
  );
};

const ViewAllButton = ({ onClick, isMobile }) => (
  <motion.div
    className='mt-4 sm:mt-6 mb-4 sm:mb-8 text-center'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
  >
    <button
      onClick={onClick}
      className={`bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all duration-300 font-[Gully] backdrop-blur-sm shadow-lg rounded-full ${
        isMobile ? "text-sm px-6 py-2" : "px-8 py-3"
      }`}
    >
      View All Photos
    </button>
  </motion.div>
);

const GalleryGrid = ({ images, galleryRef, isMobile, isTablet }) => {
  const isSmallDevice = isMobile || isTablet;

  return (
    <div className={`mx-auto ${isSmallDevice ? "max-w-2xl" : "max-w-7xl"}`}>
      <div
        className={`${
          isMobile
            ? "grid grid-cols-2 gap-3"
            : isTablet
            ? "grid grid-cols-3 gap-4"
            : "flex flex-wrap justify-center gap-4 md:gap-5"
        }`}
      >
        {images.map((img, idx) => (
          <GalleryItem
            key={idx}
            img={img}
            idx={idx}
            isMobile={isMobile}
            isTablet={isTablet}
            onClick={() => galleryRef.current?.openGallery(idx)}
          />
        ))}
      </div>

      <ViewAllButton
        onClick={() => galleryRef.current?.openGallery(0)}
        isMobile={isMobile}
      />
    </div>
  );
};

export default function GalleryVisual() {
  const galleryRef = useRef(null);
  const deviceSize = useDeviceSize();

  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";
  const isSmallDevice = isMobile || isTablet;

  const dynamicEl = Array.from(
    { length: GALLERY_CONFIG.TOTAL_IMAGES },
    (_, i) => ({
      src: `/assets/img/gallery/GalleryVisual_Photo${i + 1}.png`,
      thumb: `/assets/img/gallery/GalleryVisual_Photo${i + 1}.png`,
    })
  );

  const visibleImages = isSmallDevice
    ? dynamicEl.slice(0, GALLERY_CONFIG.MOBILE_VISIBLE)
    : dynamicEl.slice(0, GALLERY_CONFIG.DESKTOP_VISIBLE);

  return (
    <section
      id='gallery'
      className='w-full py-12 sm:py-16 md:py-24 lg:py-44 px-4 sm:px-6 md:px-8'
    >
      <SectionHeader isMobile={isMobile} isTablet={isTablet} />
      <GalleryGrid
        images={visibleImages}
        galleryRef={galleryRef}
        isMobile={isMobile}
        isTablet={isTablet}
      />
      <LightGallery
        onInit={(ref) => (galleryRef.current = ref.instance)}
        dynamic
        dynamicEl={dynamicEl}
        plugins={[lgThumbnail, lgZoom]}
        mode='lg-fade'
        speed={500}
        licenseKey={
          process.env.NEXT_PUBLIC_LIGHTGALLERY_LICENSE_KEY ||
          "0000-0000-000-0000"
        }
        settings={{
          selector: undefined,
          download: false,
          controls: true,
          preload: 2,
          hideControlOnEnd: false,
          mousewheel: true,
          getCaptionFromTitleOrAlt: false,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: false,
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbMargin: 5,
          thumbnail: true,
          showThumbByDefault: true,
          toogleThumb: true,
          pullCaptionUp: true,
          enableThumbDrag: true,
          enableThumbSwipe: true,
          thumbnailPluginStrings: {
            toggleThumbnails: "Toggle thumbnails",
          },
          zoom: true,
          scale: 1,
          zoom_speed: 400,
          actualSize: true,
          enableZoomAfter: 300,
          useLeftForZoom: true,
        }}
      />
    </section>
  );
}
