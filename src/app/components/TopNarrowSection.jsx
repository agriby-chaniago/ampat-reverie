"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";

export default function TopNarrowSection({ isMobile, isTablet }) {
  // This component now only renders on tablet and desktop
  return (
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`
        flex
        items-center
        justify-between
        ${isTablet ? "w-[250px]" : "w-[716px]"}
        ${isTablet ? "h-[85px]" : "h-[102px]"}
        bg-white
        rounded-[20px]
        ${isTablet ? "px-4" : "px-6"}
        shadow
        ${isTablet ? "mt-[40px]" : "mt-[64px]"}
        z-40
      `}
    >
      <a href='#why-visit' className='hover:text-[#107773] transition-colors'>
        <Menu size={isTablet ? 24 : 28} />
      </a>

      <UserMenu isMobile={isMobile} isTablet={isTablet} />
    </motion.div>
  );
}
