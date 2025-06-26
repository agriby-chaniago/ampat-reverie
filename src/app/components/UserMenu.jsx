"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { User, LogOut, LogIn, ChevronDown } from "lucide-react";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center text-gray-800 hover:text-blue-600 transition-colors"
      >
        {status === "authenticated" ? (
          <>
            <span className="hidden md:inline mr-2">{session.user.name || session.user.email}</span>
            <User size={20} />
            <ChevronDown size={16} className="ml-1" />
          </>
        ) : (
          <>
            <span className="hidden md:inline mr-2">Sign In</span>
            <LogIn size={20} />
          </>
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50">
          {status === "authenticated" ? (
            <>
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium text-gray-900">{session.user.name || "User"}</p>
                <p className="text-xs text-gray-500">{session.user.email}</p>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <LogIn size={16} className="mr-2" />
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
              >
                <User size={16} className="mr-2" />
                Sign up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}