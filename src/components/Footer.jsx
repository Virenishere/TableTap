import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Contact from "./Contact";
import tableTaplogo from "../assets/logosp.png";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
import CookiesPolicy from "./CookiesPolicy"; // Import CookiesPolicy
import { Link } from "react-router-dom";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isCookiesModalOpen, setIsCookiesModalOpen] = useState(false); // Add state for Cookies Policy modal

  const handleReachUsClick = () => {
    setIsContactModalOpen(true);
  };

  const handlePrivacyPolicyClick = () => {
    setIsPrivacyPolicyOpen(true);
  };

  const handleTermsClick = () => {
    setIsTermsModalOpen(true);
  };

  const handleCookiesPolicyClick = () => {
    setIsCookiesModalOpen(true); // Open Cookies Policy modal
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="#home">
              <div className="flex flex-col items-center space-x-2 justify-center">
                <img src={tableTaplogo} alt="" className="w-16" />
                <span className="text-3xl text-white font-semibold">
                  TableTap
                </span>
              </div>{" "}
            </a>

            <div className="text-center">
              <h3 className="text-white text-sm font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#features">Features</a>
                </li>
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#how-it-works">How It Works</a>
                </li>
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#benefits">Benefits</a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-white text-sm font-semibold mb-4">
                About Us
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#aboutus">About Us</a>
                </li>
                <li className="hover:bg-gray-700 cursor-pointer px-2 py-1">
                  <a href="#FAQ">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li
                  className="hover:bg-gray-700 cursor-pointer px-2 py-1"
                  onClick={handleTermsClick}
                >
                  Terms & Conditions
                </li>
                <li
                  className="hover:bg-gray-700 cursor-pointer px-2 py-1"
                  onClick={handlePrivacyPolicyClick}
                >
                  Privacy Policy
                </li>
                <li
                  className="hover:bg-gray-700 cursor-pointer px-2 py-1"
                  onClick={handleCookiesPolicyClick} // Trigger Cookies Policy modal
                >
                  Cookie Policy
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col items-center">
            <div className="flex space-x-4 text-lg mt-4 gap-3 justify-center">
              <Link
                to="https://www.instagram.com/"
                className="text-white text-3xl hover:text-blue-500 transition-all"
              >
                <FaSquareInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com/"
                className="text-white text-3xl hover:text-blue-500 transition-all"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="http://x.com/"
                className="text-white text-3xl hover:text-blue-500 transition-all"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="text-white text-3xl hover:text-blue-500 transition-all"
              >
                <FaFacebookSquare />
              </Link>
            </div>

            <span className="text-lg text-center mt-2">
              © 2025 TableTap. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {isContactModalOpen && (
        <Contact
          isContactModalOpen={isContactModalOpen}
          setIsContactModalOpen={setIsContactModalOpen}
          selectedPlan={null}
        />
      )}
      {isPrivacyPolicyOpen && (
        <PrivacyPolicy
          isModalOpen={isPrivacyPolicyOpen}
          setModalOpen={setIsPrivacyPolicyOpen}
        />
      )}
      {isTermsModalOpen && (
        <TermsAndCondition
          isModalOpen={isTermsModalOpen}
          setModalOpen={setIsTermsModalOpen}
        />
      )}
      {isCookiesModalOpen && (
        <CookiesPolicy
          isModalOpen={isCookiesModalOpen}
          setModalOpen={setIsCookiesModalOpen}
        />
      )}
    </>
  );
};

export default Footer;
