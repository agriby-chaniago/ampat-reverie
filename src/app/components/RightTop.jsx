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
        gap-6
        w-[716px]
        h-[320px]
        bg-gradient-to-b
        from-white/0
        to-white
        shadow
        rounded-[20px]
        px-8
        py-8
        border
        border-white
      '
    >
      {/* Kontainer isi */}
      <div className='flex flex-col gap-4 max-w-[500px]'>
        <h2
          className='
            font-[Gully]
            font-semibold
            text-4xl
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
            text-base
            leading-normal
            tracking-tight
            text-[#102437]
            text-left
            opacity-80
          '
        >
          Raja Ampat isn't just a place, it's a feeling.
          <br />
          Drift away where the ocean whispers and time stands still.
        </p>
      </div>
    </motion.div>
  );
}
