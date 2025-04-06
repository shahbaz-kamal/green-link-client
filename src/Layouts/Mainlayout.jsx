import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full bg-secondary  py-6 fixed bg-opacity-75 backdrop-blur-md">
        <Navbar></Navbar>
      </header>
      <section className="flex-grow">
        <Outlet></Outlet>
      </section>
      <footergit>
        <Footer></Footer>
      </footergit>
    </div>
  );
};

export default Mainlayout;
