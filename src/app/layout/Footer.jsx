"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLazyLoad } from "../hooks/useLazyLoad";
import { LazyLoadingSkeleton } from "../components/LazyLoadingSkeleton";

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
};

const SLIDES_ORDER = [
  "arborek",
  "misool",
  "pasir-timbul",
  "piaynemo",
  "teluk-kabui",
  "wayag",
];

const FOOTER_DATA = {
  ampatReverie: [
    { label: "About", href: "/#about" },
    { label: "Top Destination", href: "/#top-destination" },
    { label: "Why Visit?", href: "/#why-visit" },
    { label: "Gallery", href: "/#gallery" },
  ],
  explore: [
    { label: "Wayag Island", href: "#top-destination", slideId: "wayag" },
    {
      label: "Piaynemo Viewpoint",
      href: "#top-destination",
      slideId: "piaynemo",
    },
    { label: "Misool Eco Area", href: "#top-destination", slideId: "misool" },
    { label: "Arborek Village", href: "#top-destination", slideId: "arborek" },
    {
      label: "Pasir Timbul Spot",
      href: "#top-destination",
      slideId: "pasir-timbul",
    },
    { label: "Teluk Kabui", href: "#top-destination", slideId: "teluk-kabui" },
  ],
  exploreMobile: [
    { label: "Wayag", href: "#top-destination", slideId: "wayag" },
    { label: "Piaynemo", href: "#top-destination", slideId: "piaynemo" },
    { label: "Misool", href: "#top-destination", slideId: "misool" },
    { label: "Arborek", href: "#top-destination", slideId: "arborek" },
    {
      label: "Pasir Timbul",
      href: "#top-destination",
      slideId: "pasir-timbul",
    },
    { label: "Teluk Kabui", href: "#top-destination", slideId: "teluk-kabui" },
  ],
  company: [
    { label: "Jl. Laut Biru No. 88, Waisai", href: "#" },
    { label: "Raja Ampat, Indonesia", href: "#" },
    { label: "+62 812 3456 7890", href: "tel:+6281234567890" },
    { label: "hello@ampatreverie.com", href: "mailto:hello@ampatreverie.com" },
  ],
  companyMobile: [
    { label: "Waisai, Raja Ampat", href: "#" },
    { label: "Indonesia", href: "#" },
    { label: "+62 812 345 6789", href: "tel:+6281234567890" },
    { label: "hello@ampatreverie.com", href: "mailto:hello@ampatreverie.com" },
  ],
};

const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.MOBILE) {
        setDeviceSize("mobile");
      } else if (width < BREAKPOINTS.TABLET) {
        setDeviceSize("tablet");
      } else {
        setDeviceSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceSize;
};

