import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import SocialLogin from "./SocialLogin";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <header>
        <SectionTitle
          heading={"Create an Account"}
          subHeading={"Join the movement & start your climate journey 🌱"}
        />
      </header>

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <form>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          {/* Profile Picture Upload */}
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              className="w-full text-sm file:px-4 file:py-2 file:border file:rounded-lg file:bg-teal file:text-white file:cursor-pointer"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal text-white py-2 rounded-lg font-semibold hover:bg-teal/90 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <SocialLogin />

        {/* Navigate to Login */}
        <p className="text-center text-sm mt-6 text-gray-600">
          <span className="mr-1">Already have an account?</span>
          <Link
            to="/login"
            className="text-teal font-semibold hover:underline"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
