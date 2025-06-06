import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutus" className="py-16 px-4 mx-14">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-center text-white animate-slide-down">Redefining Dining</h1>
        <h2 className="text-xl text-center text-white mt-2 animate-slide-down">Who Are We?</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-300 mt-6 animate-slide-down">
          We need to highlight our journey, milestones, and team
        </p>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {[ 
            {
              title: "Share Your Mission",
              description: "To revolutionize how businesses serve their customers.",
            },
            {
              title: "Vision",
              description: "A world where dining is seamless, efficient, and delightful",
            },
            {
              title: "Values",
              description: "Innovation, reliability, and customer-centricity",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 shadow-lg text-white transform transition hover:scale-105 hover:bg-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
