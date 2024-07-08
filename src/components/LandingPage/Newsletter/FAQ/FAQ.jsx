import React from "react";
import Accordion from "./Accordian";
import './FAQ2.css';
import '../../../../App.css'
import '../../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
const FAQ = () => {
  function navigateToSection() {
    window.location.href = "#contacT";
}
  return (
    <>
    <div className="faq-container">
      <div className="left-side">
        <div className="heading-top_right">
          <p>FAQ</p>
        </div>
        <p className="heading">Got Questions?</p>
        <p className="heading2">We have the Answers</p>
        <div className="below-left-main">
          <p>Everything you need to know about The Sibling Newsletter</p>
        </div>
      </div>
      <div className="accordion-container">
        <Accordion
          title="How can our school partner with Sibling to receive the newsletter?"
          answer="Schools can reach out to us through our contact page to discuss partnership opportunities and get set up with a dedicated portal."
        />
        <Accordion
          title="Do you charge any fees for your services?"
          answer="No, all our services are free of charge."
        />
        <Accordion
          title="How can I contact you?" 
          answer="You can reach out to us via email at info@hqsibling.in"
        />
      </div>
    </div>
    <div className="bottom-text">
    <p>Still have questions?</p>
    <p>Can't find the answer you're looking for? Please get in touch with us</p>
    <button className="b-bottom" onClick={navigateToSection} >Get in touch</button>
  </div>
    </>
  );
};

export default FAQ;
