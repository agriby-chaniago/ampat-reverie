"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  return (
    <footer className='relative w-full flex flex-col text-white pt-48 md:pt-48'>
      {/* Container Judul */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative z-10 px-6 md:px-12'
      >
        <h1
          className='
        font-[Gully] font-normal
        text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px]
        leading-tight tracking-[0.05em]
        text-left
      '
        >
          AMPAT <br /> REVERIE
        </h1>
      </motion.div>

      {/* Container Deskripsi */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className='relative z-10 px-6 md:px-12 md:mt-12'
      >
        <p
          className='
            max-w-xl
            text-[18px] sm:text-[22px] md:text-[26px]
            leading-snug
            text-right
            ml-auto
          '
        >
          Discover the untouched beauty of <br />
          Raja Ampat.
        </p>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className='relative z-10 flex flex-col sm:flex-row flex-wrap justify-center md:justify-evenly gap-12 px-6 md:px-12 py-16'
      >
        <FooterColumn
          title='Ampat Reverie'
          items={[
            { label: "About", href: "/#about" },
            { label: "Top Destination", href: "/#top-destination" },
            { label: "Why Visit?", href: "/#why-visit" },
            { label: "Gallery", href: "/#gallery" },
          ]}
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
        />
        <FooterColumn
          title='Our Company'
          items={[
            { label: "Jl. Laut Biru No. 88, Waisai", href: "#" },
            { label: "Raja Ampat, Indonesia", href: "#" },
            { label: "+62 812 3456 7890", href: "tel:+6281234567890" },
            { label: "hello@ampatreverie.com", href: "mailto:hello@ampatreverie.com" },
          ]}
        />
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className='relative z-10 w-full px-6 md:px-12 pb-10 text-center md:text-right'
      >
        <p className='font-[Gully] font-light text-[14px] sm:text-[16px] leading-relaxed'>
          © 2025 All rights reserved.
          <br />
          Ampat Reverie - Inspired by nature. Built for explorers.
        </p>
      </motion.div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
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
        // Use the direct approach which is more reliable
        setTimeout(() => {
          // Simple and direct approach - navigate directly to the slide index
          const slides = [
            "arborek",
            "misool",
            "pasir-timbul",
            "piaynemo",
            "teluk-kabui",
            "wayag"
          ];
          
          // Find the slide index
          const slideIndex = slides.indexOf(slideId);
          
          if (slideIndex >= 0) {
            // Access the swiper instance directly
            const swiperElement = document.querySelector('#top-destination .swiper-container')?.swiper;
            
            if (swiperElement) {
              swiperElement.slideTo(slideIndex);
              console.log(`Directly navigated to slide ${slideId} at index ${slideIndex}`);
            } else {
              // Alternative method - use the global function
              if (window.navigateToSlide) {
                window.navigateToSlide(slideId);
                console.log(`Used global function to navigate to ${slideId}`);
              } else {
                console.error("Neither Swiper instance nor global function found");
              }
            }
          } else {
            console.warn(`Invalid slide ID: ${slideId}`);
          }
        }, 800); // Wait for scroll to complete
      }
    } else {
      console.warn(`Element with ID "${targetId}" not found`);
    }
  };

  return (
    <div className='w-full sm:w-auto max-w-xs flex flex-col space-y-2 text-center sm:text-left'>
      <h2 className='text-lg font-semibold mb-2'>{title}</h2>
      <ul className='space-y-1'>
        {items.map((item, idx) => (
          <li
            key={idx}
            className='hover:text-gray-300 transition duration-300 cursor-pointer'
          >
            {item.href.startsWith("tel:") || item.href.startsWith("mailto:") ? (
              <a 
                href={item.href} 
                className="hover:text-gray-300 transition duration-300"
              >
                {item.label}
              </a>
            ) : (
              <a 
                href={item.href} 
                onClick={(e) => handleScrollToSection(e, item.href, item.slideId)}
                className="hover:text-gray-300 transition duration-300"
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
