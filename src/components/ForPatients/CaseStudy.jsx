import React from "react";
import irene from "../../images/irene.svg";
import adrian from "../../images/adrian.svg";
import fatima from "../../images/fatima.svg";
import kenji from "../../images/kenji.svg";
import medicalBag from "../../images/medical-bag.svg";
import bagDollar from "../../images/bag-dollar.svg";
import capsule from "../../images/capsule.svg";
import weights from "../../images/weights.svg";
import convenience from "../../images/convenience.svg";
import trusted from "../../images/trusted.svg";
import piggyBank from "../../images/piggy-bank.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

function CaseStudy() {
  const swiperRef = React.useRef(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);
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
        { icon: weights, title: "Exercise Regimen", description: "Recovery infusion after challenging training days to accelerate recuperation." },
        { icon: bagDollar, title: "Double Savings", description: "Maximized savings by stacking HSA/FSA funds with discounted membership through company partnership with Aivy Health." },
        { icon: convenience, title: "Convenience", description: "Nurse meets Adrian in-office to provide infusions while at work." }
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
        { icon: convenience, title: "Convenience", description: "On-demand infusions reduced travel stress and missed work days." }
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
        { icon: trusted, title: "Trusted Provider", description: "Infusions from FDA approved pharmacies, licensed professionals, and accredited provider." }
      ],
      outcome: "Aivy Health provides Kenji with timely Remicade infusions. During flare-ups, our on-demand vitamin infusions help to replenish his body with nutrients, bypassing absorption issues in his digestive system."
    }
  ];

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="caseStudyContainer">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {caseStudies.map((study, index) => (
          <SwiperSlide key={index}>
            <article className={"caseStudy " + study.name}>
              <img
                src={study.image}
                alt={study.name}
                className={"caseStudyBackground " + study.name}
              />
              <div className="caseStudyContent">
                <h2 className="caseStudyTitle">{study.name}'s Aivy Journey</h2>
                <p className="caseStudyComplaint">
                  <strong>Complaint:</strong> {study.complaint}
                </p>
                <hr></hr>
                <h3 className="interventionsTitle">Aivy Interventions:</h3>
                <ul className="interventionsList">
                  {study.interventions.map((intervention, i) => (
                    <li className="interventionItem" key={i}>
                      <img
                        src={intervention.icon}
                        alt={intervention.title}
                        className="interventionIcon"
                      />
                      <p>
                        <strong>{intervention.title}:</strong> {intervention.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <hr></hr>
                <p className="caseStudyOutcome">
                  <strong>Outcome:</strong> {study.outcome}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation">
        <button
          onClick={goPrev}
          className={isBeginning ? "disabled swiper-button-prev" : "swiper-button-prev"}
          disabled={isBeginning}
        >
        </button>
        <button
          onClick={goNext}
          className={isEnd ? "disabled swiper-button-next" : "swiper-button-next"}
          disabled={isEnd}
        >
        </button>
      </div>
    </div>
  );
}

export default CaseStudy;
