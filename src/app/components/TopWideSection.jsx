"use client";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";
import { Menu } from "lucide-react";

export default function TopWideSection({ isMobile, isTablet }) {
  const isSmallDevice = isMobile || isTablet;

  return (
    <motion.div
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        flex
        items-center
        justify-between
        ${isMobile ? "w-full max-w-[95%]" : isTablet ? "w-[500px]" : "w-[1044px]"}
        ${isMobile ? "h-[70px]" : isTablet ? "h-[85px]" : "h-[102px]"}
        max-w-full
        bg-white
        shadow-lg
        rounded-2xl
        ${isMobile ? "px-3 py-2" : isTablet ? "px-4 py-3" : "px-6 py-4"}
        ${isMobile ? "mt-[15px]" : isTablet ? "mt-[40px]" : "mt-[64px]"}
        z-50
      `}
    >
      <div className="flex items-center gap-2">
        {/* Icon - responsive size */}
        <button
          onClick={() =>
            document.getElementById("ampat")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center"
        >
          <img
            src="/assets/icon.png"
            alt="Icon"
            className={`
              ${isMobile ? "w-[50px] h-[50px]" : isTablet ? "w-[70px] h-[70px]" : "w-[175px] h-[175px]"}
              cursor-pointer
            `}
          />
        </button>

        {/* Menu button for mobile */}
        {isMobile && (
          <a href="#why-visit" className="hover:text-[#107773] transition-colors ml-2">
            <Menu size={20} />
          </a>
        )}
      </div>

      {/* Navigation Links - always visible but responsive */}
      <div className="flex items-center">
        <nav
          className={`
            flex
            ${isMobile ? 'space-x-2' : isTablet ? 'space-x-3' : 'space-x-6'}
            text-gray-800
            font-medium
            ${isMobile ? "text-xs" : isTablet ? "text-sm" : "text-lg"}
          `}
        >
          <a href="#about" className="hover:text-[#107773] transition-colors">
            About
          </a>
          <a
            href="#top-destination"
            className="hover:text-[#107773] transition-colors"
          >
            {isMobile ? "Explore" : isTablet ? "Destinations" : "Top Destination"}
          </a>
          <a href="#why-visit" className="hover:text-[#107773] transition-colors">
            {isMobile ? "Why" : "Why Visit"}
          </a>
          <a href="#gallery" className="hover:text-[#107773] transition-colors">
            Gallery
          </a>
        </nav>

        {/* Show UserMenu in TopWide on mobile */}
        {isMobile && (
          <div className="ml-2">
            <UserMenu isMobile={isMobile} isTablet={isTablet} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
