import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which question is open

  const toggleAnswer = (index) => {
    // Toggle the visibility of the answer for the clicked question
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 mx-14">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white">
          Answers to Your Questions, All in One Place
        </h1>
        <div className="space-y-6 mt-6">
          {[
            {
              question: "How does the QR Code Tabling System work?",
              answer:
                "The system works in three simple steps:\n1. Customers scan a unique QR code placed on their table using their smartphones.\n2. They access a digital menu, place orders, and make payments directly from their device.\n3. The orders are sent to your kitchen or service team instantly, streamlining operations and improving efficiency.",
            },
            {
              question: "Is the system secure for payments and data handling?",
              answer:
                "Yes, security is our top priority. Payments are processed using trusted gateways like Razorpay with encryption to protect sensitive data. We also comply with industry standards for data security to safeguard customer information and business data.",
            },
            {
              question: "Can I customize the menu and user interface?",
              answer:
                "Absolutely! Our platform allows you to customize your menu in real-time, including item descriptions, prices, and availability. You can also add your branding, such as your logo and colors, to ensure the system matches your business identity.",
            },
            {
              question: "What types of businesses can use this system?",
              answer:
                "Our system is designed to be versatile and can be used by restaurants, cafes, canteens, bakeries, and even movie theaters for in-seat ordering. Whether you’re a small cafe or a large establishment, our solution scales to meet your needs.",
            },
            {
              question:
                "Do customers need to download an app to use the system?",
              answer:
                "No, there’s no app required! The system is web-based, meaning customers can access the digital menu and place orders directly through their smartphone browser after scanning the QR code.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl">
              <div
                onClick={() => toggleAnswer(index)} // Handle click to toggle visibility
                className="flex items-center justify-between cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-blue-500  sm:text-lg">
                  {faq.question}
                </h3>
                <span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-blue-500" />
                  ) : (
                    <FaChevronDown className="text-blue-500" />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-white mt-3 whitespace-pre-line text-sm sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
