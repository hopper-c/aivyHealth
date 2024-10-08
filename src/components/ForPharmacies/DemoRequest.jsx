import React, { useState } from "react";
import AivyBig from "../../images/aivyLogoBig.svg";
import aivyTextLogo from "../../images/how-it-works-text-logo.svg";

function DemoRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:demo@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
    <section className="demo-request d-none d-md-flex">
      <img src={AivyBig} alt="Aivy Logo" />
      <h1>
        Get a demo of{" "}
        <img src={aivyTextLogo} alt="Aivy Health" className="logo-demo-request" />
      </h1>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formRow">
          <input
            type="text"
            placeholder="First"
            aria-label="First Name"
            className="formInput"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last"
            aria-label="Last Name"
            className="formInput"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formRow">
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="formInput"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
            className="formInput"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="formRow">
          <input
            type="text"
            placeholder="Subject: Book A Demo"
            aria-label="Subject"
            className="formInput"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="formRow">
          <textarea
            placeholder="Find out why everyone is switching to Aivy Health."
            aria-label="Message"
            className="formTextarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </section>

<h2 className="contactTitle">Still have questions?</h2>
<span className="contact-body">Contact us to explore more ways we can help you achieve health.</span>
<a className="joinButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank">Join the waitlist</a>
</>
  );
}

export default DemoRequest;
