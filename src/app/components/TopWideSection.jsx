"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserMenu from "./UserMenu";
import { Menu, X } from "lucide-react";

export default function TopWideSection({ isMobile, isTablet }) {
  const [open, setOpen] = useState(false);
  const isSmallDevice = isMobile || isTablet;

  return (
    <motion.div
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        flex items-center justify-between
        ${isMobile ? "w-full mx-3" : isTablet ? "w-[500px]" : "w-[1044px]"}
        ${isMobile ? "h-[70px]" : isTablet ? "h-[85px]" : "h-[102px]"}
        bg-white shadow-lg rounded-2xl
        ${isMobile ? "px-3 py-2" : isTablet ? "px-4 py-3" : "px-6 py-4"}
        ${isMobile ? "mt-[15px]" : isTablet ? "mt-[40px]" : "mt-[64px]"}
        z-50
        relative
      `}
    >
      <div className='flex items-center gap-2'>
        <button
          onClick={() =>
            document
              .getElementById("ampat")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className='flex items-center'
        >
          <img
            src='/assets/icon.png'
            alt='Icon'
            className={`
              ${
                isMobile
                  ? "w-[100px] h-[100px]"
                  : isTablet
                  ? "w-[70px] h-[70px]"
                  : "w-[175px] h-[175px]"
              }
              cursor-pointer
            `}
          />
        </button>
      </div>

      {/* Hamburger for mobile, nav for tablet/desktop */}
      {isMobile ? (
        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            className='ml-2 rounded-lg p-2 hover:bg-gray-100 transition'
            aria-label='Menu'
          >
            <Menu size={28} />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.92 }}
                transition={{ duration: 0.22 }}
                className='absolute right-0 top-[70px] mt-2 bg-white shadow-xl rounded-2xl w-[320px] sm:w-[360px] z-[99] border border-gray-100 py-5 px-4'
              >
                <nav className='flex flex-col gap-2 text-gray-800 font-medium text-sm px-5 pt-2'>
                  <a
                    href='#about'
                    className='hover:text-[#107773] transition-colors py-1'
                    onClick={() => setOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href='#top-destination'
                    className='hover:text-[#107773] transition-colors py-1'
                    onClick={() => setOpen(false)}
                  >
                    Explore
                  </a>
                  <a
                    href='#why-visit'
                    className='hover:text-[#107773] transition-colors py-1'
                    onClick={() => setOpen(false)}
                  >
                    Why
                  </a>
                  <a
                    href='#gallery'
                    className='hover:text-[#107773] transition-colors py-1'
                    onClick={() => setOpen(false)}
                  >
                    Gallery
                  </a>
                  <div className='border-t border-gray-200 my-2' />
                  <UserMenu isMobile={isMobile} isTablet={isTablet} />
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className='flex items-center'>
          <nav
            className={`
              flex
              ${isTablet ? "space-x-3" : "space-x-6"}
              text-gray-800
              font-medium
              ${isTablet ? "text-sm" : "text-lg"}
            `}
          >
            <a href='#about' className='hover:text-[#107773] transition-colors'>
              About
            </a>
            <a
              href='#top-destination'
              className='hover:text-[#107773] transition-colors'
            >
              {isTablet ? "Destinations" : "Top Destination"}
            </a>
            <a
              href='#why-visit'
              className='hover:text-[#107773] transition-colors'
            >
              Why Visit
            </a>
            <a
              href='#gallery'
              className='hover:text-[#107773] transition-colors'
            >
              Gallery
            </a>
          </nav>
          <div className='ml-3'>
            <UserMenu isMobile={isMobile} isTablet={isTablet} />
          </div>
        </div>
      )}
    </motion.div>
  );
}
