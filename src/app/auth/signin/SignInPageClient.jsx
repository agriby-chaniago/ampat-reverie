"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, AlertCircle, Loader2 } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export default function SignInPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const registered = searchParams.get("registered");
  const email = searchParams.get("email");

  const [formData, setFormData] = useState({
    email: email || "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCredentialsSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push(callbackUrl);
      }
    } catch (err) {
      console.error("Sign in error:", err);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await signIn("google", { callbackUrl });
    } catch (err) {
      console.error("Google sign in error:", err);
      setError("Failed to sign in with Google");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/assets/bg.png')] px-4 py-8">
      <div className='w-full max-w-[90%] sm:max-w-[450px] flex flex-col'>
        <Card className='bg-white/80 backdrop-blur-md border-white shadow-xl rounded-2xl'>
          <CardHeader className='pb-2'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center text-[#102437] font-[Gully]'>
              Welcome Back
            </h2>
            {registered && (
              <p className='text-center text-sm text-green-600 mt-2'>
                Account created successfully! Please sign in.
              </p>
            )}
          </CardHeader>

          <CardContent className='flex flex-col gap-4'>
            {error && (
              <div className='bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded text-sm flex items-center'>
                <AlertCircle className='w-4 h-4 mr-2 flex-shrink-0' />
                <span>{error}</span>
              </div>
            )}

            <form
              onSubmit={handleCredentialsSignIn}
              className='flex flex-col gap-4'
            >
              <div className='flex flex-col'>
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
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className='h-10'
                  placeholder='your@email.com'
                />
              </div>

              <div className='flex flex-col'>
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
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className='h-10 pr-10'
                    placeholder='Your password'
                  />
                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  >
                    {showPassword ? (
                      <EyeOffIcon className='h-4 w-4 text-gray-400' />
                    ) : (
                      <EyeIcon className='h-4 w-4 text-gray-400' />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className='w-full bg-[#107773] hover:bg-[#0d6662] text-white h-10'
              >
                {isLoading ? (
                  <Loader2 className='w-4 h-4 animate-spin mr-2' />
                ) : null}
                Sign In
              </Button>
            </form>

            {/* Temporary disabled Google OAuth due to redirect_uri_mismatch */}
            {process.env.NODE_ENV === "production" && (
              <>
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <span className='w-full border-t' />
                  </div>
                  <div className='relative flex justify-center text-xs uppercase'>
                    <span className='bg-white px-2 text-gray-500'>
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  type='button'
                  variant='outline'
                  onClick={handleGoogleSignIn}
                  className='w-full h-10'
                >
                  <svg className='w-4 h-4 mr-2' viewBox='0 0 24 24'>
                    <path
                      fill='currentColor'
                      d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    />
                    <path
                      fill='currentColor'
                      d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    />
                    <path
                      fill='currentColor'
                      d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    />
                    <path
                      fill='currentColor'
                      d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    />
                  </svg>
                  Sign in with Google
                </Button>
              </>
            )}

            <div className='bg-blue-100 text-blue-800 border border-blue-300 px-4 py-3 rounded text-sm'>
              <p className='font-medium mb-1'>Test Accounts:</p>
              <p className='text-xs'>
                • Email: admin@example.com | Password: password
              </p>
              <p className='text-xs'>• Or create a new account using Sign Up</p>
            </div>

            <div className='text-center text-sm'>
              <span className='text-gray-600'>Don't have an account? </span>
              <Link
                href='/auth/signup'
                className='text-[#107773] hover:text-[#0d6662] font-medium'
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
