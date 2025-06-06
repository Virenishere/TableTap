import React from "react";

const Features = () => {
  return (
    <div className="p-6" id="features">
      <h1 className="text-3xl font-bold text-center text-white animate-slide-down">
        Features
      </h1>
      <h2 className="text-xl text-center text-white mt-2 animate-slide-down delay-100">
        Unleash the Power of Smart Dining
      </h2>

      <div className="mt-6 grid gap-4 mx-14">
        {[
          {
            title: "Seamless Ordering",
            description:
              "Empower customers to browse, order, and pay from their table effortlessly.",
          },
          {
            title: "Lightning-Fast Payments",
            description:
              "Integrated with Razorpay for instant, secure transactions.",
          },
          {
            title: "Dynamic Menu",
            description:
              "Update your menu in real-time without printing costs.",
          },
          {
            title: "Insightful Analytics",
            description:
              "Unlock actionable insights to boost revenue and customer satisfaction.",
          },
        ].map((feature, index) => (
          <div
            key={feature.title}
            className={`bg-gray-900 p-4 rounded-lg shadow-lg text-white transform transition hover:scale-105 hover:bg-gray-800 animate-slide-down delay-${index * 100}`}
          >
            <div className="text-blue-500 text-lg font-semibold mb-2">
              {feature.title}
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
