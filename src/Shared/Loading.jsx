import React from "react";
import { FaLeaf } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-30 mb-6"></div>
      <FaLeaf className="text-4xl text-white animate-bounce mb-2" />
      <h2 className="text-2xl font-semibold">GreenLink is getting ready...</h2>
      <p className="text-white/80 mt-2 text-sm">
        Preparing your experience 🌍 Please wait a moment
      </p>
    </div>
  );
};

export default Loading;
