"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SignInPageClient() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f0f0f0]'>
      <div className='bg-white p-8 rounded-xl shadow-md max-w-md w-full'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Sign In</h1>
        <div className='flex flex-col space-y-4'>
          <Link
            href={`/api/auth/signin/google?callbackUrl=${callbackUrl}`}
            className='bg-blue-600 text-white text-center py-3 rounded-md hover:bg-blue-700'
          >
            Sign in with Google
          </Link>
        </div>
      </div>
    </div>
  );
}
