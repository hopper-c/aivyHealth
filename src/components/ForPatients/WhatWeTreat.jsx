import React from "react";

function WhatWeTreat() {
  React.useEffect(() => {
    var phrases = [
      'Health & Wellness',
      'Urgent care symptoms',
      'Neurological conditions',
      'Infections',
      'Autoimmune diseases',
      'Bleeding disorders',
      'Chronic inflammation',
      'Women’s health'
    ];
    var i = 0;
    var phrasesIndex = 0;
    var txt = phrases[phrasesIndex];
    var speed = 200;
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("typeWriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else if (phrasesIndex < phrases.length - 1) {
        document.getElementById("typeWriter").innerHTML = '';
        i = 0;
        phrasesIndex++;
        txt = phrases[phrasesIndex];
        setTimeout(typeWriter, speed);
      } else if (phrasesIndex === phrases.length - 1) {
        document.getElementById("typeWriter").innerHTML = '';
        i = 0;
        phrasesIndex = 0;
        txt = phrases[phrasesIndex];
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  }, []);
  
  return (
    <section className="whatWeTreat">
      <div className="whatWeTreatContainer">
        <span className="d-none d-md-block whatWeTreatLabel">What we treat:</span>
        <span className="d-md-none">What we treat</span>
        <div className="flex-column">
          <p className="typeWriter" id="typeWriter"></p>
          <span className="learn-more-typewriter">
            We address both everyday wellness and complex medical conditions with patient-focused care. Learn more.
          </span>
        </div>
      </div>
    </section>
  );
}

export default WhatWeTreat;
