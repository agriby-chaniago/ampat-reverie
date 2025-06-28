"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOutIcon } from "lucide-react";

export default function SignOut() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut({ redirect: false });
    router.push("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/assets/bg.png')] px-4 py-8">
      <div className="w-full max-w-[90%] sm:max-w-md flex flex-col">
        <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-[20px] border border-white shadow-xl">
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-full flex items-center justify-center">
              <LogOutIcon size={24} className="text-red-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-[Gully] font-bold text-center text-[#102437]">
              Sign Out
            </h2>
          </div>
          
          <p className="text-gray-700 mb-8 text-center">
            Are you sure you want to sign out of your account?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
            <button
              onClick={handleCancel}
              className="flex-1 py-3 px-4 font-[Gully] bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300 focus:outline-none"
            >
              Cancel
            </button>
            
            <button
              onClick={handleSignOut}
              disabled={isLoading}
              className="flex-1 py-3 px-4 font-[Gully] bg-[#102437] text-white rounded-md hover:bg-[#1a3b5c] transition duration-300 focus:outline-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing out...
                </div>
              ) : (
                "Sign Out"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}