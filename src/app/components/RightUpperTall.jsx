"use client";

import { motion } from "framer-motion";

export default function RightUpperTall() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="
        flex
        flex-col
        w-[716px]
        h-[320px]
        bg-white
        bg-opacity-70
        shadow
        rounded-[20px]
        px-8
        py-8
        border
        border-white
      "
    >
      {/* Kontainer isi */}
      <div className="flex flex-col justify-start gap-6 pt-2">
        {/* Heading */}
        <div className="w-full">
          <h2 className="font-[Gully] font-normal text-[64px] leading-[1.2] tracking-tight text-[#102437] text-left">
            Where Serenity<br />Meets the Sea
          </h2>
        </div>

        {/* Paragraf */}
        <div className="w-full">
          <p className="font-[Gully] font-light text-[26px] leading-[1.6] tracking-tight text-[#102437] text-left opacity-80">
            Raja Ampat isn't just a place, it's a feeling. Drift away where the ocean whispers and time stands still.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
