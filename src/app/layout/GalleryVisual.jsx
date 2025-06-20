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
    {
      src: "/assets/img/GalleryVisual_Photo1.jpg",
      thumb: "/assets/img/GalleryVisual_Photo1.jpg",
      subHtml: `<h4>Gugusan pasir dari atas</h4><p>Keindahan bentuk alami pasir laut dari pandangan drone</p>`,
    },
    {
      src: "/assets/img/GalleryVisual_Photo2.jpg",
      thumb: "/assets/img/GalleryVisual_Photo2.jpg",
      subHtml: `<h4>Pulau-pulau karst tropis</h4><p>Panorama gugusan pulau kecil yang hijau dan eksotis</p>`,
    },
    {
      src: "/assets/img/GalleryVisual_Photo3.jpg",
      thumb: "/assets/img/GalleryVisual_Photo3.jpg",
      subHtml: `<h4>Teluk sempit berair jernih</h4><p>Air berwarna turquoise diapit tebing hijau</p>`,
    },
    {
      src: "/assets/img/GalleryVisual_Photo4.jpg",
      thumb: "/assets/img/GalleryVisual_Photo4.jpg",
      subHtml: `<h4>Pemandangan dari atas laguna</h4><p>Panorama air biru kehijauan dan pulau karst dari ketinggian</p>`,
    },
    {
      src: "/assets/img/GalleryVisual_Photo5.jpg",
      thumb: "/assets/img/GalleryVisual_Photo5.jpg",
      subHtml: `<h4>Karang dan kehidupan laut</h4><p>Snorkeling dan terumbu karang berwarna-warni</p>`,
    },
    {
      src: "/assets/img/GalleryVisual_Photo6.jpg",
      thumb: "/assets/img/GalleryVisual_Photo6.jpg",
      subHtml: `<h4>Laguna tersembunyi</h4><p>Spot tersembunyi yang tenang di balik tebing</p>`,
    },
  ];

  return (
    <div
      className='pt-32 bg-cover bg-center min-h-screen'
      style={{ backgroundImage: "url('/assets/img/bg-gallery.jpg')" }}
    >
      <h2 className='text-center text-white text-4xl font-bold mb-10 tracking-wide'>
        Gallery Visual
      </h2>

      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4'>
        {dynamicEl.map((img, idx) => (
          <div
            key={idx}
            className='rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition'
            onClick={() => galleryRef.current?.openGallery(idx)}
          >
            <img src={img.thumb} alt='' className='w-full h-60 object-cover' />
          </div>
        ))}
      </div>

      <LightGallery
        onInit={(ref) => (galleryRef.current = ref.instance)}
        dynamic
        dynamicEl={dynamicEl}
        plugins={[lgThumbnail, lgZoom]}
        mode='lg-fade'
      />
    </div>
  );
}
