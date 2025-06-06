import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const CookiesPolicy = ({ isModalOpen, setModalOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Manage the expanded state

  const toggleText = () => {
    setIsExpanded(!isExpanded); // Toggle between show more/less text
  };

  const closeModal = () => {
    setModalOpen(false); // Close modal when clicking on the close icon
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-gray-900 text-gray-400 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 max-h-[80vh] p-6 relative overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-700">
          {/* Close Icon */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <h1 className="text-2xl font-bold mb-4 text-center text-white">
            Cookies Policy
          </h1>

          {/* Cookies Policy Content */}
          <p className="text-gray-300 mb-4">
            This Cookies Policy explains how tableTap uses cookies and similar technologies to enhance your experience.
          </p>

          <h3 className="font-semibold text-white">1. What Are Cookies?</h3>
          <p className="text-gray-300 mb-4">
            Cookies are small text files stored on your device when you visit a website. They help us understand user behavior and improve our Service.
          </p>

          <h3 className="font-semibold text-white">2. Types of Cookies We Use</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Essential Cookies: Necessary for the operation of our Service.</li>
            <li>Analytics Cookies: Help us analyze usage patterns to enhance performance.</li>
            <li>Preference Cookies: Save your settings and preferences for future visits.</li>
          </ul>

          <h3 className="font-semibold text-white">3. Managing Cookies</h3>
          <p className="text-gray-300 mb-4">
            You can manage or disable cookies through your browser settings. Note that disabling cookies may affect functionality.
          </p>

          {/* Conditionally render full text with scrollable content */}
          <div className={`text-gray-300 mb-4 ${isExpanded ? "max-h-full overflow-auto" : "max-h-40 overflow-hidden"}`}>
            {/* Full Text After Expanding */}
            {isExpanded && (
              <>
                <h3 className="font-semibold text-white">4. Third-Party Cookies</h3>
                <p className="text-gray-300 mb-4">
                  We use third-party cookies, such as Google Analytics, for analytics and tracking. These providers have their own privacy policies.
                </p>

                <h3 className="font-semibold text-white">5. Consent to Cookies</h3>
                <p className="text-gray-300 mb-4">
                  By continuing to use our Service, you consent to the placement and use of cookies as described in this policy.
                </p>
              </>
            )}
          </div>

          {/* Read More / Less Toggle */}
          <button
            onClick={toggleText}
            className="text-blue-500 hover:underline mt-2 block mx-auto"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    )
  );
};

export default CookiesPolicy;
