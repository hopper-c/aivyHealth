/**
 * This code was generated by Builder.io.
 */
import React from "react";


function HowItWorks() {
  const steps = [
    {
      title: "Choose your infusion",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac73e37eb21396f9475f6935d145d3567e784afe8d48f2e8e6242440b7411664?placeholderIfAbsent=true&apiKey=03b8c186f0974d22b1cfe3aef28c106c",
    },
    {
      title: "Schedule & track",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac73e37eb21396f9475f6935d145d3567e784afe8d48f2e8e6242440b7411664?placeholderIfAbsent=true&apiKey=03b8c186f0974d22b1cfe3aef28c106c",
    },
    {
      title: "Receive patient-centered care",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ac73e37eb21396f9475f6935d145d3567e784afe8d48f2e8e6242440b7411664?placeholderIfAbsent=true&apiKey=03b8c186f0974d22b1cfe3aef28c106c",
    },
  ];

  return (
    <section className="howItWorks">
      <h2 className="howItWorksTitle">How it works</h2>
      <p className="howItWorksDescription">
        At Aivy Health, we deliver on-demand infusion therapy tailored to your
        needs. Whether you're managing a chronic condition with a specialty
        infusion prescribed by your physician or seeking a wellness boost, our
        service brings personalized care directly to you, wherever you are.
      </p>
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div className="stepInfo">
            <h3 className="stepTitle">
              Step {index + 1}: {step.title}
            </h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2398f982f1edf5bf7b30736886486c29f9fa9a46f16af1ee3da61f587f6511?placeholderIfAbsent=true&apiKey=03b8c186f0974d22b1cfe3aef28c106c"
              alt=""
              className="stepIcon"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default HowItWorks;
