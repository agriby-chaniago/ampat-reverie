"use client";

import React, { useRef, useEffect, useState } from "react";
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

const DesktopSlideContent = ({ title, description }) => (
  <div className='relative h-full w-full flex flex-col justify-end pb-24 px-16 bg-black/40'>
    <h2 className='text-white font-[Gully] font-normal text-[100px] leading-[100px] max-w-[800px] mb-[30px]'>
      {title}
    </h2>
    <p className='text-white font-[Gully] font-light mt-[15px] text-[45px] leading-[55px] max-w-[756px]'>
      {description}
    </p>
  </div>
);

const MobileSlideContent = ({ title, description }) => (
  <div className='absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[2px] p-4 sm:p-6'>
    <h2 className='text-white font-[Gully] font-normal text-2xl sm:text-3xl leading-tight mb-1 sm:mb-2'>
      {title}
    </h2>
    <p className='text-white font-[Gully] font-light text-sm sm:text-base leading-snug line-clamp-2 sm:line-clamp-3'>
      {description}
    </p>
  </div>
);

const SlideContent = ({ title, description, isMobile, isTablet }) => {
  if (!isMobile && !isTablet) {
    return <DesktopSlideContent title={title} description={description} />;
  }
  return <MobileSlideContent title={title} description={description} />;
};

const SectionHeader = () => (
  <div className='mt-16 px-4 sm:px-6 mb-6 sm:mb-8'>
    <h2 className='text-white font-[Gully] font-normal text-3xl sm:text-4xl mb-2'>
      Top Destination
    </h2>
    <p className='text-white font-[Gully] font-light text-lg sm:text-xl'>
      Explore the best of Raja Ampat
    </p>
  </div>
);

const GalleryItem = ({ slide, isMobile, isTablet }) => (
  <a
    href={slide.background}
    className='relative block h-[260px] sm:h-[320px] w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg'
    data-lg-size='1400-800'
    data-sub-html={`${slide.title} - ${slide.description}`}
    style={{ backgroundImage: `url(${slide.background})` }}
  >
    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
    <SlideContent
      title={slide.title}
      description={slide.description}
      isMobile={isMobile}
      isTablet={isTablet}
    />
  </a>
);

const MobileLayout = ({ galleryItems, deviceSize }) => {
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";

  return (
    <div
      id='top-destination'
      className='min-h-[80vh] py-8 sm:py-12 w-full px-4 sm:px-6'
    >
      <SectionHeader />
      <LightGallery
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={galleryItems}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {SLIDES_DATA.map((slide) => (
            <GalleryItem
              key={slide.id}
              slide={slide}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </div>
      </LightGallery>
    </div>
  );
};

const DesktopLayout = () => {
  const swiperRef = useRef(null);

  return (
    <div id='top-destination' className='h-screen w-full'>
      <Swiper
        ref={swiperRef}
        direction='vertical'
        pagination={SWIPER_CONFIG.pagination}
        modules={[Pagination, Autoplay]}
        autoplay={SWIPER_CONFIG.autoplay}
        className='h-full w-full swiper-container'
      >
        {SLIDES_DATA.map((slide) => (
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
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function TopDestination() {
  const deviceSize = useDeviceSize();
  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";
  const isSmallDevice = isMobile || isTablet;

  const galleryItems = SLIDES_DATA.map((slide) => ({
    src: slide.background,
    thumb: slide.background,
    subHtml: `${slide.title} - ${slide.description}`,
  }));

  if (isSmallDevice) {
    return <MobileLayout galleryItems={galleryItems} deviceSize={deviceSize} />;
  }

  return <DesktopLayout />;
}
