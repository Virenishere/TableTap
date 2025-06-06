import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const PrivacyPolicy = ({ isModalOpen, setModalOpen }) => {
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
            Privacy Policy
          </h1>

          {/* Privacy Policy Content */}
          <p className="mb-4">
            At tableTap, we respect your privacy and are committed to protecting the personal information of our users and their customers. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>

          <h3 className="font-semibold text-white">1. Information We Collect</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Business Information: Name, address, email, phone number, and payment details.</li>
            <li>Customer Information: Order history, device information, and interactions with the QR code system.</li>
            <li>Automatically Collected Data: IP address, browser type, device information, and location data through cookies.</li>
          </ul>

          <h3 className="font-semibold text-white">2. How We Use Your Information</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li>Provide and maintain our Service.</li>
            <li>Process transactions and facilitate payments.</li>
            <li>Analyze and improve our platform’s functionality.</li>
            <li>Communicate with you about updates, promotions, or technical issues.</li>
          </ul>

          {/* Conditionally render full text with scrollable content */}
          <div className={`text-gray-300 mb-4 ${isExpanded ? "max-h-full overflow-auto" : "max-h-40 overflow-hidden"}`}>
            {/* Limited Text Initially */}
            {!isExpanded && (
              <p>
                Additional information regarding updates, changes, or usage of your data may be included in the future.
              </p>
            )}

            {/* Full Text Shown After Expanding */}
            {isExpanded && (
              <div className="text-gray-300 mb-4 overflow-y-auto">
                <h3 className="font-semibold text-white">3. Data Sharing and Disclosure</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300">
                  <li>Service Providers: Payment gateways and analytics providers to process data securely.</li>
                  <li>Legal Authorities: When required to comply with legal obligations or enforce our terms.</li>
                  <li>Partners: If necessary to deliver integrated features, with your consent.</li>
                </ul>

                <h3 className="font-semibold text-white">4. Data Security</h3>
                <p className="text-gray-300 mb-4">
                  We implement advanced security measures, including encryption, to protect your data. However, no online system is entirely secure, and we cannot guarantee absolute security.
                </p>

                <h3 className="font-semibold text-white">5. Retention of Data</h3>
                <p className="text-gray-300 mb-4">
                  We retain data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
                </p>

                <h3 className="font-semibold text-white">6. Your Rights</h3>
                <ul className="list-disc pl-5 mb-4 text-gray-300">
                  <li>Access, update, or delete your personal information.</li>
                  <li>Withdraw consent for data collection or processing.</li>
                  <li>Lodge complaints with a data protection authority if you believe your rights have been violated.</li>
                </ul>

                <h3 className="font-semibold text-white">7. Changes to Privacy Policy</h3>
                <p className="text-gray-300 mb-4">
                  We may revise this Privacy Policy periodically. Updates will be posted on this page.
                </p>
              </div>
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

export default PrivacyPolicy;
