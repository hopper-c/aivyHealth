import React from "react";
import starRating from "../../images/star-rating.svg";
import aivyHealthMember from "../../images/aivyHealthMember.svg";

function Testimonial() {
  return (
    <section className="testimonial">
      <img
        src={starRating}
        alt=""
        className="testimonialQuote"
      />
      <blockquote className="testimonialText">
        " Knowing that I can get my Remicade and essential vitamins quickly from
        a trusted nurse, without leaving home, has made such a difference during
        my Crohn's flare-ups. It's the care I need, exactly when I need it. "
      </blockquote>
      <footer className="testimonialAuthor">Kenji Y.</footer>
      <img
        src={aivyHealthMember}
        alt="Portrait of Kenji Y."
        className="testimonialImage"
      />
    </section>
  );
}

export default Testimonial;
