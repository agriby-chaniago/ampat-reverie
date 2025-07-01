"use client";
import { Menu, X, MapPin, Phone, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import UserMenu from "./UserMenu";

export default function TopNarrowSection({ isMobile, isTablet }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openMap = () => {
    // Koordinat Raja Ampat Waisai yang akurat
    const rajaAmpatCoords = "-0.4248841,130.8208792";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${rajaAmpatCoords}`;
    window.open(mapUrl, "_blank");
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
        relative
      `}
    >
      <div className='relative' ref={menuRef}>
        <button
          onClick={toggleMenu}
          className='hover:text-[#107773] transition-colors p-1'
        >
          {isMenuOpen ? (
            <X size={isTablet ? 24 : 28} />
          ) : (
            <Menu size={isTablet ? 24 : 28} />
          )}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className='absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50'
            >
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-800 mb-3 font-[Gully]'>
                  Contact & Location
                </h3>

                {/* Contact Information */}
                <div className='space-y-3 mb-4'>
                  <div className='flex items-center space-x-3'>
                    <Phone size={16} className='text-[#107773]' />
                    <a
                      href='tel:+6281234567890'
                      className='text-sm text-gray-700 hover:text-[#107773] transition-colors'
                    >
                      +62 812 3456 7890
                    </a>
                  </div>

                  <div className='flex items-center space-x-3'>
                    <Mail size={16} className='text-[#107773]' />
                    <a
                      href='mailto:hello@ampatreverie.com'
                      className='text-sm text-gray-700 hover:text-[#107773] transition-colors'
                    >
                      hello@ampatreverie.com
                    </a>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <MapPin size={16} className='text-[#107773] mt-0.5' />
                    <div className='text-sm text-gray-700'>
                      <p>Waisai, Raja Ampat</p>
                      <p>West Papua, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Map Button */}
                <button
                  onClick={openMap}
                  className='w-full flex items-center justify-center space-x-2 bg-[#107773] text-white py-2 px-4 rounded-lg hover:bg-[#0d6662] transition-colors'
                >
                  <Globe size={16} />
                  <span className='text-sm font-medium'>Open in Maps</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <UserMenu isMobile={isMobile} isTablet={isTablet} />
    </motion.div>
  );
}
