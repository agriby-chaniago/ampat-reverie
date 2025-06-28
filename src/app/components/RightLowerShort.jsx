"use client";

import { motion } from "framer-motion";

export default function RightLowerShort() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="
        flex
        flex-col
        justify-between
        w-[716px]
        h-[360px]
        bg-white
        bg-opacity-70
        shadow
        rounded-[20px]
        px-8
        py-10
        border
        border-white
      "
    >
      {/* Header content */}
      <div className="flex flex-col mt-4 text-left">
        <h1 className="font-[Gully] font-normal text-[32px] leading-[1.2] text-[#102437]">
          Find
        </h1>

        <h2 className="font-[Gully] font-normal text-[24px] leading-[1.2] mt-2 opacity-60 text-[#102437]">
          Your Journey
        </h2>
      </div>

      {/* Button positioned at the bottom */}
      <div className="mb-4">
        <button className="w-full max-w-[574px] h-[78px] bg-[#102437] text-white rounded-full flex items-center justify-center cursor-pointer border border-white transition-all duration-300 hover:bg-white hover:text-[#102437] hover:shadow-lg hover:scale-[1.02] hover:border-[#102437] group">
          <span className="font-[Gully] font-normal text-[20px] leading-[1.2] transition-all duration-300 group-hover:font-medium">
            Where would you like to go
          </span>
        </button>
      </div>
    </motion.div>
  );
}
