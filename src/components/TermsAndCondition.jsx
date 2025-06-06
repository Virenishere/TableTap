import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const TermsAndCondition = ({ isModalOpen, setModalOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Manage the expanded state
  const closeModal = () => {
    setModalOpen(false);
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
            Terms and Conditions
          </h1>

          <p className="mb-4">
            Welcome to tableTap! These Terms and Conditions ("Terms") are a legal agreement between you
            and tableTap, governing your use of our website and QR code tabling system ("Service") for
            restaurants, cafes, canteens, bakeries, and other establishments. By accessing or using our
            Services, you agree to be bound by these Terms.
          </p>

          <h3 className="font-semibold text-white">1. Definitions</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-300">
            <li><strong>"We," "Us," or "Our"</strong>: Refers to tableTap.</li>
            <li><strong>"You" or "User"</strong>: Refers to any individual, business, or entity using our Service.</li>
            <li><strong>"Customer"</strong>: Refers to end-users interacting with the QR codes.</li>
            <li><strong>"Content"</strong>: Refers to all text, images, and data provided through our Service.</li>
          </ul>

          {/* Conditionally render full text with scrollable content */}
          <div className={`text-gray-300 mb-4 ${isExpanded ? "max-h-full overflow-auto" : "max-h-40 overflow-hidden"}`}>
            <h3 className="font-semibold text-white">2. Scope of the Service</h3>
            <p>
              Our QR code tabling system enables businesses to provide digital menus, accept orders,
              and facilitate payments through QR codes.
            </p>
            <p>
              We act as a technology provider, not as a direct participant in any transactions
              between businesses and customers.
            </p>

            <h3 className="font-semibold text-white">3. User Responsibilities</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>You must provide accurate and up-to-date information during registration and maintain it.</li>
              <li>You are responsible for displaying QR codes in accessible and appropriate locations in your establishment.</li>
              <li>You agree to comply with all applicable laws and regulations while using our Service.</li>
            </ul>

            <h3 className="font-semibold text-white">4. Prohibited Activities</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-300">
              <li>Misuse the Service for fraudulent, illegal, or harmful purposes.</li>
              <li>Modify, reverse-engineer, or attempt to access the Service’s source code.</li>
              <li>Interfere with or disrupt the operation of the Service.</li>
            </ul>

            <h3 className="font-semibold text-white">5. Fees and Payments</h3>
            <p>
              We may charge fees for certain features of the Service, as disclosed at the time of purchase or activation.
              Payments processed via Payment Gateway i.e., Razorpay are subject to their terms and conditions.
              Any disputes related to payments must be resolved directly with the payment gateway or your bank.
            </p>

            <h3 className="font-semibold text-white">6. Intellectual Property</h3>
            <p>
              All content, software, and technology used in the Service are owned by or licensed to tableTap.
              You may not copy, distribute, or create derivative works based on our intellectual property
              without prior written consent.
            </p>

            <h3 className="font-semibold text-white">7. Limitation of Liability</h3>
            <p>
              We are not liable for indirect, incidental, or consequential damages resulting from your use of
              the Service. Our liability for direct damages is limited to the fees paid for the Service during the past six months.
            </p>

            <h3 className="font-semibold text-white">8. Indemnification</h3>
            <p>
              You agree to indemnify and hold tableTap harmless from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
            </p>

            <h3 className="font-semibold text-white">9. Termination</h3>
            <p>
              We may suspend or terminate your access to the Service at any time if you breach these Terms.
              You may terminate your use of the Service by providing written notice to us.
            </p>

            <h3 className="font-semibold text-white">10. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes arising under these Terms shall
              be subject to the exclusive jurisdiction of the courts in India.
            </p>

            <h3 className="font-semibold text-white">11. Changes to Terms</h3>
            <p>
              We reserve the right to update these Terms at any time. You will be notified of any material
              changes, and continued use of the Service constitutes your acceptance.
            </p>
          </div>

          {/* Read More Button */}
          {!isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-blue-500 mt-4 block mx-auto"
            >
              Read More
            </button>
          )}

          {/* Scrollable Terms */}
          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-blue-500 mt-4 block mx-auto"
            >
              Show Less
            </button>
          )}

        </div>
      </div>
    )
  );
};

export default TermsAndCondition;
