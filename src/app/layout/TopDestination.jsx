"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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

// Reusable Slide Content Component
const SlideContent = ({ title, description }) => (
  <div className='relative h-full w-full flex flex-col justify-end pb-24 px-16 bg-black/40'>
    <h2 className='text-white font-[Gully] font-normal text-[100px] leading-[100px] max-w-[800px] mb-[30px]'>
      {title}
    </h2>
    <p className='text-white font-[Gully] font-light mt-[15px] text-[45px] leading-[55px] max-w-[756px]'>
      {description}
    </p>
  </div>
);

export default function TopDestination() {
  const swiperRef = useRef(null);

  // Simplified direct navigation function
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
      className='h-screen w-full col-start-1 col-end-5 row-start-1 row-end-4'
    >
    
      <Swiper
        ref={swiperRef}
        direction='vertical'
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className='h-full w-full swiper-container' // Added class for direct selection
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} id={`slide-${slide.id}`}>
            <div
              className='h-full w-full bg-cover bg-center relative'
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <SlideContent
                title={slide.title}
                description={slide.description}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
