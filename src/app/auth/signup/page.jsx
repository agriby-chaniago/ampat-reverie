"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error creating account");
      }

      router.push("/auth/signin?registered=true");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('/assets/bg.png')] px-4 py-8">
      <div className="w-full max-w-[90%] sm:max-w-[450px] flex flex-col">
        <Card className="bg-white/80 backdrop-blur-md border-white shadow-xl rounded-2xl">
          <CardHeader className="pb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#102437] font-[Gully]">
              Create an Account
            </h2>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            {error && (
              <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-2 rounded text-sm flex items-center">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
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

              {/* Password */}
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
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-10 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
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
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-10 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 text-gray-600 focus:outline-none"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon className="w-4 h-4" />
                    ) : (
                      <EyeIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 mt-2 font-[Gully] bg-[#102437] hover:bg-[#1a3b5c] text-white"
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
