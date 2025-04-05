import React from "react";
import logo from "../../public/logoCircle.png";

const Navbar = () => {
  return (
    <>
      <nav className="w-11/12 2xl:w-10/12 mx-auto">
        <div>
          {/* logo section (navbar start) */}
          <div className="flex items-center gap-2">
            <div className="w-14 h-14">
              <img src={logo} alt="" />
            </div>
            <div className="font-extrabold text-xl md:text-3xl">
              <p className="text-primary font-cinzel">Green <span className="text-text">Link</span></p> 
            </div>
          </div>

          {/* menue section */}
          {/* notification bell icon symbol button section */}
          {/* login button section */}

          {/* mobile hamburger menue section */}
        </div>
      </nav>
      {/* mobile sidebar section */}
    </>
  );
};

export default Navbar;
