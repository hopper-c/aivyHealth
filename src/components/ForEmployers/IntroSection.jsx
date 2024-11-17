import React from "react";
import forEmployersIntro from "../../images/employerIntro.svg";
import forEmployersIntroMobile from "../../images/intro-mobile-employer.svg";

function IntroSection() {
  return (
    <section className="introSection">
      <div className="introContent">
        <h1 className="introTitle">
          Empower Your Workforce with Wellness
        </h1>
        <p className="introDescription">
          Increase productivity and cut costs with a wellness benefit that sets your company apart.
        </p>
        <div className="introCta">
          <a className="joinWaitlistButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank" rel="noreferrer">Get Started Today</a>
        </div>
      </div>
      <img
        src={forEmployersIntro}
        alt="Infusion therapy illustration"
        className="introImage d-none d-md-block"
      />
      <img
        src={forEmployersIntroMobile}
        alt="Infusion therapy illustration"
        className="introImage d-block d-md-none"
      />
    </section>
  );
}

export default IntroSection;
