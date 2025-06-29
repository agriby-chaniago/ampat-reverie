"use client";

import { motion } from "framer-motion";

export default function RightTop() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className='
        flex
        flex-col
        justify-center
        gap-3 sm:gap-4 lg:gap-6
        w-full lg:w-[716px]
        h-auto min-h-[200px] sm:min-h-[250px] lg:h-[320px]
        bg-gradient-to-b
        from-white/0
        to-white
        shadow
        rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]
        px-4 sm:px-6 lg:px-8
        py-5 sm:py-6 lg:py-8
        border
        border-white
      '
    >
      {/* Content container with responsive typography */}
      <div className='flex flex-col gap-2 sm:gap-3 lg:gap-4 max-w-full sm:max-w-[500px]'>
        <h2
          className='
            font-[Gully]
            font-semibold
            text-2xl sm:text-3xl md:text-3xl lg:text-4xl
            leading-tight
            tracking-tight
            text-[#0d1c2c]
            text-left
          '
        >
          Where Serenity
          <br />
          Meets the Sea
        </h2>

        <p
          className='
            font-[Gully]
            font-light
            text-sm sm:text-base lg:text-base
            leading-normal
            tracking-tight
            text-[#102437]
            text-left
            opacity-80
          '
        >
          Raja Ampat isn't just a place, it's a feeling.
          <br className="hidden sm:block" />
          Drift away where the ocean whispers and time stands still.
        </p>
      </div>
    </motion.div>
  );
}
