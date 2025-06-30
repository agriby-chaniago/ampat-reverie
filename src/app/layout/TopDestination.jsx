"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

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

const SlideContent = ({ title, description, isMobile, isTablet }) => {
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = deviceSize === "mobile";
  const isTablet = deviceSize === "tablet";
  const isSmallDevice = isMobile || isTablet;

  const galleryItems = slides.map((s) => ({
    src: s.background,
    thumb: s.background,
    subHtml: `<h4>${s.title}</h4><p>${s.description}</p>`,
  }));

  if (isSmallDevice) {
    return (
      <div
        id='top-destination'
        className='min-h-[80vh] py-8 sm:py-12 w-full px-4 sm:px-6'
      >
        <div className='mt-16 px-4 sm:px-6 mb-6 sm:mb-8'>
          <h2 className='text-white font-[Gully] font-normal text-3xl sm:text-4xl mb-2'>
            Top Destination
          </h2>
          <p className='text-white font-[Gully] font-light text-lg sm:text-xl'>
            Explore the best of Raja Ampat
          </p>
        </div>

        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={galleryItems}
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {slides.map((slide) => (
              <a
                key={slide.id}
                href={slide.background}
                className='relative block h-[260px] sm:h-[320px] w-full bg-cover bg-center rounded-xl overflow-hidden shadow-lg'
                data-lg-size='1400-800'
                data-sub-html={`<h4>${slide.title}</h4><p>${slide.description}</p>`}
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
            ))}
          </div>
        </LightGallery>
      </div>
    );
  }

  return (
    <div id='top-destination' className='h-screen w-full'>
      <Swiper
        ref={swiperRef}
        direction='vertical'
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className='h-full w-full swiper-container'
      >
        {slides.map((slide) => (
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
}
