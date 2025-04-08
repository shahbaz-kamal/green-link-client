import React from "react";
import SectionTitle from "../Shared/SectionTitle";

const AboutUs = () => {
  return (
    <div className="bg-background w-11/12 md:w-10/12 mx-auto ">
      <header className="">
        <SectionTitle 
          heading="About GreenLink" 
          subHeading="Connecting People to Planet" 
        />
      </header>

      <div className=" mx-auto bg-white shadow-lg rounded-2xl p-8 border border-teal">
        <div className="space-y-6 text-text">
          <h3 className="text-xl font-semibold text-primary">
            Our Mission
          </h3>
          <p>
            GreenLink is a mission-driven environmental organization dedicated to promoting 
            sustainability, conservation, and climate action. We bridge the gap between 
            passionate individuals and meaningful environmental work through our digital 
            platform.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-8">
            What We Do
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create engaging environmental awareness campaigns</li>
            <li>Organize community clean-up and tree planting events</li>
            <li>Facilitate volunteer coordination for conservation projects</li>
            <li>Provide transparent donation channels for environmental causes</li>
            <li>Offer educational resources on sustainable living</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-secondary bg-opacity-30 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Our Vision</h4>
              <p>
                A world where communities live in harmony with nature, 
                where every individual has the tools and knowledge to 
                make sustainable choices.
              </p>
            </div>
            <div className="bg-accent bg-opacity-20 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Our Approach</h4>
              <p>
                We combine technology with grassroots activism to create 
                measurable environmental impact. Our platform makes it 
                easy for anyone to get involved, regardless of experience level.
              </p>
            </div>
          </div>

          <p className="mt-8 italic">
            "Never doubt that a small group of thoughtful, committed citizens 
            can change the world; indeed, it's the only thing that ever has." 
            <span className="block text-primary mt-1">- Margaret Mead</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;