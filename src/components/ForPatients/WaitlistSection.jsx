import React from "react";
import waitListBg from "../../images/waitListBg.svg";

function WaitlistSection() {
  return (
    <section className="waitlistSection">
      <img
        src={waitListBg}
        alt=""
        className="waitlistBackground"
      />
      <div className="waitlistContent">
        <h2 className="waitlistTitle">Join our waitlist</h2>
        <p className="waitlistDescription">
          Receive latest infusion news, health tips, and exclusive offers
          straight to your inbox.
        </p>
        <form className="waitlistForm">
          <label htmlFor="email" className="visuallyHidden">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address..."
            className="emailInput"
            aria-label="Enter your email address"
          />
          <a className="submitButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank" rel="noreferrer">
            Send
          </a>
        </form>
      </div>
    </section>
  );
}

export default WaitlistSection;
