import React from "react";
import logo from "../../public/logoCircle.png";
import { navMenue } from "./navlinks";
import { NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      {navMenue.map((link) => {
        return (
          <>
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `transition ease-in-out duration-300 font-semibold text-xl ${
                  isActive ? "text-primary underline" : "text-text"
                }`
              }
            >
              <li className=" hover:text-primary hover:underline ">
                <span className="px-2"> {link.title}</span>
              </li>
            </NavLink>
          </>
        );
      })}
    </>
  );
  return (
    <>
      <nav className="w-11/12 2xl:w-10/12 mx-auto ">
        <div className="flex items-center gap-10">
          {/* logo section (navbar start) */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-14">
              <img src={logo} alt="" />
            </div>
            <div className="font-extrabold text-xl md:text-3xl">
              <p className="text-primary font-cinzel">
                Green <span className="text-text">Link</span>
              </p>
            </div>
          </div>

          {/* menue section */}
          <div className="hidden md:block">
            <ul className="flex gap-4 ">{links}</ul>
          </div>

          {/* notification bell icon symbol button section */}
          <div className="text-primary  hover:cursor-pointer relative">
            {/*  when notification have hover:animate-bounce */}
            <div>
              <FaBell size={25} />
            </div>
            <p className="absolute -top-2 right-0 font-bold text-primary   rounded-full text-base">
              1
            </p>
          </div>
          {/* login button section */}

          {/* mobile hamburger menue section */}
        </div>
      </nav>
      {/* mobile sidebar section */}
    </>
  );
};

export default Navbar;
