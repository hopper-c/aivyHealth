import React from "react";
import Header from "../ForPatients/Header.jsx";
import Footer from "../ForPatients/Footer.jsx";
import IntroSection from "./IntroSection.jsx";
import FeatureHighlights from "./FeatureHighlights.jsx";
import Partnership from "./Partnership.jsx";
import ScheduleConsultation from "./ScheduleConsultation.jsx";
import Testimonial from "./Testimonial.jsx";
import Roi from "./Roi.jsx";
import DemoRequest from "../ForPharmacies/DemoRequest.jsx";

function PreLaunchHomePage() {
  return (
    <div className="forEmployersLanding">
      <Header />
        <IntroSection />
        <FeatureHighlights />
        <Partnership />
        <div className="d-none d-md-block">
          <Testimonial/>
        </div>
        <Roi/>
        <div className="d-none d-md-block">
          <ScheduleConsultation />
        </div>
        <div className="d-block d-md-none">
          <DemoRequest />
        </div>
      <Footer />
    </div>
  );
}

export default PreLaunchHomePage;
