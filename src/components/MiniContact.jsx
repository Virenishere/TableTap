import React, { useState } from "react";
import Contact from "../components/Contact";

const MiniContact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Before toggle:", isContactModalOpen);
    setIsContactModalOpen(!isContactModalOpen);
    console.log("After toggle:", !isContactModalOpen);
  };

  return (
    <section id="minicontact" className="py-20 mx-6 lg:mx-14">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
          Connect With Us Today
        </h1>
        <h2 className="text-xl text-white mb-6 opacity-80">
          Ready to Revolutionize Your Business?
        </h2>
        {/* Button to open the modal */}
        <button
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Contact Us
        </button>
      </div>

      {/* Conditionally render the Contact component */}
      {isContactModalOpen && (
        <Contact
          isContactModalOpen={isContactModalOpen}
          setIsContactModalOpen={setIsContactModalOpen}
        />
      )}
    </section>
  );
};

export default MiniContact;
