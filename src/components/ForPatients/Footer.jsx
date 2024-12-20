import React from "react";
import footerLogo from "../../images/footerLogo.svg";
import instagramLogo from "../../images/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={footerLogo}
        alt="Aivy Health Logo"
        className="footerLogo d-block d-md-none"
      />
      <div className="footerContent">
        <div className="footerMission">
          <img
            src={footerLogo}
            alt="Aivy Health Logo"
            className="footerLogo d-none d-md-block"
          />
          <div className="missionStatement">
            <h3 className="missionTitle">Our Mission</h3>
            <p className="missionDescription">
              Committed to making infusion therapy easy, accessible, and
              personalized for every patient.
            </p>
          </div>
        </div>
        <nav className="footerNav">
          <div className="d-flex footerNavContainer">
            <div className="footerNavColumn">
              <h4 className="footerNavTitle">The Company</h4>
              <ul className="footerNavList">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="/patients">For Patients</a>
                </li>
                <li>
                  <a href="/pharmacies">For Pharmacies</a>
                </li>
                <li>
                  <a href="/employers">For Employers</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footerNavColumn d-block d-mb-none">
              <h4 className="footerNavTitle">Getting Started</h4>
              <ul className="footerNavList">
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#membership">Contact Us</a>
                </li>
              </ul>
              <h4 className="footerNavTitle">Follow Us</h4>
              <a href="https://www.instagram.com/aivyhealth/" target="_blank" rel="noreferrer">
                <img
                  src={instagramLogo}
                  alt="Instagram Logo"
                  className="instaLogo d-block"
                />
              </a>
            </div>
          </div>
          <div className="footerNavColumn d-block d-md-none">
            <h4 className="footerNavTitle">Contact</h4>
            <span className="contact-email">info@aivy-health.com</span>
          </div>
          <div className="footerNavColumn d-none d-mb-block">
            <h4 className="footerNavTitle">Getting Started</h4>
            <ul className="footerNavList">
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#membership">Membership Plan</a>
              </li>
              <li>
                <a href="#refer">Refer A Friend</a>
              </li>
              <li>
                <a href="#support">Support Center</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="footerBottom">
        <p className="copyright">
          © 2024 Aivy Health. All rights reserved.
        </p>
        <div className="legalLinks">
          <a href="#privacy" className="legalLink">
            Privacy Policy
          </a>
          <a href="#terms" className="legalLink">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
