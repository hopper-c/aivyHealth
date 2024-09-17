/**
 * This code was generated by Builder.io.
 */
import React from "react";
import irene from "../../images/irene.svg";
import adrian from "../../images/adrian.svg";
import fatima from "../../images/fatima.svg";
import kenji from "../../images/kenji.svg";
import medicalBag from "../../images/medical-bag.svg";
import bagDollar from "../../images/bag-dollar.svg";
import capsule from "../../images/capsule.svg";
import piggyBank from "../../images/piggy-bank.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CaseStudy() {
  const caseStudies = [
    {
      name: "Irene",
      image: irene,
      complaint: 'Irene suffered from chronic migraines that disrupted her daily life. She needed a reliable solution to manage her condition effectively',
      interventions: [
        { icon: medicalBag, title: "Preventive Care", description: "Regular Vyepti infusions every 3 months at home to prevent migraines." },
        { icon: capsule, title: "Acute Relief", description: "On-demand migraine cocktail infusions to manage breakthrough migraines." },
        { icon: bagDollar, title: "Affordable Options", description: "Migraine cocktail covered by insurance, utilized HSA/FSA funds for her copay." },
        { icon: piggyBank, title: "Cost-Effective", description: "Combining preventive and acute care reduced the need for expensive ER visits." }
      ],
      outcome: "Aivy Health’s regular Vyepti infusions and on-demand migraine cocktails have reduced Irene’s need for emergency room visits, saving her both time and money while managing her migraines."
    },
    {
      name: "Adrian",
      image: adrian,
      complaint: 'Adrian has low energy and high stress from balancing his demanding job while training for a triathlon',
      interventions: [
        { icon: medicalBag, title: "Preventive Care", description: "Immunity infusion before work trips to increase immune system and decrease risk of catching travel illness." },
        { icon: capsule, title: "Exercise Regimen", description: "Recovery infusion after challenging training days to accelerate recuperation." },
        { icon: bagDollar, title: "Double Savings", description: "Maximized savings by stacking HSA/FSA funds with discounted membership through company partnership with Aivy Health." },
        { icon: bagDollar, title: "Convenience", description: "Nurse meets Adrian in-office to provide infusions while at work." }
      ],
      outcome: "Adrian completed his triathlon with a personal best record and was named Employee of the Year."
    },
    {
      name: "Fatima",
      image: fatima,
      complaint: 'Fatima was diagnosed with hyperemesis gravidarum (extreme morning sickness) during her pregnancy, making it difficult to eat, travel, and stay hydrated, leading to severe fatigue',
      interventions: [
        { icon: medicalBag, title: "Preventive Care", description: "Bi-monthly vitamin infusions with anti-nausea medication to manage symptoms and maintain hydration." },
        { icon: capsule, title: "Acute Relief", description: "On-demand infusions through a membership package for additional relief." },
        { icon: bagDollar, title: "Affordable Options", description: "Used HSA/FSA funds for extra infusions, ensuring financial ease." },
        { icon: bagDollar, title: "Convenience", description: "On-demand infusions reduced travel stress and missed work days." }
      ],
      outcome: "Under our Nurse Navigator’s guidance, Fatima easily switched from clinic infusions to on-demand in office infusions, supplemented by additional infusions through a membership package. She delivered a healthy Baby Boy."
    },
    {
      name: "Kenji",
      image: kenji,
      complaint: 'Kenji manages Crohn’s disease with Remicade infusions every 8 weeks but struggles with fatigue, severe dehydration, and nutrient absorption during flare-ups',
      interventions: [
        { icon: medicalBag, title: "Preventive Care", description: "Regular Remicade infusions every 8 weeks to manage Crohn’s disease at home." },
        { icon: capsule, title: "Acute Relief", description: "On-demand vitamin infusions during flare-ups to combat dehydration and nutrient loss." },
        { icon: bagDollar, title: "Affordable Options", description: "Utilized HSA/FSA funds to cover costs of discounted membership package." },
        { icon: bagDollar, title: "Trusted Provider", description: "Infusions from FDA approved pharmacies, licensed professionals, and accredited provider." }
      ],
      outcome: "Aivy Health provides Kenji with timely Remicade infusions. During flare-ups, our on-demand vitamin infusions help to replenish his body with nutrients, bypassing absorption issues in his digestive system."
    }
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {caseStudies.map((study, index) => (
      <SwiperSlide>
      <article className="caseStudy">
        <img
          src={study.image}
          alt=""
          className={'caseStudyBackground' + ' ' + study.name}
        />
        <div className="caseStudyContent">
          <h2 className="caseStudyTitle">{study.name}'s Aivy Journey</h2>
          <p className="caseStudyComplaint">
            <strong>Complaint:</strong> {study.complaint}
          </p>
          <h3 className="interventionsTitle">Aivy Interventions:</h3>
          <ul className="interventionsList">
            <li className="interventionItem">
              <img
                src={medicalBag}
                alt=""
                className="interventionIcon"
              />
              <p>
                <strong>Preventive Care:</strong> {study.interventions[0].description}
              </p>
            </li>
            <li className="interventionItem">
              <img
                src={capsule}
                alt=""
                className="interventionIcon"
              />
              <p>
                <strong>Acute Relief:</strong> {study.interventions[1].description}
              </p>
            </li>
            <li className="interventionItem">
              <img
                src={bagDollar}
                alt=""
                className="interventionIcon"
              />
              <p>
                <strong>Affordable Options:</strong> {study.interventions[2].description}
              </p>
            </li>
            <li className="interventionItem">
              <img
                src={piggyBank}
                alt=""
                className="interventionIcon"
              />
              <p>
                <strong>Cost-Effective:</strong> {study.interventions[3].description}
              </p>
            </li>
          </ul>
          <p className="caseStudyOutcome">
            <strong>Outcome:</strong> {study.outcome}
          </p>
        </div>
      </article>
      </SwiperSlide>
    ))}
    </Swiper>
  );
}

export default CaseStudy;
