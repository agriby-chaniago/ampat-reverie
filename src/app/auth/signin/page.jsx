"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

export default function SignIn() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (registered === "true") {
      setSuccessMessage("Account created successfully! Please sign in.");
    }
  }, [registered]);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/assets/bg.png')] px-4 py-8">
      <div className="w-full max-w-[90%] sm:max-w-[450px] flex flex-col">
        <Card className="bg-white/80 backdrop-blur-md border-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#102437] font-[Gully]">
              Welcome to Ampat Reverie
            </h2>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded text-sm flex items-center">
                <span>{error}</span>
              </div>
            )}

            {successMessage && (
              <div className="bg-green-100 text-green-700 border border-green-400 px-4 py-2 rounded text-sm flex items-center">
                <span>{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10"
                  placeholder="your@email.com"
                />
              </div>

              {/* Password field */}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 text-gray-600 focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="w-4 h-4" />
                    ) : (
                      <EyeIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Sign in button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 h-11 font-[Gully] bg-[#102437] hover:bg-[#1a3b5c] text-white"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>

              {/* Sign up link */}
              <p className="text-center text-sm text-gray-600 mt-1">
                Don't have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign up
                </Link>
              </p>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-2 my-2">
              <Separator className="flex-1" />
              <span className="text-sm text-gray-500">Or continue with</span>
              <Separator className="flex-1" />
            </div>

            {/* Google SSO button */}
            <Button
              variant="outline"
              className="w-full h-11 flex items-center justify-center gap-3 border-gray-300 hover:bg-gray-50"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Sign in with Google</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
