import React, { useState } from "react";
import AivyBig from "../../images/aivyLogoBig.svg";

function ScheduleConsultation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:dlancaster08@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="book-consultation">
      <img src={AivyBig} alt="Aivy Logo" />
      <h1>Schedule a Consultation</h1>
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
            placeholder="Subject: Book A Consultation"
            aria-label="Subject"
            className="formInput"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="formRow">
          <textarea
            placeholder="Join us in creating a healthier, more productive workplace with innovative, forward-thinking infusion solutions."
            aria-label="Join us in creating a healthier, more productive workplace with innovative, forward-thinking infusion solutions."
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
  );
}

export default ScheduleConsultation;
