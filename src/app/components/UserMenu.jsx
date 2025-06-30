"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { User, LogOut, LogIn, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function UserMenu({ isMobile, isTablet }) {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const isSmallDevice = isMobile || isTablet;

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='relative flex flex-col items-end' ref={menuRef}>
      <button
        onClick={toggleMenu}
        className={`
          flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors 
          ${isMobile ? "p-0.5" : isTablet ? "p-1.5" : "p-2"} 
          rounded-lg hover:bg-gray-100/30
        `}
        aria-label={status === "authenticated" ? "User menu" : "Sign in"}
      >
        {status === "authenticated" ? (
          <>
            <User
              size={isMobile ? 16 : isTablet ? 18 : 20}
              className='text-gray-800'
            />
            <ChevronDown
              size={isMobile ? 12 : isTablet ? 14 : 16}
              className={`text-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </>
        ) : (
          <>
            <LogIn
              size={isMobile ? 16 : isTablet ? 18 : 20}
              className='text-gray-800'
            />
          </>
        )}
      </button>

      {isMenuOpen && (
        <div
          className={`
          absolute right-0 top-full mt-2
          flex flex-col bg-white shadow-lg rounded-lg
          border border-gray-200 overflow-hidden transition-all duration-200
          ${
            isMobile
              ? "w-[160px] min-w-[160px]"
              : isTablet
              ? "w-[180px] min-w-[180px]"
              : "w-full min-w-[200px] max-w-[280px]"
          }
        `}
        >
          {status === "authenticated" ? (
            <>
              <div
                className={`
                flex flex-col 
                ${isMobile ? "p-2" : isTablet ? "p-3" : "p-4"} 
                border-b border-gray-100
              `}
              >
                <p
                  className={`
                  ${isMobile ? "text-xs" : "text-sm"} 
                  font-medium text-gray-900 truncate
                `}
                >
                  {session.user.name || "User"}
                </p>
                <p
                  className={`
                  ${isMobile ? "text-[10px]" : "text-xs"} 
                  text-gray-500 truncate
                `}
                >
                  {session.user.email}
                </p>
              </div>
              <button
                onClick={() => signOut()}
                className={`
                  flex items-center 
                  ${
                    isMobile
                      ? "p-2 text-xs"
                      : isTablet
                      ? "p-3 text-sm"
                      : "p-4 text-sm"
                  } 
                  text-left text-gray-700 hover:bg-gray-100 transition-colors
                `}
              >
                <LogOut
                  size={isMobile ? 14 : 16}
                  className={`${isMobile ? "mr-2" : "mr-3"}`}
                />
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href='/auth/signin'
                className={`
                  flex items-center 
                  ${
                    isMobile
                      ? "p-2 text-xs"
                      : isTablet
                      ? "p-3 text-sm"
                      : "p-4 text-sm"
                  } 
                  text-left text-gray-700 hover:bg-gray-100 transition-colors
                `}
              >
                <LogIn
                  size={isMobile ? 14 : 16}
                  className={`${isMobile ? "mr-2" : "mr-3"}`}
                />
                Sign in
              </Link>
              <Link
                href='/auth/signup'
                className={`
                  flex items-center 
                  ${
                    isMobile
                      ? "p-2 text-xs"
                      : isTablet
                      ? "p-3 text-sm"
                      : "p-4 text-sm"
                  } 
                  text-left text-gray-700 hover:bg-gray-100 transition-colors
                `}
              >
                <User
                  size={isMobile ? 14 : 16}
                  className={`${isMobile ? "mr-2" : "mr-3"}`}
                />
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
