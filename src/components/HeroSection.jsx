import React, { useState } from "react";
import Contact from "./Contact";

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGetStartedClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center pt-16"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-down">
            Revolutionize Your Dining Experience
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 animate-slide-down delay-100">
            Unleash Unbelievable Efficiency in Your Establishment!
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto animate-slide-down delay-200">
            The Future of Dining is Here. Simplify Orders, Supercharge Service,
            and Delight Your Customers with Our QR Code Tabling System.
          </p>
          <button
            onClick={handleGetStartedClick}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg px-8 py-4 transition-all duration-300 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Show Contact Component when modal is open */}
      <Contact
        isContactModalOpen={isContactModalOpen}
        setIsContactModalOpen={setIsContactModalOpen}
      />
    </>
  );
};

export default HeroSection;
