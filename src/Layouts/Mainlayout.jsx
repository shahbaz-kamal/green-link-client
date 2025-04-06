import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Mainlayout = () => {
  return (
    <>
      <header className="w-full bg-secondary bg-opacity-60 py-6">
        <Navbar></Navbar>
      </header>
      <section>
        <Outlet></Outlet>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Mainlayout;
