import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Pricing from "../components/Pricing";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import MiniContact from "../components/MiniContact";
import ContactFlyer from "../components/Contact";
import TermsAndCondition from "../components/TermsAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import CookiesPolicy from "../components/CookiesPolicy";
import CookiePopup from "../components/CookiePopup";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <CookiePopup />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <AboutUs />
      <FAQ />
      <MiniContact />
      <PrivacyPolicy />
    </div>
  );
};

export default LandingPage;
