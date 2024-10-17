import React from "react";
import Header from "../ForPatients/Header.jsx";
import Footer from "../ForPatients/Footer.jsx";
import IntroSection from "./IntroSection.jsx";
import FeatureHighlights from "./FeatureHighlights.jsx";
import HowItWorks from "./HowItWorks.jsx";
import DemoRequest from "./DemoRequest.jsx";

function PreLaunchHomePage() {
  return (
    <div className="forPharmaciesLanding">
      <Header />
        <IntroSection />
        <FeatureHighlights />
        <HowItWorks />
        <DemoRequest />
      <Footer />
    </div>
  );
}

export default PreLaunchHomePage;
