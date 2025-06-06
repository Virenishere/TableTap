import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaArrowRight } from "react-icons/fa";
import Contact from "./Contact";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Function to handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setIsContactModalOpen(true);
  };

  return (
    <section
      className="flex flex-col justify-center items-center w-full py-10"
      id="pricing"
    >
      <div>
        <h1 className="text-3xl font-bold text-center text-white animate-slide-down">
          How It Works
        </h1>
        <h2 className="text-xl text-center text-white mt-2 animate-slide-down">
          Unbelievably Simple, Yet Incredibly Powerful
        </h2>
      </div>
      <div className="rounded-2xl w-full max-w-screen-xl mt-10">
        <Marquee
          pauseOnHover="true"
          className="rounded-2xl py-3 overflow-hidden"
        >
          {/* Pricing Cards Wrapper */}
          <div className="flex flex-nowrap gap-6 px-5 sm:gap-4 lg:gap-6 xl:gap-8">
            {/* Starter Plan */}
            <div className="flex flex-col justify-between items-start bg-gray-800 shadow-lg rounded-lg p-5 h-[400px] w-72 sm:w-64 md:w-72 lg:w-80 xl:w-96 transform transition duration-300 hover:scale-105">
              <div className="text-xl font-semibold text-white mb-2 animate-slide-down">
                Starter Plan
              </div>
              <div className="text-2xl font-bold text-blue-500 mb-4 animate-slide-down">
                $49.99
              </div>
              <div className="text-sm text-white mb-4">
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Unlimited number of items
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Upto 25 tables with unique QR codes
                </div>
                <div className="flex items-center mb-4 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Seamless payments experience
                </div>
              </div>
              <button
                onClick={() => handlePlanSelect("starter")}
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="flex flex-col justify-between items-start bg-gray-800 shadow-lg rounded-lg p-5 h-[400px] w-72 sm:w-64 md:w-72 lg:w-80 xl:w-96 transform transition duration-300 hover:scale-105">
              <div className="text-xl font-semibold text-white mb-2 animate-slide-down">
                Pro Plan
              </div>
              <div className="text-2xl font-bold text-blue-500 mb-4 animate-slide-down">
                $99.99
              </div>
              <div className="text-sm text-white mb-4">
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Unlimited number of items
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Upto 100 QR codes for tables
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Own restaurant/cafe website
                </div>
                <div className="flex items-center mb-4 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Seamless payments experience
                </div>
              </div>
              <button
                onClick={() => handlePlanSelect("pro")}
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col justify-between items-start bg-gray-800 shadow-lg rounded-lg p-5 h-[400px] w-72 sm:w-64 md:w-72 lg:w-80 xl:w-96 transform transition duration-300 hover:scale-105">
              <div className="text-xl font-semibold text-white mb-2 animate-slide-down">
                Enterprise Plan
              </div>
              <div className="text-2xl font-bold text-blue-500 mb-4 animate-slide-down">
                $199.99
              </div>
              <div className="text-sm text-white mb-4">
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Unlimited number of items
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Unlimited QR codes for tables
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Own restaurant/cafe website
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  24/7 support
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  30 diorama
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Up to 3 kitchen operator credentials
                </div>
                <div className="flex items-center mb-4 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Seamless payments experience
                </div>
              </div>
              <button
                onClick={() => handlePlanSelect("enterprise")}
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Custom Plan */}
            <div className="flex flex-col justify-between items-start bg-gray-800 shadow-lg rounded-lg p-5 h-[400px] w-72 sm:w-64 md:w-72 lg:w-80 xl:w-96 transform transition duration-300 hover:scale-105">
              <div className="text-xl font-semibold text-white mb-2 animate-slide-down">
                Custom Plan
              </div>
              <div className="text-2xl font-bold text-blue-500 mb-4 animate-slide-down">
                $149.99
              </div>
              <div className="text-sm text-white mb-4">
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Tailored features to suit your business needs
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Dedicated support & Priority response times
                </div>
                <div className="flex items-center mb-2 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Integration with third-party services
                </div>
                <div className="flex items-center mb-4 animate-slide-down">
                  <FaArrowRight className="mr-2 text-blue-500" />
                  Advanced analytics & Custom reports
                </div>
              </div>
              <button
                onClick={() => handlePlanSelect("custom")}
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </Marquee>
      </div>

      {/* Passing the selected plan to Contact Component */}
      {selectedPlan && (
        <Contact
          isContactModalOpen={isContactModalOpen}
          setIsContactModalOpen={setIsContactModalOpen}
          selectedPlan={selectedPlan}
        />
      )}
    </section>
  );
};

export default Pricing;
