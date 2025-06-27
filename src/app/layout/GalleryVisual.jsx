"use client";

import { useRef } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function GalleryVisual() {
  const galleryRef = useRef(null);

  const dynamicEl = [
    { src: "/assets/img/gallery/GalleryVisual_Photo1.jpg", thumb: "/assets/img/gallery/GalleryVisual_Photo1.jpg" },
    { src: "/assets/img/gallery/GalleryVisual_Photo2.jpg", thumb: "/assets/img/gallery/GalleryVisual_Photo2.jpg" },
    { src: "/assets/img/gallery/GalleryVisual_Photo3.jpg", thumb: "/assets/img/gallery/GalleryVisual_Photo3.jpg" },
    { src: "/assets/img/gallery/GalleryVisual_Photo4.jpg", thumb: "/assets/img/gallery/GalleryVisual_Photo4.jpg" },
    { src: "/assets/img/gallery/GalleryVisual_Photo5.jpg", thumb: "/assets/img/gallery/GalleryVisual_Photo5.jpg" },
    { src: "/assets/img/gallery/GalleryVisual_Photo6.jpg", thumb: "/assets/img/gallery/GalleryVisual_Photo6.jpg" },
  ];

  // Tailwind classes untuk ukuran dan posisi
  const tailwindPositions = [
    "w-[492px] h-[328px] left-[64px] top-0",       // Foto 1
    "w-[347px] h-[616px] left-[588px] top-0",      // Foto 2
    "w-[414px] h-[322px] left-[967px] top-0",      // Foto 3
    "w-[490px] h-[256px] left-[64px] top-[360px]", // Foto 4
    "w-[414px] h-[264px] left-[967px] top-[360px]",// Foto 5
    "w-[444px] h-[616px] left-[1412px] top-0",     // Foto 6
  ];

  return (
    <div
      id="gallery"
      className="pt-32 relative h-[1000px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/img/bg-gallery.jpg')" }}
    >
      <h2 className="text-center text-white text-4xl font-bold mb-10 tracking-wide">
        Gallery Visual
      </h2>

      <div className="relative max-w-[1920px] mx-auto">
        {dynamicEl.map((img, idx) => (
          <div
            key={idx}
            className={`absolute border border-white rounded-[20px] overflow-hidden shadow-md cursor-pointer hover:scale-105 transition ${tailwindPositions[idx]}`}
            onClick={() => galleryRef.current?.openGallery(idx)}
          >
            <img src={img.thumb} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <LightGallery
        onInit={(ref) => (galleryRef.current = ref.instance)}
        dynamic
        dynamicEl={dynamicEl}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
      />
    </div>
  );
}
