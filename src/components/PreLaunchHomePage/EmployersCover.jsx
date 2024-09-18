import React, { useState } from "react";
import searchIcon from "../../images/searchIcon.svg";
import iphone from "../../images/iphone.svg";

function HRForm() {
    const [formData, setFormData] = useState({
      contactEmail: "",
      contactName: "",
      contactTitle: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Construct mailto link
      const subject = encodeURIComponent("HR/Operations Manager Inquiry");
      const body = encodeURIComponent(
        `Contact Email: ${formData.contactEmail}\n` +
        `Contact Name: ${formData.contactName}\n` +
        `Contact Title: ${formData.contactTitle}\n\n` +
        `Message: I'm interested in learning more about Aivy Health for my company.`
      );
  
      const mailtoLink = `mailto:example@aivyhealth.com?subject=${subject}&body=${body}`;
      
      // Open mail client with prefilled info
      window.location.href = mailtoLink;
    };
  
    return (
      <section className="hr-form-section">
        <h2>Don’t worry, you can still join!</h2>
        <p>
          See if you’re eligible for our <a href="/individual-program">individual program</a>, or submit your HR/Operations manager’s email below so we can tell them you are interested in Aivy Health.
        </p>
  
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contactEmail">Contact Email</label>
            <p>Please provide the email of the relevant person at the company who handles your benefits package.</p>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="Hr@company"
              value={formData.contactEmail}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="contactName">Contact Name</label>
            <p>Enter the name of the person responsible for your benefits package.</p>
            <input
              type="text"
              id="contactName"
              name="contactName"
              placeholder="E.g. John Smith"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="contactTitle">Contact Title</label>
            <p>Let us know if this is your line manager, a HR person or someone else!</p>
            <input
              type="text"
              id="contactTitle"
              name="contactTitle"
              placeholder="HR, manager, colleague, etc."
              value={formData.contactTitle}
              onChange={handleChange}
              required
            />
          </div>
  
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </section>
    );
  }  

function EmployersCover() {
  const [showHRForm, setShowHRForm] = useState(false); // State to toggle HRForm

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowHRForm(true); // Show HRForm when form is submitted
  };

  return (
    <section className="employersCover">
      <div className="employersContent">
        <img className="employersImage" src={iphone} alt="iPhone with Aivy Health" />
        <div className="employersTextContainer">
          <h2>Employers cover Aivy Health</h2>
          <span>
            Your company may be covering the cost of Aivy Health for employees and their families. Aivy Health offers personalized infusion therapy, including on-demand wellness and urgent care infusions, specialty treatments, and 1:1 telehealth consultations. Our services are designed to make infusion therapy easy, accessible, and personalized for every patient. Search below to see if your employer covers Aivy Health.
          </span>
          <span>
            If you don’t find your employer listed, you can sign up for a membership independently here.
          </span>
          <div className="employerSearchContainer">
            <form className="searchForm" onSubmit={handleSearchSubmit}>
              <label htmlFor="search" className="visuallyHidden">
                Enter your employer
              </label>
              <input
                type="search"
                id="search"
                placeholder="Enter your employer"
                className="searchInput"
              />
              <img
                src={searchIcon}
                alt="Search"
                className="searchIcon"
              />
              <button type="submit" className="submitButton">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Render HRForm below EmployersCover */}
      {showHRForm && <HRForm />}
    </section>
  );
}

export default EmployersCover;
