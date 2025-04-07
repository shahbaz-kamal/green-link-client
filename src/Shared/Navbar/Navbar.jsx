import React, { useState } from "react";
import logo from "../../assets/logoCircle.png";
import { navMenue } from "./navlinks";
import { Link, NavLink } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import userIcon from "../../assets/user_Icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [privateMenuOpen, setPrivateMenuOpen] = useState(false);
  console.log(hamburgerMenuOpen);
  const linksPublic = (
    <>
      {navMenue.map((link) => {
        if (link.role === "public") {
          return (
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
          );
        }
      })}
    </>
  );

  return (
    <>
      <nav className="w-11/12 2xl:w-10/12 mx-auto ">
        <div className="flex items-center justify-between">
          {/* logo section (navbar start) */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src={logo} alt="" />
            </div>
            <div className="font-extrabold text-xl md:text-3xl">
              <p className="text-primary font-cinzel">
                Green <span className="text-text">Link</span>
              </p>
            </div>
          </div>

          {/* navbar center: menue section */}
          <div className="hidden 2xl:block">
            <ul className="flex gap-4 ">{linksPublic}</ul>
          </div>

          {/*Navbar ENd: notification bell icon symbol &  login/log out button section */}
          <div className="flex items-center gap-4">
            {/* icon section */}
            <div className="text-primary  hover:cursor-pointer relative">
              {/*  when notification have hover:animate-bounce */}
              <div>
                <FaBell size={25} />
              </div>
              <p className="absolute -top-2 right-0 font-bold text-primary   rounded-full text-base">
                1 {/* will be changed dynamically */}
              </p>
            </div>
            {/* button section */}
            <Link to={'/login'}>
              {" "}
              <button className="rounded-md border border-primary px-6 py-1 text-xl hover:bg-primary hover:text-white duration-300 ease-in-out transition font-semibold">
                Login
              </button>
            </Link>

            {/* image sectiopn */}
            <div className="w-10 h-10 rounded-full border border-primary p-1">
              <img src={userIcon} alt="" />
            </div>

            {/* mobile hamburger menue section */}
            <div
              className="text-primary"
              onClick={() => {
                setHamburgerMenuOpen(!hamburgerMenuOpen);
              }}
            >
              <GiHamburgerMenu className="text-4xl" />
            </div>
          </div>

          {/*  */}
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu
        hamburgerMenuOpen={hamburgerMenuOpen}
        linksPublic={linksPublic}
      ></ResponsiveMenu>
    </>
  );
};

export default Navbar;
