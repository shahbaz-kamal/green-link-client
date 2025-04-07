import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useSingleUserData from "../Hooks/useSingleUserData";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import DashboarProvider from "../Provider/DashboarProvider";
import useDashboard from "../Hooks/useDashboard";

const DashboardLayout = () => {
const {name}=useDashboard()
console.log(name)
  return (

      <div className="flex w-full mx-auto gap-6">
        {/* sidebar */}
        <div className="min-h-screen  w-80 bg-secondary bg-opacity-70  fixed ">
          hello
        </div>
        {/* content */}
        <div className=" pl-[350px]">
          <Outlet></Outlet>
        </div>
      </div>
 
  );
};

export default DashboardLayout;
