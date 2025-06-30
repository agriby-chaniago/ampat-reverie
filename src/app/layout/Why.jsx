"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const content = [
  {
    image: "/assets/img/why/1.png",
    text: "Pristine underwater biodiversity",
    color: "from-blue-500/40 to-teal-500/30",
  },
  {
    image: "/assets/img/why/2.png",
    text: "Sustainable eco-tourism appeal",
    color: "from-emerald-500/40 to-cyan-500/30",
  },
  {
    image: "/assets/img/why/3.png",
    text: "Unique island landscapes",
    color: "from-amber-500/40 to-orange-500/30",
  },
  {
    image: "/assets/img/why/4.png",
    text: "Authentic local communities",
    color: "from-rose-500/40 to-pink-500/30",
  },
];

export default function Why() {
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
  const isSmallDevice = isMobile || isTablet;

  return (
    <div
      id='why-visit'
      className="w-full min-h-0 sm:min-h-screen pt-[50px] sm:pt-[75px] bg-[url('/assets/bgWhy.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Enhanced Header with animation - Responsive sizing */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          relative
          mx-auto
          mb-[30px] sm:mb-[40px] md:mb-[60px]
          mt-[60px] sm:mt-[80px] md:mt-[120px]
          font-[Gully]
          font-normal
          text-white
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
          text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px]
          leading-[40px] sm:leading-[56px] md:leading-[70px] lg:leading-[80px]
          tracking-[0%]
          w-full
          max-w-[1840px]
          px-4 sm:px-6 md:px-8
          pl-[20px] sm:pl-[50px] md:pl-[100px]
          text-left
        `}
      >
        <span className='relative inline-block'>
          Why visit <br /> Raja Ampat?
          <motion.div
            className='absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 h-[2px] sm:h-1 bg-white'
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          />
        </span>

        {/* Decorative elements - Hide on mobile */}
        {!isMobile && (
          <>
            <motion.div
              className={`absolute -right-4 top-1/2 
              ${isTablet ? "w-16 h-16" : "w-24 h-24"} 
              rounded-full border-2 border-white/30 opacity-30`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            />
            <motion.div
              className={`absolute -left-6 -bottom-6 sm:-left-8 sm:-bottom-8 md:-left-10 md:-bottom-10 
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
              rounded-full border-2 border-white/20 opacity-20`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            />
          </>
        )}
      </motion.div>

      {/* Content with enhanced visuals - Responsive adjustments */}
      <div className='relative flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-center lg:justify-evenly gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-16 w-full max-w-[1840px] relative z-10'>
          {content.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 30,
                x: idx % 2 === 0 ? -20 : 20,
              }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.15 }}
              className={`
                relative
                flex ${
                  isMobile
                    ? "flex-col items-center"
                    : idx % 2 === 0
                    ? "flex-row"
                    : "flex-row-reverse"
                }
                p-4 sm:p-5 md:p-6 lg:p-7
                border border-white/50
                rounded-xl sm:rounded-[18px] md:rounded-[22px]
                w-full sm:w-[90%] md:w-[875px]
                h-auto min-h-[140px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[230px]
                mx-2 sm:mx-4
                transition-all duration-500
                hover:bg-white/10
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
                hover:border-opacity-100
                hover:scale-[1.02]
                cursor-pointer
                group
                backdrop-blur-sm
                overflow-hidden
              `}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Circular decorative elements - Hide on mobile */}
              {!isMobile && (
                <motion.div
                  className='absolute -z-10 rounded-full bg-white/5 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.15 + 0.5 }}
                  style={{
                    top: idx % 2 === 0 ? "-20%" : "60%",
                    left: idx % 2 === 0 ? "70%" : "-10%",
                  }}
                />
              )}

              {/* Image with enhanced animation - Responsive sizing */}
              <div
                className={`
                relative 
                w-[100px] sm:w-[120px] md:w-[150px] lg:w-[170px] 
                h-[100px] sm:h-[120px] md:h-[150px] lg:h-[170px]
                rounded-full overflow-hidden border-2 border-white/60 
                flex-shrink-0 transition-all duration-500
                group-hover:border-white group-hover:shadow-lg
                ${isMobile && "mb-4"}
              `}
              >
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 + 0.3 }}
                  className='w-full h-full'
                >
                  <Image
                    src={item.image}
                    alt={`image-${idx}`}
                    width={190}
                    height={190}
                    className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500' />
                </motion.div>
              </div>

              {/* Text with enhanced styling - Responsive sizing */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: !isMobile ? (idx % 2 === 0 ? 20 : -20) : 0,
                  y: isMobile ? 20 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 + 0.6 }}
                className={`relative ${
                  isMobile
                    ? "text-center"
                    : idx % 2 === 0
                    ? "ml-4 sm:ml-6 md:ml-8"
                    : "mr-4 sm:mr-6 md:mr-8"
                } transition-all duration-300`}
              >
                <p
                  className='text-white font-[Gully] font-light 
                  text-lg sm:text-xl md:text-2xl lg:text-[32px] 
                  leading-tight sm:leading-tight md:leading-[36px] lg:leading-[42px] 
                  transition-all duration-500 group-hover:text-opacity-100 group-hover:scale-[1.02] drop-shadow-md'
                >
                  {item.text}
                </p>

                {/* Subtle decorative line */}
                <motion.div
                  className={`h-[2px] bg-white/40 mt-2 sm:mt-3 md:mt-4 group-hover:bg-white/70 transition-all duration-500 ${
                    isMobile && "mx-auto"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: isMobile ? "80%" : "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 + 0.9 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative circles - Hide on mobile */}
        {!isMobile && (
          <motion.div
            className='absolute bottom-0 right-[10%] w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 rounded-full border border-white/10 opacity-20 -z-10'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          />
        )}
      </div>
    </div>
  );
}
