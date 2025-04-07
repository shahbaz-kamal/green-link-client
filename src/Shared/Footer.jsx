import React from "react";
import logo from "../assets/logoCircle.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-10 mt-12">
      <div className="w-11/12 md:w-10/12 mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About + Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <img src={logo} alt="GreenLink Logo" className="w-10 h-10" />
              <h2 className="text-3xl font-extrabold font-cinzel">
                Green<span className="text-text">Link</span>
              </h2>
            </div>
            <p className="text-sm">
              A mission-driven organization protecting the planet, promoting
              sustainability, and empowering climate action.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-green-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-green-300 transition">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="/volunteer"
                  className="hover:text-green-300 transition"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-green-300 transition">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-end">
            <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
            <div className="flex gap-4 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/30 pt-6 mt-10 text-center text-sm">
          &copy; {new Date().getFullYear()} GreenLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
