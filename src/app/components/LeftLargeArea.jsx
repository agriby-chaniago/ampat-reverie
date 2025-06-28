"use client";

import { motion } from "framer-motion";

export default function LeftLargeArea() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        flex
        flex-col
        justify-between
        w-[1044px]
        h-[724px]
        max-w-full
        bg-white/5
        backdrop-blur-xs
        shadow-lg
        rounded-[20px]
        px-8
        py-10
        border
        border-white
      "
    >
      {/* Bagian atas: Judul & Deskripsi */}
      <div className="flex flex-col items-start text-left space-y-6">
        <div className="max-w-[596px]">
          <h1 className="font-[Gully] font-normal text-[100px] leading-[1.1] tracking-[-0.05em] text-white">
            A M P A T <br /> R E V E R I E
          </h1>
        </div>
        <div className="max-w-[662px]">
          <p className="font-[Gully] font-normal text-[26px] leading-[1.5] text-gray-300">
            A glimpse of paradise from the edge of the world.
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="w-full flex justify-start">
        <p className="font-[Gully] font-normal text-[40px] leading-[1.4] text-white">
          4.93/5.00 |{" "}
          <span className="text-[28px] text-white">
            32k+ explorers
          </span>
        </p>
      </div>
    </motion.div>
  );
}
