import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add your actual Google login logic here
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition"
    >
      <FcGoogle className="text-2xl" />
      <span className="font-medium">Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
