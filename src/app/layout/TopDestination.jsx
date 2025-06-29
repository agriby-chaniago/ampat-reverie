"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Slide data array
const slides = [
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

// Responsive Slide Content Component
const SlideContent = ({ title, description, isMobile, isTablet }) => {
  // For desktop (full screen)
  if (!isMobile && !isTablet) {
    return (
      <div className='relative h-full w-full flex flex-col justify-end pb-24 px-16 bg-black/40'>
        <h2 className='text-white font-[Gully] font-normal text-[100px] leading-[100px] max-w-[800px] mb-[30px]'>
          {title}
        </h2>
        <p className='text-white font-[Gully] font-light mt-[15px] text-[45px] leading-[55px] max-w-[756px]'>
          {description}
        </p>
      </div>
    );
  }

  // For mobile and tablet (card layout)
  return (
    <div className='absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-[2px] p-4 sm:p-6'>
      <h2 className='text-white font-[Gully] font-normal text-2xl sm:text-3xl leading-tight mb-1 sm:mb-2'>
        {title}
      </h2>
      <p className='text-white font-[Gully] font-light text-sm sm:text-base leading-snug line-clamp-2 sm:line-clamp-3'>
        {description}
      </p>
    </div>
  );
};

export default function TopDestination() {
  const swiperRef = useRef(null);
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
  const isSmallDevice = isMobile || isTablet;

  // Navigation function
  const navigateToSlide = (slideId) => {
    if (!swiperRef.current || !swiperRef.current.swiper) {
      console.error("Swiper not initialized yet!");
      return;
    }

    const slideIndex = slides.findIndex((slide) => slide.id === slideId);
    if (slideIndex >= 0) {
      console.log(`Navigating to slide: ${slideId} at index ${slideIndex}`);
      swiperRef.current.swiper.slideTo(slideIndex);
      return true;
    } else {
      console.warn(`No slide found with ID: ${slideId}`);
      return false;
    }
  };

  useEffect(() => {
    // Expose the navigation function globally
    window.navigateToSlide = navigateToSlide;

    return () => {
      delete window.navigateToSlide;
    };
  }, []);

  return (
    <div
      id='top-destination'
      className={`${isSmallDevice ? 'min-h-[80vh] py-8 sm:py-12' : 'h-screen'} w-full`}
    >
      {isSmallDevice && (
        <div className="px-4 sm:px-6 mb-6 sm:mb-8">
          <h2 className="text-white font-[Gully] font-normal text-3xl sm:text-4xl mb-2">
            Top Destination
          </h2>
          <p className="text-white font-[Gully] font-light text-lg sm:text-xl">
            Explore the best of Raja Ampat
          </p>
        </div>
      )}

      <Swiper
        ref={swiperRef}
        direction={isSmallDevice ? 'horizontal' : 'vertical'}
        pagination={{
          clickable: true,
          dynamicBullets: isSmallDevice,
        }}
        navigation={isTablet}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={isSmallDevice ? {
          // Mobile breakpoints
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          }
        } : {}}
        className={`${isSmallDevice ? 'destination-card-swiper px-4 sm:px-6' : 'h-full w-full swiper-container'}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} id={`slide-${slide.id}`}>
            {isSmallDevice ? (
              // Card layout for mobile and tablet
              <div
                className="h-[260px] sm:h-[320px] w-full bg-cover bg-center rounded-xl overflow-hidden relative shadow-lg"
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <SlideContent
                  title={slide.title}
                  description={slide.description}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </div>
            ) : (
              // Full screen layout for desktop
              <div
                className='h-full w-full bg-cover bg-center relative'
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <SlideContent
                  title={slide.title}
                  description={slide.description}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
