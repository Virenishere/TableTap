import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FaCheck, FaTimes } from 'react-icons/fa'; // Import icons

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    // Set a cookie to remember user consent
    Cookies.set('cookieConsent', 'accepted', { expires: 365 }); // Expire in 1 year
    setShowPopup(false);
  };

  const handleReject = () => {
    // Set a cookie to remember user rejection (optional)
    Cookies.set('cookieConsent', 'rejected', { expires: 365 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-700 text-center sm:text-left">
            We use cookies to improve your experience. By continuing to use this website, you agree to our cookie policy.
          </p>
          <div className="flex space-x-4 justify-center sm:justify-end">
            <button 
              onClick={handleAccept} 
              className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600 flex items-center space-x-2"
            >
              <FaCheck /> {/* Add the check icon */}
              <span>Accept</span>
            </button>
            <button 
              onClick={handleReject} 
              className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-600 flex items-center space-x-2"
            >
              <FaTimes /> {/* Add the cross icon */}
              <span>Reject</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
