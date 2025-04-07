import React from "react";
import { FcGoogle } from "react-icons/fc";
import AuthProvider from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLoginUser, updateProfile, loading, setLoading, user, setUser } =
    useAuth();
  const handleGoogleLogin = async () => {
    try {
      const res = await googleLoginUser();
      if (res.user) {
        const newUser = {
          name: res?.user?.displayName,
          photo: res?.user?.photoURL,
          email: res?.user?.email,
        };
        const role = "volunteer";
        const response = await axiosPublic.post(
          `store-user-info?role=${role}`,
          newUser
        );
        console.log(response)
       
        if (response.data.insertedId || response.data.message==="This user already exist") {
          setLoading(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Google login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }

      }
      // console.log(res.user);
      // console.log(response);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
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
