"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (res?.error) {
      setError("Email atau password salah.");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('/assets/bg.png')] px-4">
      <div className='w-full max-w-md'>
        <Card className='bg-white/80 backdrop-blur-md border-white shadow-xl rounded-2xl'>
          <CardHeader>
            <h2 className='text-3xl font-bold text-center text-[#102437] font-[Gully]'>
              Welcome to Ampat Reverie
            </h2>
          </CardHeader>

          <CardContent>
            {error && (
              <div className='bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded mb-4 text-sm'>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email
                </label>
                <Input
                  id='email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Password
                </label>
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    onClick={togglePassword}
                    className='absolute right-3 inset-y-0 flex items-center text-gray-600'
                  >
                    {showPassword ? (
                      <EyeOffIcon className='w-4 h-4' />
                    ) : (
                      <EyeIcon className='w-4 h-4' />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full font-[Gully] bg-[#102437] hover:bg-[#1a3b5c] text-white'
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              <p className='text-center text-sm text-gray-600'>
                Don't have an account?{" "}
                <Link
                  href='/auth/signup'
                  className='text-blue-600 hover:underline font-medium'
                >
                  Sign up
                </Link>
              </p>
            </form>

            <div className='my-6'>
              <Separator />
              <div className='text-center text-sm text-gray-500 mt-2'>
                Or continue with
              </div>
            </div>

            <Button
              variant='outline'
              className='w-full gap-2'
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24'>
                <path
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  fill='#34A853'
                />
                <path
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  fill='#EA4335'
                />
              </svg>
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
