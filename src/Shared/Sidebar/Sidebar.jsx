import React from 'react';

const Sidebar = () => {
    const { userData, role } = useSingleUserData();
  // navlinks

  let links = <></>;
  if (role === "admin") {
    links = (
      <>
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold text-xl md:text-lg"
              : "text-black text-xl md:text-lg"
          }
        >
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex justify-center items-center">
            <span className="mr-2">
              <MdOutlineDashboardCustomize size={22} />
            </span>
            <span className="block">
              {/* <span className={`${showDashboardNav ? "block" : "hidden"}`}> */}
              Overview
            </span>

            {/* Custom underline */}
            {/* {showDashboardNav && (
      <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
    )} */}
          </li>
        </NavLink>
      </>
    );
  }
    return (
        <div>
            
        </div>
    );
};

export default Sidebar;