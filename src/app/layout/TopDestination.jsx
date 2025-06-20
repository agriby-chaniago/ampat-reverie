'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Reusable Slide Content Component
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 */
const SlideContent = ({
  title,
  description,
}) => {
  return (
    <div className="relative h-full w-full flex flex-col justify-end pb-36">
      <div className="px-16">
        <h2 className="text-white font-[Gully] font-normal text-[100px] leading-[100px] max-w-[800px] mb-[30px]">
          {title}
        </h2>
        <p className="text-white font-[Gully] font-light text-[45px] leading-[55px] max-w-[756px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function TopDestination() {
  return (
    <div className="h-screen w-full col-start-1 col-end-5 row-start-1 row-end-4 bg-blue-500/80">
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <SlideContent
            title="Top Destination"
            description="Explore the most popular travel destinations around the world. From the bustling streets of Tokyo to the serene beaches of Bali, discover your next adventure."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent
            title="Tokyo"
            description="A vibrant metropolis blending tradition and innovation. Experience sushi, temples, and neon lights."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent
            title="Bali"
            description="A serene island paradise offering beaches, culture, and tropical retreats for every traveler."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent
            title="Paris"
            description="The city of lights and love. Explore iconic landmarks, cuisine, and romantic streets."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent
            title="New York"
            description="A world capital of culture and commerce. Skyscrapers, Broadway, and endless energy await."
          />
        </SwiperSlide>

        <SwiperSlide>
          <SlideContent
            title="Barcelona"
            description="A city of art and sun. Discover Gaudí's masterpieces and Mediterranean charm."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
