import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 mx-6 lg:mx-14">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-center text-white animate-slide-down">
          Why Choose Us?
        </h1>
        <h2 className="text-xl text-center text-white mt-2 animate-slide-down delay-100">
          Transform Your Business, Delight Your Guests
        </h2>
        <div className="mt-6">
          {[
            {
              description: "Boost efficiency with minimal staff intervention",
            },
            {
              description:
                "Elevate customer experience with intuitive ordering",
            },
            {
              description: "Reduce operational costs and increase profits",
            },
            {
              description: "Stay ahead with cutting-edge technology",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-lg text-white transform transition hover:scale-105 hover:bg-gray-800 mb-6 animate-slide-down delay-${(index + 1) * 100}`}
            >
              <p className="text-lg font-medium text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
