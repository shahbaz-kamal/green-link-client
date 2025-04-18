import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import Loading from "../Shared/Loading";

const Mainlayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full bg-secondary  py-6 fixed bg-opacity-75 backdrop-blur-md z-10">
        <Navbar></Navbar>
      </header>
      <section className="flex-grow mt-[88px]">
        <Outlet></Outlet>
      </section>
      <footergit>
        <Footer></Footer>
      </footergit>
    </div>
  );
};

export default Mainlayout;
