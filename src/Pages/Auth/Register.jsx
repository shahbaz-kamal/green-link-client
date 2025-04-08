import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import SocialLogin from "./SocialLogin";
import { imageUpload } from "../../Utilities/imageUpload";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Register = () => {
  const { user, createUser, loading, updateProfileUser, setLoading } =
    useAuth();
  const axiosSecure = useAxiosSecure();
  const handleRegister = async (e) => {
    e.preventDefault();
    // photo upload
    const photoData = e.target.photo.files[0];
    let photo = "";
    if (photoData) {
      photo = await imageUpload(photoData);
    }

    // const { url: photo } = await imageUpload(photoData);

    // rest
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = e.target.role.value;
    const regexPass = /^.{6,}$/;
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    if (!regexPass.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should be at least 6 characters",
      });
      return;
    }
    if (!regexUpperCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 uppercase letter",
      });
      return;
    }
    if (!regexLowerCase.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password should contain at least 1 lowercase letter",
      });
      return;
    }

    const newUser = { name, email, role, photo };

    // //createng user
    createUser(email, password)
      .then((result) => {
        console.log("from register page----->", result.user);
        updateProfileUser()
          .then(async () => {
            const res = await axiosSecure.post("store-user-info", newUser);
            if (res.data.insertedId) {
              setLoading(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            if (res.data.message === "This user already exist") {
              setLoading(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: "You already have an account, please login",
        });
      });
  };
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <header>
        <SectionTitle
          heading={"Create an Account"}
          subHeading={"Join the movement & start your climate journey 🌱"}
        />
      </header>

      <div className=" w-11/12 md:max-w-2xl bg-white shadow-xl rounded-2xl p-8 mx-auto">
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent "
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          {/* role */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="" disabled selected>
                Select a role
              </option>
              <option value="volunteer">Volunteer</option>

              <option value="donor">Donor</option>
            </select>
          </div>

          {/* Profile Picture Upload */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Upload Profile Picture <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full text-sm file:px-4 file:py-2 file:border file:rounded-lg file:bg-primary file:text-white file:cursor-pointer"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1 text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-teal text-white font-medium py-2  px-4 rounded-lg transition duration-300"
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
          <Link to="/login" className="text-teal font-semibold hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
