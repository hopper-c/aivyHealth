import React from "react";
import Header from "./Header";
import IntroSection from "./IntroSection";
import CaseStudy from "./CaseStudy";
import HowItWorks from "./HowItWorks";
import WaitlistSection from "./WaitlistSection";
import FeatureHighlights from "./FeatureHighlights";
import Testimonial from "./Testimonial";
import CallToAction from "./CallToAction";
import FAQSection from "./FAQSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import WhatWeTreat from "./WhatWeTreat";
import EmployersCover from "./EmployersCover";

function PreLaunchHomePage() {
  return (
    <div className="preLaunchHomePage">
      <Header />
      <IntroSection />
      <section className="caseStudySection">
        <div className="d-none d-md-block">
          <CaseStudy />
        </div>
        <HowItWorks />
      </section>
      <WhatWeTreat />
      <div className="d-none d-md-block">
        <WaitlistSection />
      </div>
      <div className="gradient-container">
        <FeatureHighlights />
        <Testimonial />
        <div className="d-md-none d-block caseStudySection">
          <CaseStudy />
        </div>
        <CallToAction />
        <EmployersCover />
      </div>
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default PreLaunchHomePage;
