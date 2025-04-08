import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",

          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <header>
        <SectionTitle
          heading={"Welcome Back"}
          subHeading={"Access your dashboard and start making an impact 🌿"}
        />
      </header>

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* <h2 className="text-3xl font-bold text-center mb-6 text-teal">
          Welcome Back
        </h2> */}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal text-white py-2 rounded-lg font-semibold hover:bg-teal/90 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <SocialLogin></SocialLogin>

        <p className="text-center text-sm mt-6 text-gray-600">
          <span className="mr-1"> Don’t have an account?</span>
          <Link
            to="/register"
            className="text-teal font-semibold hover:underline"
          >
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
