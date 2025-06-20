'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Reusable content component
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
        <h2
          style={{
            fontFamily: 'Gully, sans-serif',
            fontWeight: 400,
            fontSize: '100px',
            lineHeight: '100px',
            letterSpacing: '0%',
            color: 'white',
            width: '100%',
            maxWidth: '800px',
            marginBottom: '30px',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: 'Gully, sans-serif',
            fontWeight: 300,
            fontSize: '45px',
            lineHeight: '55px',
            letterSpacing: '0%',
            color: 'white',
            width: '100%',
            maxWidth: '756px',
          }}
        >
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
        {/* Slide 1 */}
        <SwiperSlide>
          <SlideContent
            title="Top Destination"
            description="Explore the most popular travel destinations around the world. From the bustling streets of Tokyo to the serene beaches of Bali, discover your next adventure."
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <SlideContent
            title="Tokyo"
            description="A vibrant metropolis blending tradition and innovation. Experience sushi, temples, and neon lights."
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <SlideContent
            title="Bali"
            description="A serene island paradise offering beaches, culture, and tropical retreats for every traveler."
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <SlideContent
            title="Paris"
            description="The city of lights and love. Explore iconic landmarks, cuisine, and romantic streets."
          />
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <SlideContent
            title="New York"
            description="A world capital of culture and commerce. Skyscrapers, Broadway, and endless energy await."
          />
        </SwiperSlide>

        {/* Slide 6 */}
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