const handleScrollToSection = (e, href, slideId) => {
  e.preventDefault();

  const targetId = href.replace("/#", "").replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });

    if (slideId) {
      setTimeout(() => {
        const slideIndex = SLIDES_ORDER.indexOf(slideId);

        if (slideIndex >= 0) {
          const swiperElement = document.querySelector(
            "#top-destination .swiper-container"
          )?.swiper;

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

const FooterTitle = ({ isMobile, isVisible = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className='relative z-10 px-3 sm:px-6 md:px-12 mt-10'
  >
    <h1 className='font-[Gully] font-normal text-[28px] xs:text-[34px] sm:text-[56px] md:text-[70px] lg:text-[90px] leading-tight tracking-[0.05em] text-left'>
      AMPAT {isMobile ? " " : <br />} REVERIE
    </h1>
  </motion.div>
);

const FooterDescription = ({ isMobile, isVisible = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className='relative z-10 px-3 sm:px-6 md:px-12 mt-1 sm:mt-4 md:mt-6 lg:mt-8'
  >
    <p
      className={`max-w-xl text-[14px] xs:text-[16px] sm:text-[20px] md:text-[24px] leading-snug ${
        isMobile ? "text-center mx-auto" : "text-right ml-auto"
      }`}
    >
      Discover the untouched beauty of {isMobile ? "" : <br />}
      Raja Ampat.
    </p>
  </motion.div>
);

const FooterLink = ({ item, className = "" }) => {
  if (item.href.startsWith("tel:") || item.href.startsWith("mailto:")) {
    return (
      <a
        href={item.href}
        className={`hover:text-gray-300 transition duration-300 ${className}`}
      >
        {item.label}
      </a>
    );
  }

  return (
    <a
      href={item.href}
      onClick={(e) => handleScrollToSection(e, item.href, item.slideId)}
      className={`hover:text-gray-300 transition duration-300 ${className}`}
    >
      {item.label}
    </a>
  );
};

const FooterColumn = ({ title, items, className = "" }) => (
  <div
    className={`w-full sm:w-auto max-w-xs flex flex-col space-y-2 text-center sm:text-left ${className}`}
  >
    <h2 className='text-base sm:text-lg font-semibold mb-1 sm:mb-2'>{title}</h2>
    <ul className='space-y-1 sm:space-y-2'>
      {items.map((item, idx) => (
        <li
          key={idx}
          className='hover:text-gray-300 transition duration-300 cursor-pointer'
        >
          <FooterLink item={item} className='text-sm' />
        </li>
      ))}
    </ul>
  </div>
);

const CompactFooterColumn = ({ title, items }) => (
  <div className='flex flex-col'>
    <h2 className='text-xs font-semibold mb-1'>{title}</h2>
    <ul className='space-y-1'>
      {items.map((item, idx) => (
        <li
          key={idx}
          className='hover:text-gray-300 transition duration-300 cursor-pointer'
        >
          <FooterLink item={item} className='text-[10px]' />
        </li>
      ))}
    </ul>
  </div>
);

const FooterColumns = ({ isMobile, isVisible = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
    className='relative z-10 px-3 sm:px-6 md:px-12 py-5 sm:py-10 md:py-12'
  >
    {isMobile ? (
      <div className='grid grid-cols-3 gap-x-2 gap-y-3'>
        <CompactFooterColumn
          title='Ampat Reverie'
          items={FOOTER_DATA.ampatReverie}
        />
        <CompactFooterColumn
          title='Explore'
          items={FOOTER_DATA.exploreMobile}
        />
        <CompactFooterColumn
          title='Company'
          items={FOOTER_DATA.companyMobile}
        />
      </div>
    ) : (
      <div className='flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-12'>
        <FooterColumn title='Ampat Reverie' items={FOOTER_DATA.ampatReverie} />
        <FooterColumn title='Explore Raja Ampat' items={FOOTER_DATA.explore} />
        <FooterColumn title='Our Company' items={FOOTER_DATA.company} />
      </div>
    )}
  </motion.div>
);

const FooterCopyright = ({ isMobile, isVisible = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
    className='relative z-10 w-full px-3 sm:px-6 md:px-12 pb-3 sm:pb-6 md:pb-8'
  >
    <p
      className={`font-[Gully] font-light text-[10px] xs:text-[12px] sm:text-[14px] leading-relaxed ${
        isMobile ? "text-center" : "text-center md:text-right"
      }`}
    >
      © 2025 All rights reserved.
      <br />
      Ampat Reverie - Inspired by nature. Built for explorers.
    </p>
  </motion.div>
);

export default function Footer() {
  const deviceSize = useDeviceSize();
  const isMobile = deviceSize === "mobile";

  const { ref, isInView, hasLoaded } = useLazyLoad({
    threshold: 0.1,
    rootMargin: "100px 0px",
    triggerOnce: true,
  });

  return (
    <motion.footer
      ref={ref}
      className='relative w-full flex flex-col text-white pt-8 sm:pt-16 md:pt-24 lg:pt-32'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <LazyLoadingSkeleton isLoaded={hasLoaded}>
        <FooterTitle isMobile={isMobile} isVisible={isInView} />
      </LazyLoadingSkeleton>

      <LazyLoadingSkeleton isLoaded={hasLoaded}>
        <FooterDescription isMobile={isMobile} isVisible={isInView} />
      </LazyLoadingSkeleton>

      <LazyLoadingSkeleton isLoaded={hasLoaded}>
        <FooterColumns isMobile={isMobile} isVisible={isInView} />
      </LazyLoadingSkeleton>

      <LazyLoadingSkeleton isLoaded={hasLoaded}>
        <FooterCopyright isMobile={isMobile} isVisible={isInView} />
      </LazyLoadingSkeleton>
    </motion.footer>
  );
}
