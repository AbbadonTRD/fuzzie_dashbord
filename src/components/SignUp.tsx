"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for sign-up form
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

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignUp = () => {
    console.log("signed up");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <h1 className="text-xl font-bold">Starnite</h1>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-2">
          Create an Account
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Join us today! Please sign up to continue
        </p>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div>
            <label htmlFor="" className="text-sm font-medium">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              {...register("username")}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                errors.username ? "border-red-500" : ""
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
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
              {...register("email")}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
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
              {...register("password")}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
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
              {...register("confirmPassword")}
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none ${
                errors.confirmPassword ? "border-red-500" : ""
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
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
            <a href="/sign-in" className="text-purple-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
