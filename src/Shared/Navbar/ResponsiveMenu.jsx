import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ResponsiveMenu = ({ linksPublic, hamburgerMenuOpen }) => {
  return (
    <div className="">
      <AnimatePresence mode="wait">
        {hamburgerMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-20 left-0  h-screen z-20 "
          >
            <div className="text-xl font-semibold uppercase bg-secondary py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-10">
                {linksPublic}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
