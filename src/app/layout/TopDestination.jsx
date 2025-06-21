"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Slide data array
const slides = [
  {
    title: "Piaynemo",
    description:
      "Famous for its breathtaking karst island formations and panoramic viewpoints over turquoise lagoons.",
    background: "url('/images/piaynemo.jpg')",
  },
  {
    title: "Wayag",
    description:
      "Iconic for its dramatic limestone islets and crystal-clear waters, often seen as the symbol of Raja Ampat.",
    background: "url('/images/wayag.jpg')",
  },
  {
    title: "Misool",
    description:
      "A remote paradise known for its vibrant coral reefs, hidden lagoons, and marine biodiversity.",
    background: "url('/images/misool.jpg')",
  },
  {
    title: "Arborek",
    description:
      "A small island village offering rich cultural experiences and world-class snorkeling just off its jetty.",
    background: "url('/images/arborek.jpg')",
  },
  {
    title: "Teluk Kabui",
    description:
      "A serene bay surrounded by lush cliffs and dotted with unique rock formations and hidden coves.",
    background: "url('/images/teluk-kabui.jpg')",
  },
  {
    title: "Pasir Timbul",
    description:
      "A stunning sandbar that appears only during low tide, perfect for photos and peaceful walks in the sea.",
    background: "url('/images/pasir-timbul.jpg')",
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
  return (
    <div
      id='top-destination'
      className='h-screen w-full col-start-1 col-end-5 row-start-1 row-end-4'
    >
      <Swiper
        direction='vertical'
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='h-full w-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className='h-full w-full bg-cover bg-center relative'
              style={{ backgroundImage: slide.background }}
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
