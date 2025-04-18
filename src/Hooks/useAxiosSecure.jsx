import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://green-link-server.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;
