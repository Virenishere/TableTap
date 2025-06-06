import React from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 mx-14">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-center text-white animate-slide-down">
          How It Works
        </h1>
        <h2 className="text-xl text-center text-white mt-2 animate-slide-down delay-100">
          Unbelievably Simple, Yet Incredibly Powerful
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-300 mt-6 animate-slide-down delay-200">
          Discover how our process ensures a seamless and efficient experience.
        </p>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {[
            {
              step: "1",
              title: "Scan QR Code",
              description: "Customer scans QR code at table",
            },
            {
              step: "2",
              title: "Place Orders Instantly",
              description: "No waiting for servers, no confusion",
            },
            {
              step: "3",
              title: "Pay Securely",
              description:
                "Hassle-free transactions with multiple payment options",
            },
          ].map((item, index) => (
            <div
              key={item.step}
              className={`bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-lg text-white transform transition hover:scale-105 hover:bg-gray-800 animate-slide-down delay-${(index + 1) * 100}`}
            >
              <div className="text-5xl font-bold text-blue-500 mb-4">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
