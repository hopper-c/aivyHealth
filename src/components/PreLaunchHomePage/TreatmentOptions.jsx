/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./PreLaunchHomePage.module.css";

function TreatmentOptions() {
  const treatments = [
    "Anti-infectives",
    "Bleeding Disorders",
    "Immunoglobulins",
    "Women's Health",
    "Chronic Inflammatory Disease",
    "Neurological Disorders",
    "Wellness & Urgent Care",
    "Other Specialty Infusions",
  ];

  return (
    <section className={styles.treatmentOptions}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e9dede1ce874d9422928285bcf180992d7bdd007ef3a4c4c511d14ecd4cfa30?placeholderIfAbsent=true&apiKey=03b8c186f0974d22b1cfe3aef28c106c"
        alt=""
        className={styles.treatmentBackground}
      />
      <div className={styles.treatmentGrid}>
        {treatments.map((treatment, index) => (
          <div key={index} className={styles.treatmentCard + ' card' + index}>
            {treatment}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TreatmentOptions;
