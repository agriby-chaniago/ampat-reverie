"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
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

  return (
    <footer className='relative w-full flex flex-col text-white pt-8 sm:pt-16 md:pt-24 lg:pt-32'>
      {/* Container Judul - Further reduced size for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative z-10 px-3 sm:px-6 md:px-12'
      >
        <h1
          className='
            font-[Gully] font-normal
            text-[28px] xs:text-[34px] sm:text-[56px] md:text-[70px] lg:text-[90px]
            leading-tight tracking-[0.05em]
            text-left
          '
        >
          AMPAT {isMobile ? ' ' : <br />} REVERIE
        </h1>
      </motion.div>

      {/* Container Deskripsi - Further reduced margin for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className='relative z-10 px-3 sm:px-6 md:px-12 mt-1 sm:mt-4 md:mt-6 lg:mt-8'
      >
        <p
          className={`
            max-w-xl
            text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px]
            leading-snug
            ${isMobile ? 'text-center mx-auto' : 'text-right ml-auto'}
          `}
        >
          Discover the untouched beauty of {isMobile ? '' : <br />}
          Raja Ampat.
        </p>
      </motion.div>

      {/* Footer Links - 3-column grid for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className='relative z-10 px-3 sm:px-6 md:px-12 py-5 sm:py-10 md:py-12'
      >
        {isMobile ? (
          // Mobile 3-column layout
          <div className="grid grid-cols-3 gap-x-2 gap-y-3">
            <CompactFooterColumn
              title='Ampat Reverie'
              items={[
                { label: "About", href: "/#about" },
                { label: "Top Destination", href: "/#top-destination" },
                { label: "Why Visit?", href: "/#why-visit" },
                { label: "Gallery", href: "/#gallery" },
              ]}
            />
            <CompactFooterColumn
              title='Explore'
              items={[
                { label: "Wayag", href: "#top-destination", slideId: "wayag" },
                { label: "Piaynemo", href: "#top-destination", slideId: "piaynemo" },
                { label: "Misool", href: "#top-destination", slideId: "misool" },
                { label: "Arborek", href: "#top-destination", slideId: "arborek" },
                { label: "Pasir Timbul", href: "#top-destination", slideId: "pasir-timbul" },
                { label: "Teluk Kabui", href: "#top-destination", slideId: "teluk-kabui" },
              ]}
            />
            <CompactFooterColumn
              title='Company'
              items={[
                { label: "Waisai, Raja Ampat", href: "#" },
                { label: "Indonesia", href: "#" },
                { label: "+62 812 345 6789", href: "tel:+6281234567890" },
                { label: "hello@ampatreverie.com", href: "mailto:hello@ampatreverie.com" },
              ]}
            />
          </div>
        ) : (
          // Tablet and desktop layout
          <div className="flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-12">
            <FooterColumn
              title='Ampat Reverie'
              items={[
                { label: "About", href: "/#about" },
                { label: "Top Destination", href: "/#top-destination" },
                { label: "Why Visit?", href: "/#why-visit" },
                { label: "Gallery", href: "/#gallery" },
              ]}
              isMobile={isMobile}
            />
            <FooterColumn
              title='Explore Raja Ampat'
              items={[
                { label: "Wayag Island", href: "#top-destination", slideId: "wayag" },
                { label: "Piaynemo Viewpoint", href: "#top-destination", slideId: "piaynemo" },
                { label: "Misool Eco Area", href: "#top-destination", slideId: "misool" },
                { label: "Arborek Village", href: "#top-destination", slideId: "arborek" }, 
                { label: "Pasir Timbul Spot", href: "#top-destination", slideId: "pasir-timbul" },
                { label: "Teluk Kabui", href: "#top-destination", slideId: "teluk-kabui" },
              ]}
              isMobile={isMobile}
            />
            <FooterColumn
              title='Our Company'
              items={[
                { label: "Jl. Laut Biru No. 88, Waisai", href: "#" },
                { label: "Raja Ampat, Indonesia", href: "#" },
                { label: "+62 812 3456 7890", href: "tel:+6281234567890" },
                { label: "hello@ampatreverie.com", href: "mailto:hello@ampatreverie.com" },
              ]}
              isMobile={isMobile}
            />
          </div>
        )}
      </motion.div>

      {/* Copyright - Further reduced padding for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className='relative z-10 w-full px-3 sm:px-6 md:px-12 pb-3 sm:pb-6 md:pb-8'
      >
        <p className={`font-[Gully] font-light text-[10px] xs:text-[12px] sm:text-[14px] leading-relaxed ${isMobile ? 'text-center' : 'text-center md:text-right'}`}>
          © 2025 All rights reserved.
          <br />
          Ampat Reverie - Inspired by nature. Built for explorers.
        </p>
      </motion.div>
    </footer>
  );
}

// Regular Footer Column for tablet and desktop
function FooterColumn({ title, items, isMobile, className = '' }) {
  const handleScrollToSection = (e, href, slideId) => {
    e.preventDefault();
    
    // First part: Scroll to the section
    const targetId = href.replace("/#", "").replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: "smooth" });
      
      // If we have a slideId, handle slide navigation
      if (slideId) {
        setTimeout(() => {
          const slides = ["arborek", "misool", "pasir-timbul", "piaynemo", "teluk-kabui", "wayag"];
          const slideIndex = slides.indexOf(slideId);
          
          if (slideIndex >= 0) {
            const swiperElement = document.querySelector('#top-destination .swiper-container')?.swiper;
            
            if (swiperElement) {
              swiperElement.slideTo(slideIndex);
            } else if (window.navigateToSlide) {
              window.navigateToSlide(slideId);
            }
          }
        }, 800);
      }
    }
  };

  return (
    <div className={`w-full sm:w-auto max-w-xs flex flex-col space-y-2 text-center sm:text-left ${className}`}>
      <h2 className='text-base sm:text-lg font-semibold mb-1 sm:mb-2'>{title}</h2>
      <ul className='space-y-1 sm:space-y-2'>
        {items.map((item, idx) => (
          <li
            key={idx}
            className='hover:text-gray-300 transition duration-300 cursor-pointer'
          >
            {item.href.startsWith("tel:") || item.href.startsWith("mailto:") ? (
              <a 
                href={item.href} 
                className="hover:text-gray-300 transition duration-300 text-sm"
              >
                {item.label}
              </a>
            ) : (
              <a 
                href={item.href} 
                onClick={(e) => handleScrollToSection(e, item.href, item.slideId)}
                className="hover:text-gray-300 transition duration-300 text-sm"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Extra Compact Footer Column for mobile 3-column layout
function CompactFooterColumn({ title, items }) {
  const handleScrollToSection = (e, href, slideId) => {
    e.preventDefault();
    
    const targetId = href.replace("/#", "").replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      if (slideId) {
        setTimeout(() => {
          const slides = ["arborek", "misool", "pasir-timbul", "piaynemo", "teluk-kabui", "wayag"];
          const slideIndex = slides.indexOf(slideId);
          
          if (slideIndex >= 0) {
            const swiperElement = document.querySelector('#top-destination .swiper-container')?.swiper;
            
            if (swiperElement) {
              swiperElement.slideTo(slideIndex);
            } else if (window.navigateToSlide) {
              window.navigateToSlide(slideId);
            }
          }
        }, 800);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className='text-xs font-semibold mb-1'>{title}</h2>
      <ul className='space-y-1'>
        {items.map((item, idx) => (
          <li
            key={idx}
            className='hover:text-gray-300 transition duration-300 cursor-pointer'
          >
            {item.href.startsWith("tel:") || item.href.startsWith("mailto:") ? (
              <a 
                href={item.href} 
                className="hover:text-gray-300 transition duration-300 text-[10px]"
              >
                {item.label}
              </a>
            ) : (
              <a 
                href={item.href} 
                onClick={(e) => handleScrollToSection(e, item.href, item.slideId)}
                className="hover:text-gray-300 transition duration-300 text-[10px]"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
