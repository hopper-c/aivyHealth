import React from "react";

const handleClick = (e) => {
  e.preventDefault();

  const mailtoLink = 'mailto:contact@example.com?subject=Aivy Health'
  window.location.href = mailtoLink;
};

function CallToAction() {
  return (
    <section className="callToAction">
      <div className="ctaContent">
        <span className="ctaSubtitle">WE'RE HERE FOR YOU</span>
        <h2 className="ctaTitle">
          Book your on-demand infusion today
        </h2>
        <p className="ctaDescription">
          Curious if on-demand infusion is right for you? Message or email us at
          any time. We'll help you every step of the way.
        </p>
      </div>
      <div className="flexRow">
        <div className="ctaButtons">
          <a className="waitlist" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank" rel="noreferrer">
            Join the waitlist
          </a>
          <button className="contactUs" onClick={handleClick}>Contact us</button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
