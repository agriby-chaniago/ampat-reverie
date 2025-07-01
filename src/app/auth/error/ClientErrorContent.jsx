// app/auth/error/ClientErrorContent.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ClientErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessages = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The verification link may have been used or expired.",
    Default: "An error occurred during authentication.",
  };

  const errorMessage = errorMessages[error] || errorMessages.Default;

  return (
    <div
      className='min-h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className='w-full max-w-md'>
        <div className='bg-white/80 backdrop-blur-md p-8 rounded-[20px] border border-white shadow-xl'>
          <h2 className='text-3xl font-[Gully] font-bold mb-4 text-center text-[#102437]'>
            Authentication Error
          </h2>
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6'>
            {errorMessage}
          </div>
          <div className='flex justify-center'>
            <Link
              href='/auth/signin'
              className='py-3 px-6 font-[Gully] bg-[#102437] text-white rounded-md hover:bg-[#1a3b5c] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
