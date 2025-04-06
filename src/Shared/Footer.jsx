import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About GreenLink</h3>
            <p>
              We are a mission-driven organization dedicated to protecting the
              planet, fostering sustainable communities, and empowering
              individuals to take climate action.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-green-400">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="/volunteer" className="hover:text-green-400">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-green-400">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Connect with Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-white/40 pt-6 mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} GreenLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
