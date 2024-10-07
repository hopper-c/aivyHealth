import React, { useState } from "react";
import ivCouch from '../../images/man_iv_pole.svg';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    insurance: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:contact@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nState: ${formData.state}\nInsurance: ${formData.insurance}\n\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
    <section className="contactSection d-none d-md-flex">
      <div className="contactInfo">
        <h2 className="contactTitle">Still have questions?</h2>
        <p className="contactDescription">
          Contact us to explore more ways we can help you achieve health.
        </p>
        <img src={ivCouch} alt="Contact illustration" className="contactImage" />
      </div>
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
            placeholder="State"
            aria-label="State"
            className="formInput"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Insurance Provider"
            aria-label="Insurance Provider"
            className="formInput"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
          />
        </div>
        <div className="formRow">
          <input
            type="text"
            placeholder="Subject"
            aria-label="Subject"
            className="formInput"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="formRow">
          <textarea
            placeholder="How can we help you?"
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
    <section className="contactSection d-flex d-md-none">
      <h2 className="contactTitle">Still have questions?</h2>
      <span className="contact-body">Contact us to explore more ways we can help you achieve health.</span>
      <button className="joinButton" href="https://forms.gle/your-google-form-link" target="_blank">Join the waitlist</button>
    </section>
    </>
  );
}

export default ContactForm;
