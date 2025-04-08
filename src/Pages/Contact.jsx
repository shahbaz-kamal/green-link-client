import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-background w-11/12 md:w-10/12 mx-auto ">
      <header className="">
        <SectionTitle
          heading="Contact GreenLink"
          subHeading="Get in touch with our team"
        />
      </header>

      <div className=" mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Information Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-teal h-full">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Our Contact Details
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-medium text-text">Headquarters</h4>
                <p className="text-gray-600">
                 House : 1, Road : 3, Nikunja-2,
                  <br />
                  Khilkhet, Dhaka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaPhone size={18} />
              </div>
              <div>
                <h4 className="font-medium text-text">Phone</h4>
                <p className="text-gray-600">+880 1799839985</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="font-medium text-text">Email</h4>
                <p className="text-gray-600">info@greenlink.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary mt-1">
                <FaClock size={18} />
              </div>
              <div>
                <h4 className="font-medium text-text">Office Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9AM - 5PM
                  <br />
                  Saturday: 10AM - 2PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-teal">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                
                  className="block text-sm font-medium text-text mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
               
                  className="block text-sm font-medium text-text mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
               
                className="block text-sm font-medium text-text mb-1"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="What's this about?"
                required
              />
            </div>

            <div>
              <label
             
                className="block text-sm font-medium text-text mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-teal text-white font-medium py-3 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className=" mx-auto mt-12 bg-white shadow-lg rounded-2xl p-4 border border-teal">
        <h3 className="text-xl font-semibold text-primary mb-4">
          Find Us on Map
        </h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          {/* Placeholder for map embed - replace with your actual map component */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449245253!3d40.74844097138995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNyJX!5e0!3m2!1sen!2sus!4v1623862345678!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
            title="GreenLink Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
