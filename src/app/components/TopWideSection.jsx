"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserMenu from "./UserMenu";
import { Menu } from "lucide-react";

const RESPONSIVE_STYLES = {
  width: {
    mobile: "w-[400px]",
    tablet: "w-[500px]",
    desktop: "w-[1044px]",
  },
  height: {
    mobile: "h-[70px]",
    tablet: "h-[85px]",
    desktop: "h-[102px]",
  },
  padding: {
    mobile: "px-3 py-2",
    tablet: "px-4 py-3",
    desktop: "px-6 py-4",
  },
  margin: {
    mobile: "mt-[15px]",
    tablet: "mt-[40px]",
    desktop: "mt-[64px]",
  },
  logoSize: {
    mobile: "w-[100px] h-[100px]",
    tablet: "w-[70px] h-[70px]",
    desktop: "w-[175px] h-[175px]",
  },
};

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  {
    href: "#top-destination",
    label: "Top Destination",
    shortLabel: "Destinations",
  },
  { href: "#why-visit", label: "Why Visit" },
  { href: "#gallery", label: "Gallery" },
];

const getResponsiveStyle = (styleType, isMobile, isTablet) => {
  if (isMobile) return RESPONSIVE_STYLES[styleType].mobile;
  if (isTablet) return RESPONSIVE_STYLES[styleType].tablet;
  return RESPONSIVE_STYLES[styleType].desktop;
};

const Logo = ({ isMobile, isTablet }) => {
  const handleLogoClick = () => {
    document.getElementById("ampat")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='flex items-center gap-2'>
      <button onClick={handleLogoClick} className='flex items-center'>
        <img
          src='/assets/icon.png'
          alt='Ampat Reverie Logo'
          className={`${getResponsiveStyle(
            "logoSize",
            isMobile,
            isTablet
          )} cursor-pointer`}
        />
      </button>
    </div>
  );
};

const MobileMenu = ({ isOpen, onToggle }) => (
  <div>
    <button
      onClick={onToggle}
      className='ml-2 rounded-lg p-2 hover:bg-gray-100 transition'
      aria-label='Toggle navigation menu'
    >
      <Menu size={28} />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.92 }}
          transition={{ duration: 0.22 }}
          className='absolute right-0 top-[70px] mt-2 bg-white shadow-xl rounded-2xl w-[320px] sm:w-[360px] z-[99] border border-gray-100 py-5 px-4'
        >
          <nav className='flex flex-col gap-2 text-gray-800 font-medium text-sm px-5 pt-2'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='hover:text-[#107773] transition-colors py-1'
                onClick={onToggle}
              >
                {item.label}
              </a>
            ))}
            <div className='border-t border-gray-200 my-2' />
            <UserMenu isMobile={true} isTablet={false} />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const DesktopNavigation = ({ isTablet }) => (
  <div className='flex items-center'>
    <nav
      className={`flex ${
        isTablet ? "space-x-3" : "space-x-6"
      } text-gray-800 font-medium ${isTablet ? "text-sm" : "text-lg"}`}
    >
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className='hover:text-[#107773] transition-colors'
        >
          {isTablet && item.shortLabel ? item.shortLabel : item.label}
        </a>
      ))}
    </nav>
  </div>
);

export default function TopWideSection({
  isMobile,
  isTablet,
  isVisible = true,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const containerClasses = `flex items-center justify-between ${getResponsiveStyle(
    "width",
    isMobile,
    isTablet
  )} ${getResponsiveStyle("height", isMobile, isTablet)} ${getResponsiveStyle(
    "padding",
    isMobile,
    isTablet
  )} ${getResponsiveStyle(
    "margin",
    isMobile,
    isTablet
  )} bg-white shadow-lg rounded-2xl z-50 relative`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -32 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={containerClasses}
    >
      <Logo isMobile={isMobile} isTablet={isTablet} />
      {isMobile ? (
        <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
      ) : (
        <DesktopNavigation isTablet={isTablet} />
      )}
    </motion.header>
  );
}
