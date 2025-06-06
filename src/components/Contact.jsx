import React, { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const Contact = ({
  isContactModalOpen,
  setIsContactModalOpen,
  selectedPlan,
}) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    city: "",
    businessType: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    city: "",
    businessType: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!contactForm.name) {
      formErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(contactForm.name)) {
      formErrors.name = "Name can only contain letters and spaces.";
    }

    if (!contactForm.phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(contactForm.phone)) {
      formErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!contactForm.city) {
      formErrors.city = "City is required.";
    } else if (!/^[a-zA-Z\u0080-\u024F\s/-]+$/.test(contactForm.city)) {
      formErrors.city = "City can only contain letters, spaces, dashes (-), and slashes (/).";
    }

    if (
      (selectedPlan !== "custom" && !contactForm.businessType) || 
      selectedPlan === "custom"
    ) {
      formErrors.businessType = "Business type is required.";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsContactModalOpen(false);
        setIsFormSubmitted(false);
        setContactForm({
          name: "",
          phone: "",
          city: "",
          businessType: "",
        });
        setErrors({
          name: "",
          phone: "",
          city: "",
          businessType: "",
        });
      }, 3000);
    }
  };

  const getHeading = () => {
    if (selectedPlan === "starter") {
      return "Book a Starter Plan";
    } else if (selectedPlan === "pro") {
      return "Book a Pro Plan";
    } else if (selectedPlan === "custom") {
      return "Book a Custom Plan";
    } else if (selectedPlan === "enterprise") {
      return "Book a Enterprise Plan";
    } else {
      return "Book a Demo";
    }
  };

  return (
    isContactModalOpen && (
      <div
        id="contact"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="bg-gray-900 p-8 rounded-xl w-96 relative">
          <div className="flex justify-between items-center mb-6">
            {!isFormSubmitted && (
              <h2 className="text-2xl font-bold text-white">{getHeading()}</h2>
            )}
            <button
              onClick={() => {
                setIsContactModalOpen(false);
                setIsFormSubmitted(false);
                setContactForm({
                  name: "",
                  phone: "",
                  city: "",
                  businessType: "",
                });
                setErrors({
                  name: "",
                  phone: "",
                  city: "",
                  businessType: "",
                });
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>
          </div>
          {!isFormSubmitted ? (
            <form onSubmit={handleContactFormSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={contactForm.name}
                  onChange={handleContactFormChange}
                  className={`w-full p-3 bg-gray-800 rounded-lg text-white ${errors.name ? "border-red-500" : ""}`}
                  required
                />
                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={contactForm.phone}
                  onChange={handleContactFormChange}
                  className={`w-full p-3 bg-gray-800 rounded-lg text-white ${errors.phone ? "border-red-500" : ""}`}
                  required
                />
                {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={contactForm.city}
                  onChange={handleContactFormChange}
                  className={`w-full p-3 bg-gray-800 rounded-lg text-white ${errors.city ? "border-red-500" : ""}`}
                  required
                />
                {errors.city && <div className="text-red-500 text-sm">{errors.city}</div>}
              </div>
              {(selectedPlan !== "starter" && selectedPlan !== "pro" && selectedPlan !== "enterprise" && selectedPlan !== "custom") && (
                <div>
                  <select
                    name="businessType"
                    value={contactForm.businessType}
                    onChange={handleContactFormChange}
                    className={`w-full p-3 bg-gray-800 rounded-lg text-white ${errors.businessType ? "border-red-500" : ""}`}
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Cafe</option>
                    <option value="canteen">Canteen</option>
                    <option value="bakery">Bakery</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <div className="text-red-500 text-sm">{errors.businessType}</div>}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 py-3 rounded-lg text-white hover:bg-blue-600"
              >
                {isFormSubmitted ? <FaCheckCircle className="mx-auto text-2xl" /> : "Submit"}
              </button>
            </form>
          ) : (
            <div className="text-center text-white">
              <FaCheckCircle className="text-green-500 mx-auto text-6xl mb-4" />
              <h3 className="text-xl font-semibold">Message has been sent!</h3>
              <p className="mt-2">Our team will contact you soon.</p>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Contact;
