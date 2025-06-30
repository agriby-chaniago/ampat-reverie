"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, AlertCircle, Loader2 } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { toast } from "sonner"; // Optional: Install sonner for better toast messages

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
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate password strength
  const validatePassword = (password) => {
    // Password should be at least 8 characters and include numbers
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    return { isValid: hasMinLength && hasNumber, hasMinLength, hasNumber };
  };

  // Handle validation on input change
  const handleInputChange = (field, value) => {
    const errors = { ...validationErrors };

    switch (field) {
      case "name":
        setName(value);
        errors.name = value.trim().length < 2 ? "Name is too short" : "";
        break;
      case "email":
        setEmail(value);
        errors.email =
          !validateEmail(value) && value.length > 0
            ? "Please enter a valid email"
            : "";
        break;
      case "password":
        setPassword(value);
        const { isValid, hasMinLength, hasNumber } = validatePassword(value);
        if (!isValid && value.length > 0) {
          errors.password = !hasMinLength
            ? "Password must be at least 8 characters"
            : !hasNumber
            ? "Password must include at least one number"
            : "";
        } else {
          errors.password = "";
        }
        // Also update confirm password validation
        if (confirmPassword && value !== confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        } else {
          errors.confirmPassword = "";
        }
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        errors.confirmPassword = value !== password ? "Passwords do not match" : "";
        break;
      default:
        break;
    }

    setValidationErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset general error
    setError("");

    // Complete validation before submission
    const emailIsValid = validateEmail(email);
    const { isValid: passwordIsValid } = validatePassword(password);
    const passwordsMatch = password === confirmPassword;

    if (!emailIsValid) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email",
      }));
      return;
    }

    if (!passwordIsValid) {
      setValidationErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters and include numbers",
      }));
      return;
    }

    if (!passwordsMatch) {
      setValidationErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setError("Email already exists. Please sign in instead.");
        } else {
          throw new Error(data.message || "Error creating account");
        }
        setIsLoading(false);
      } else {
        // If using sonner
        // toast.success("Account created successfully!");

        // Redirect with success parameter
        router.push("/auth/signin?registered=true");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "An unexpected error occurred");
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
              <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`h-10 ${
                    validationErrors.name
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  placeholder="John Doe"
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.name}
                  </p>
                )}
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
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`h-10 ${
                    validationErrors.email
                      ? "border-red-500 focus:border-red-500"
                      : ""
                  }`}
                  placeholder="your@email.com"
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.email}
                  </p>
                )}
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
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`h-10 pr-10 ${
                      validationErrors.password
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
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
                {validationErrors.password ? (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.password}
                  </p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters and include numbers
                  </p>
                )}
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
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className={`h-10 pr-10 ${
                      validationErrors.confirmPassword
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
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
                {validationErrors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {validationErrors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 mt-2 font-[Gully] bg-[#102437] hover:bg-[#1a3b5c] text-white"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </span>
                ) : (
                  "Sign Up"
                )}
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
