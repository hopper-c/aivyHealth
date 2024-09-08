/**
 * This code was generated by Builder.io.
 */
import React from "react";
import partnershipGraphic from "../../images/partnershipGraphic.svg";

function Partnership() {
  return (
    <section className="partnership">
      <img src={partnershipGraphic} alt="" />
      <div className="employer-stats">
        <div className="stats-container">
          <span className="number">
            89%
          </span>
          <span className="details">
          of employees are more likely to stay with a company that supports their health and wellness.
          </span>
        </div>
        <div className="stats-container">
          <span className="number">
            60%
          </span>
          <span className="details">
          reduction in employee sick days with employee wellness programs.
          </span>
        </div>
        <div className="stats-container">
          <span className="number">
            6x
          </span>
          <span className="details">
          saved in medical cost and absenteeism for every $1 spent on wellness programs.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
