"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schemas
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const signUpSchema = z
  .object({
    username: z.string().min(6, "Username must be at least 6 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SignInFormData = z.infer<typeof signInSchema>;
type SignUpFormData = z.infer<typeof signUpSchema>;

const AuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Sign In and Sign Up

  // Sign In form setup
  const {
    register: signInRegister,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  // Sign Up form setup
  const {
    register: signUpRegister,
    handleSubmit: handleSignUpSubmit,
    formState: { errors: signUpErrors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignIn = (data: SignInFormData) => {
    console.log("Signed in", data);
  };

  const handleSignUp = (data: SignUpFormData) => {
    console.log("Signed up", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-5 shadow-lg rounded-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <h1 className="text-xl font-bold">Starnite</h1>
        </div>

        {/* Toggle between Sign In and Sign Up form */}
        {isSignUp ? (
          <>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Create an Account
            </h2>
            <p className="text-center text-gray-500 mb-4">
              Join us today! Please sign up to continue
            </p>
            <form
              onSubmit={handleSignUpSubmit(handleSignUp)}
              className="space-y-2"
            >
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  {...signUpRegister("username")}
                  className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                    signUpErrors.username ? "border-red-500" : ""
                  }`}
                />
                {signUpErrors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.username.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  {...signUpRegister("email")}
                  className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                    signUpErrors.email ? "border-red-500" : ""
                  }`}
                />
                {signUpErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...signUpRegister("password")}
                  className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                    signUpErrors.password ? "border-red-500" : ""
                  }`}
                />
                {signUpErrors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  {...signUpRegister("confirmPassword")}
                  className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                    signUpErrors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
                {signUpErrors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {signUpErrors.confirmPassword.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
              >
                Sign Up
              </button>
            </form>
            <div className="text-center mt-4">
              <p className="text-gray-500">
                Already have an account?{" "}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-purple-500 underline"
                >
                  Sign In
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center mb-2">
              Sign in to Starnite
            </h2>
            <form
              onSubmit={handleSignInSubmit(handleSignIn)}
              className="space-y-4"
            >
              <div>
                <label htmlFor="" className="text-sm font-medium">
                  Email
                </label>
                <input
                  placeholder="Email address"
                  {...signInRegister("email")}
                  className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                    signInErrors.email ? "border-red-500" : ""
                  }`}
                />
                {signInErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {signInErrors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
              >
                Continue
              </button>
            </form>
            <div className="text-center mt-6">
              <p className="text-gray-500">
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-purple-500 underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
