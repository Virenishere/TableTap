import React, { useState } from "react";
import Contact from "./Contact";
import tableTaplogo from "../assets/logosp.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4  sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
        <div className="flex items-center space-x-2">
          <div><img src={tableTaplogo} alt="" className="w-12" /></div>
          <span className="text-3xl font-semibold">TableTap</span>
        </div></a>

        {/* Hamburger Menu for Mobile and Tablet */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links (Desktop View) */}
        <ul className="hidden lg:flex space-x-6 text-sm">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-300">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-gray-300">
              How It Works
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-gray-300">
              Benefits
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#aboutus" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-gray-300">
              FAQ
            </a>
          </li>
          <li>
            <a href="#minicontact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Button (Desktop Only) */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Request Demo
          </button>
        </div>
      </div>

      {/* Links (Mobile and Tablet View) */}
      {isMenuOpen && (
        <ul className="absolute top-12 left-0 w-full bg-gray-900 text-white z-10 flex flex-col space-y-2 mt-4 p-4 shadow-lg items-center lg:hidden">
          <li>
            <a href="#home" className="hover:text-gray-300 w-full text-center">
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-gray-300 w-full text-center"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#how-it-works"
              className="hover:text-gray-300 w-full text-center"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="hover:text-gray-300 w-full text-center"
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-gray-300 w-full text-center"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              className="hover:text-gray-300 w-full text-center"
            >
              About Us
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-gray-300 w-full text-center">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#minicontact"
              className="hover:text-gray-300 w-full text-center"
            >
              Contact
            </a>
          </li>
        </ul>
      )}

      {/* Contact Modal */}
      <Contact
        isContactModalOpen={isContactModalOpen}
        setIsContactModalOpen={setIsContactModalOpen}
      />
    </nav>
  );
};

export default Navbar;
