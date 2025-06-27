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

  // Updated position values with increased top values
  const tailwindPositions = [
    "w-[492px] h-[328px] left-[64px] top-[180px]",      // Foto 1 (moved down)
    "w-[347px] h-[616px] left-[588px] top-[180px]",     // Foto 2 (moved down)
    "w-[414px] h-[322px] left-[967px] top-[180px]",     // Foto 3 (moved down)
    "w-[490px] h-[256px] left-[64px] top-[540px]",      // Foto 4 (moved down)
    "w-[414px] h-[264px] left-[967px] top-[540px]",     // Foto 5 (moved down)
    "w-[444px] h-[616px] left-[1412px] top-[180px]",    // Foto 6 (moved down)
  ];

  return (
    <div
      id="gallery"
      className="pt-48 relative h-[1080px] w-full bg-cover bg-center" // Increased top padding
      style={{ backgroundImage: "url('/assets/img/bg-gallery.jpg')" }}
    >
      <h2 className="absolute left-[100px] top-[236px] w-[1000px] h-[100px] text-center text-white font-[Gully] font-normal text-[80px] leading-[100px] tracking-[0.05em]">
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
