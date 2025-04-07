import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-4xl font-extrabold text-teal uppercase mb-2">
        {heading}
      </h2>
      <p className="text-lg text-gray-600 font-medium">
        {subHeading}
      </p>
      <div className="mt-4 w-24 h-1 mx-auto bg-primary rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
