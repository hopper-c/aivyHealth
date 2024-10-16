import React from "react";
import forPatientsImg from "../../images/forPatientsIntroImg.svg";
import forPatientsImgMobile from "../../images/intro-mobile-pharmacie.svg";

function IntroSection() {
  return (
    <section className="introSection">
      <div className="introContent">
        <h1 className="introTitle">
          On-Demand Infusion Services for Better Patient Care
        </h1>
        <p className="introDescription">
          We handle your staffing and logistics to deliver timely, high-quality infusions directly to patients' homes.
        </p>
        <div className="introCta">
          <a className="joinWaitlistButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank">Get Started Today</a>
        </div>
      </div>
      <img
        src={forPatientsImg}
        alt="Infusion therapy illustration"
        className="introImage d-none d-md-block"
      />
      <img
        src={forPatientsImgMobile}
        alt="Infusion therapy illustration"
        className="introImage d-block d-md-none"
      />
    </section>
  );
}

export default IntroSection;
