"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function GalleryVisual() {
  const galleryRef = useRef(null);

  const dynamicEl = Array.from({ length: 15 }, (_, i) => ({
    src: `/assets/img/gallery/GalleryVisual_Photo${i + 1}.png`,
    thumb: `/assets/img/gallery/GalleryVisual_Photo${i + 1}.png`,
  }));

  const visibleImages = dynamicEl.slice(0, 8);

  return (
    <section id='gallery' className='w-full min-h-screen pt-28 md:pt-48 px-4 sm:px-6 pb-24 md:pb-32'>
      <Header />
      <GalleryFlex images={visibleImages} galleryRef={galleryRef} />
      <LightGallery
        onInit={(ref) => (galleryRef.current = ref.instance)}
        dynamic
        dynamicEl={dynamicEl}
        plugins={[lgThumbnail, lgZoom]}
        mode='lg-fade'
      />
    </section>
  );
}

function Header() {
  return (
    <motion.header 
      className='text-center mb-12 md:mb-16'
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className='text-white font-[Gully] font-normal text-5xl sm:text-6xl md:text-[80px] leading-tight md:leading-[100px] tracking-[0.05em]'>
        Gallery Visual
      </h2>
      <p className='text-gray-300 mt-4 max-w-2xl mx-auto text-lg'>
        Explore the breathtaking beauty of Raja Ampat through our collection
      </p>
    </motion.header>
  );
}

function GalleryFlex({ images, galleryRef }) {
  return (
    <div className='max-w-7xl mx-auto'>
      {/* Main Gallery Grid */}
      <div className='flex flex-wrap justify-center gap-4 md:gap-5 mb-8'>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: idx * 0.1,
            }}
            className='relative border border-white/70 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform flex-shrink-0'
            onClick={() => galleryRef.current?.openGallery(idx)}
          >
            <img
              src={img.thumb}
              alt={`Gallery Visual ${idx + 1}`}
              className='block h-64 w-auto max-w-full object-contain'
            />
            <div className='absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300' />
          </motion.div>
        ))}
      </div>

      {/* View All Button - now with improved spacing */}
      <motion.div 
        className="mt-6 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      >
        <button 
          onClick={() => galleryRef.current?.openGallery(0)}
          className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full border border-white/30 transition-all duration-300 font-[Gully] backdrop-blur-sm shadow-lg"
        >
          View All Photos
        </button>
      </motion.div>
    </div>
  );
}
