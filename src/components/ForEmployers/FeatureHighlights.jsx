import React from "react";
import wellnessUrgent from "../../images/wellness-urgent.svg";
import boosterInject from "../../images/booster-inject.svg";
import specialtyArc from "../../images/specialty-arc.svg";

function FeatureHighlights() {
  const features = [
    {
      title: "Unique employee benefit",
      description:
        "Set your company apart by offering a wellness benefit that’s both innovative and impactful. Our wellness infusions aren’t just about feeling good—they’re about keeping your workforce healthy, reducing sick days, and saving your company money."
    },
    {
      title: "Strategic integration",
      description:
        "We offer multiple ways to seamlessly integrate wellness infusions into your benefit package—whether as a standalone perk or an addition to your existing health offerings."
    },
    {
      title: "Proven financial impact",
      description:
        "Wellness programs that include infusion therapy can result in significant cost savings—both in reduced absenteeism and lower medical costs."
    }
  ];

  const services = [
    {
      title: "Wellness and urgent care Infusions",
      class: "wellness",
      image: wellnessUrgent,
      description:
        "Keep your team energized and healthy with on-demand IV infusions, whether it's a quick immunity boost or fast relief from the flu."
    },
    {
      title: "Booster Injections",
      class: "booster",
      image: boosterInject,
      description:
        "Increase employee health with targeted injections like B12 for energy or NAD for mental clarity, delivered conveniently wherever they are."
    },
    {
      title: "Specialty Infusions",
      class: "infusions",
      image: specialtyArc,
      description:
        "Employees have access to specialty infusions tailored to chronic condition management, ensuring they get same day care no matter their location."
    }
  ];

  return (
    <section className="featureHighlights forPharmacies">
      <h2 className="featureTitle">Why partner with us</h2>
      <p className="featureDescription">
        Imagine a benefit that employees love that directly contributes to your bottom line.
        That’s what Aivy Health delivers.
      </p>
      <div className="featureGrid">
        {features.map((feature, index) => (
          <div key={index} className="featureCard">
            <h3 className="featureCardTitle">{feature.title}</h3>
            <p className="featureCardDescription">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="ourServices">
        <h1>Our Services</h1>
        {services.map((service, index) => (
          <div key={index} className={service.class}>
            <div className="vector"></div>
            <div className="serviceContainer">
              <img src={service.image} alt="service" />
              <h3 className="serviceHeader d-none d-md-block">{service.title}</h3>
              <p className="serviceDescription">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureHighlights;
