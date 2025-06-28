"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { User, LogOut, LogIn, ChevronDown } from "lucide-react";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
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
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-end" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors p-2 rounded-lg hover:bg-white/10"
        aria-label={status === "authenticated" ? "User menu" : "Sign in"}
      >
        {status === "authenticated" ? (
          <>
            <span className="hidden md:inline text-sm font-medium truncate max-w-[120px]">
              {session.user.name || session.user.email}
            </span>
            <User size={20} className="text-white" />
            <ChevronDown size={16} className={`text-white transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </>
        ) : (
          <>
            <span className="hidden md:inline text-sm font-medium">Sign In</span>
            <LogIn size={20} className="text-white" />
          </>
        )}
      </button>

      {isMenuOpen && (
        <div className="flex flex-col w-full min-w-[200px] max-w-[280px] bg-white shadow-lg rounded-lg mt-2 border border-gray-200 overflow-hidden transition-all duration-200">
          {status === "authenticated" ? (
            <>
              <div className="flex flex-col p-4 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900 truncate">{session.user.name || "User"}</p>
                <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center p-4 text-sm text-left text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LogOut size={16} className="mr-3" />
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="flex items-center p-4 text-sm text-left text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <LogIn size={16} className="mr-3" />
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="flex items-center p-4 text-sm text-left text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <User size={16} className="mr-3" />
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
