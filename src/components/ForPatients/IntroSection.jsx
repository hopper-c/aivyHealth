import React from "react";
import introOnDemand from "../../images/intro-on-demand.svg";
import introOnDemandMobile from "../../images/intro-mobile-patient.svg";

function IntroSection() {
  return (
    <section className="introSection">
      <div className="introContent">
        <h1 className="introTitle">
          On-demand infusions for a healthier you
        </h1>
        <p className="introDescription">
          We integrate wellness and specialty infusions into one service.
          Our approach increases access to treatments, reduces patient wait times, and offers a more efficient, patient-centric solution.
        </p>
        <div className="introCta">
          <a className="joinWaitlistButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank" rel="noreferrer">Join the waitlist</a>
          <button className="treatmentButton">
            What we treat
          </button>
        </div>
      </div>
      <img
        src={introOnDemand}
        alt="Infusion therapy illustration"
        className="introImage d-none d-md-block"
      />
      <img
        src={introOnDemandMobile}
        alt="Infusion therapy illustration"
        className="introImage d-block d-md-none"
      />
    </section>
  );
}

export default IntroSection;
