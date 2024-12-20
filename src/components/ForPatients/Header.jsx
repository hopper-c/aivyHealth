import React from "react";
import searchIcon from "../../images/searchIcon.svg";
import profileIcon from "../../images/profile-icon.svg";
import HamburgerMenu from "./HamburgerMenu";
import { HashLink } from 'react-router-hash-link';
import aivyTextLogo from "../../images/aivy-header-text-logo.svg";
import aivyTextLogoTrans from "../../images/aivyLogoTransparent.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={aivyTextLogoTrans}
        alt="Aivy Health"
        className="logo d-block d-md-none"
      />
      <div className="topMenu">
        <a className="joinButton" href="https://docs.google.com/forms/d/e/1FAIpQLSfN2KYoAu1_UTwnemUDbIgfh20xzRCfo_SbkRA_kZ_Zeb3vsw/viewform" target="_blank" rel="noreferrer">Join the waitlist</a>
      </div>
      <HamburgerMenu />
      <nav className="mainNav">
        <ul className="navList">
          <li>
            <a href="/" className="navLink">
              For Patients
            </a>
          </li>
          <li>
            <a href="/pharmacies" className="navLink">
              For Pharmacies
            </a>
          </li>
        </ul>
        <img
          src={aivyTextLogo}
          alt="Aivy Health"
          className="logo"
        />
        <div className="rightContainer">
          <ul className="navList m-0">
            <li>
              <HashLink to="/patients#faqSection" className="navLink">
                FAQs
              </HashLink>
            </li>
          </ul>
          <form className="searchForm">
            <label htmlFor="search" className="visuallyHidden">
              Search
            </label>
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="searchInput"
            />
            <button type="submit" className="searchButton">
              <img
                src={searchIcon}
                alt="Search"
                className="searchIcon"
              />
            </button>
          </form>
          <img
            src={profileIcon}
            alt="User Profile"
            className="profileIcon"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
