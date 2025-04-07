import React, { useState } from "react";
import logo from "../../assets/logoCircle.png";
import { navAdmin, navDonor, navMenue, navVolunteer } from "./navlinks";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaBell } from "react-icons/fa";
import userIcon from "../../assets/user_Icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveMenu";
import useSingleUserData from "../../Hooks/useSingleUserData";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";

const Navbar = () => {
  // declaring states
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [privateMenuOpen, setPrivateMenuOpen] = useState(false);

  // getting value
  const { user, loading, logOutUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const { userData, role } = useSingleUserData();

  // links
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

  let linksPrivate;

  if (role === "donor") {
    <>
      {
        (linksPrivate = navDonor.map((link) => {
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
        }))
      }
    </>;
  }
  if (role === "volunteer") {
    <>
      {
        (linksPrivate = navVolunteer.map((link) => {
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
        }))
      }
    </>;
  }
  if (role === "admin") {
    <>
      {
        (linksPrivate = navAdmin.map((link) => {
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
        }))
      }
    </>;
  }

  const handleLogOut = async () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Log Out Successful",
          icon: "success",
          draggable: true,
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `${error.message}`,
        });
        setLoading(false);
      });
  };

  console.log(userData, role);

  return (
    <>
      <nav className="w-11/12 2xl:w-10/12 mx-auto ">
        <div className="flex items-center justify-between">
          {/* logo section (navbar start) */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src={logo} alt="" />
            </div>
            <div className="font-extrabold text-xl md:text-3xl hidden md:block">
              <p className="text-primary font-cinzel">
                Green <span className="text-text">Link</span>
              </p>
            </div>
          </div>

          {/* navbar center: menue section */}
          <div className="hidden xl:block">
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

            {user && user?.email ? (
              <button
                onClick={handleLogOut}
                className="rounded-md border border-primary px-6 py-1 text-xl hover:bg-primary hover:text-white duration-300 ease-in-out transition font-semibold"
              >
                Log Out
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="rounded-md border border-primary px-6 py-1 text-xl hover:bg-primary hover:text-white duration-300 ease-in-out transition font-semibold">
                  Login
                </button>
              </Link>
            )}

            {/* image sectiopn */}
            <div className="w-10 h-10 rounded-full border border-primary ">
              {user && user?.email ? (
                <div
                  onClick={() => {
                    if (!user && user?.email) {
                      setPrivateMenuOpen(false);
                      return;
                    }
                    setPrivateMenuOpen(!privateMenuOpen);
                    setHamburgerMenuOpen(false);
                  }}
                >
                  <img referrerPolicy="no-referrer"
                    className="rounded-full w-full h-full object-cover cursor-pointer"
                    src={userData?.photo}
                    alt=""
                  />
                </div>
              ) : (
                <div className="p-1">
                  <img
                    className="rounded-full w-full h-full object-cover "
                    src={userIcon}
                    alt=""
                  />
                </div>
              )}
            </div>

            {/* mobile hamburger menue section */}
            <div
              className="text-primary block xl:hidden"
              onClick={() => {
                setHamburgerMenuOpen(!hamburgerMenuOpen);
                setPrivateMenuOpen(false);
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
        linksPrivate={linksPrivate}
        privateMenuOpen={privateMenuOpen}
      ></ResponsiveMenu>
    </>
  );
};

export default Navbar;
