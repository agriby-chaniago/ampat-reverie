"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import { useLazyLoad } from "../hooks/useLazyLoad";
import {
  LazyLoadingSkeleton,
  ImageSkeleton,
} from "../components/LazyLoadingSkeleton";

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
};

const SWIPER_CONFIG = {
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { clickable: true },
};

const SLIDES_DATA = [
  {
    id: "arborek",
    title: "Arborek",
    description:
      "A small island village offering rich cultural experiences and world-class snorkeling just off its jetty.",
    background: "/assets/img/topDestination/TopDestination_Photo1.png",
  },
  {
    id: "misool",
    title: "Misool",
    description:
      "A remote paradise known for its vibrant coral reefs, hidden lagoons, and extraordinary marine biodiversity.",
    background: "/assets/img/topDestination/TopDestination_Photo2.png",
  },
  {
    id: "pasir-timbul",
    title: "Pasir Timbul",
    description:
      "A stunning white sandbar that appears only during low tide—perfect for serene walks and dreamy photo ops.",
    background: "/assets/img/topDestination/TopDestination_Photo3.png",
  },
  {
    id: "piaynemo",
    title: "Piaynemo",
    description:
      "Famous for its breathtaking karst island formations and iconic viewpoints over turquoise lagoons.",
    background: "/assets/img/topDestination/TopDestination_Photo4.png",
  },
  {
    id: "teluk-kabui",
    title: "Teluk Kabui",
    description:
      "A tranquil bay framed by lush cliffs and dotted with surreal rock formations and hidden coves.",
    background: "/assets/img/topDestination/TopDestination_Photo5.png",
  },
  {
    id: "wayag",
    title: "Wayag",
    description:
      "Iconic for its dramatic limestone islets and clear aquamarine waters—often seen as the emblem of Raja Ampat.",
    background: "/assets/img/topDestination/TopDestination_Photo6.png",
  },
];

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

const DesktopSlideContent = ({ title, description, isVisible = true }) => (
  <div className='relative h-full w-full flex flex-col justify-end pb-24 px-16 bg-black/40'>
    <motion.h2
      className='text-white font-[Gully] font-normal text-[100px] leading-[100px] max-w-[800px] mb-[30px]'
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {title}
    </motion.h2>
    <motion.p
      className='text-white font-[Gully] font-light mt-[15px] text-[45px] leading-[55px] max-w-[756px]'
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      {description}
    </motion.p>
  </div>
);

const MobileSlideContent = ({ title, description, isVisible = true }) => (
  <motion.div
    className='absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[2px] p-4 sm:p-6'
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <motion.h2
      className='text-white font-[Gully] font-normal text-2xl sm:text-3xl leading-tight mb-1 sm:mb-2'
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      {title}
    </motion.h2>
    <motion.p
      className='text-white font-[Gully] font-light text-sm sm:text-base leading-snug line-clamp-2 sm:line-clamp-3'
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const SlideContent = ({
  title,
  description,
  isMobile,
  isTablet,
  isVisible = true,
}) => {
  if (!isMobile && !isTablet) {
    return (
      <DesktopSlideContent
        title={title}
        description={description}
        isVisible={isVisible}
      />
    );
  }
  return (
    <MobileSlideContent
      title={title}
      description={description}
      isVisible={isVisible}
    />
  );
};

const SectionHeader = ({ isVisible = true }) => (
  <motion.div
    className='mt-16 px-4 sm:px-6 mb-6 sm:mb-8'
    initial={{ opacity: 0, y: -20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <motion.h2
      className='text-white font-[Gully] font-normal text-3xl sm:text-4xl mb-2'
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
    >
      Top Destination
    </motion.h2>
    <motion.p
      className='text-white font-[Gully] font-light text-lg sm:text-xl'
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    >
      Explore the best of Raja Ampat
    </motion.p>
  </motion.div>
);

const GalleryItem = ({
  slide,
  isMobile,
  isTablet,
  index = 0,
  isVisible = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
    >
      <a
        href={slide.background}
        className='relative block h-[260px] sm:h-[320px] w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg'
        data-lg-size='1400-800'
        data-sub-html={`${slide.title} - ${slide.description}`}
        style={{
          backgroundImage: imageLoaded ? `url(${slide.background})` : "none",
        }}
      >
        {!imageLoaded && (
          <ImageSkeleton
            className='h-[260px] sm:h-[320px] w-full'
            aspectRatio='aspect-[4/3]'
          />
        )}
        <img
          src={slide.background}
          alt={slide.title}
          className='absolute inset-0 w-full h-full object-cover opacity-0'
          loading='lazy'
          onLoad={() => setImageLoaded(true)}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
        <SlideContent
          title={slide.title}
          description={slide.description}
          isMobile={isMobile}
          isTablet={isTablet}
          isVisible={isVisible && imageLoaded}
        />
      </a>
    </motion.div>
  );
};

const MobileLayout = ({
  galleryItems,
  deviceSize,
  isVisible = true,
  hasLoaded = false,
}) => {
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  return (
    <motion.div
      id='top-destination'
      className='min-h-[80vh] py-8 sm:py-12 w-full px-4 sm:px-6'
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <LazyLoadingSkeleton isLoaded={hasLoaded}>
        <SectionHeader isVisible={isVisible} />
      </LazyLoadingSkeleton>

      {/* Only render LightGallery when loaded */}
      {hasLoaded && (
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={galleryItems}
        >
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {SLIDES_DATA.map((slide, index) => (
              <LazyLoadingSkeleton key={slide.id} isLoaded={hasLoaded}>
                <GalleryItem
                  slide={slide}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  index={index}
                  isVisible={isVisible}
                />
              </LazyLoadingSkeleton>
            ))}
          </motion.div>
        </LightGallery>
      )}
    </motion.div>
  );
};

const DesktopLayout = ({ isVisible = true, hasLoaded = false }) => {
  const swiperRef = useRef(null);

  return (
    <motion.div
      id='top-destination'
      className='h-screen w-full'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Only render Swiper when loaded */}
      {hasLoaded && (
        <Swiper
          ref={swiperRef}
          direction='vertical'
          pagination={SWIPER_CONFIG.pagination}
          modules={[Pagination, Autoplay]}
          autoplay={SWIPER_CONFIG.autoplay}
          className='h-full w-full swiper-container'
        >
          {SLIDES_DATA.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className='h-full w-full bg-cover bg-center relative'
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <SlideContent
                  title={slide.title}
                  description={slide.description}
                  isMobile={false}
                  isTablet={false}
                  isVisible={isVisible}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Loading skeleton for desktop */}
      {!hasLoaded && (
        <div className='h-full w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center'>
          <motion.div
            className='text-white text-2xl font-[Gully]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading destinations...
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default function TopDestination() {
  const deviceSize = useDeviceSize();
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";
  const isSmallDevice = isMobile || isTablet;

  const { ref, isInView, hasLoaded } = useLazyLoad({
    threshold: 0.1,
    rootMargin: "100px 0px",
    triggerOnce: true,
  });

  const galleryItems = SLIDES_DATA.map((slide) => ({
    src: slide.background,
    thumb: slide.background,
    subHtml: `${slide.title} - ${slide.description}`,
  }));

  return (
    <div ref={ref}>
      {isSmallDevice ? (
        <MobileLayout
          galleryItems={galleryItems}
          deviceSize={deviceSize}
          isVisible={isInView}
          hasLoaded={hasLoaded}
        />
      ) : (
        <DesktopLayout isVisible={isInView} hasLoaded={hasLoaded} />
      )}
    </div>
  );
}
