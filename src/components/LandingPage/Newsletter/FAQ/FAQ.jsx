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
        <div className="Main-heading1">
        <p className="heading">Got Questions? <br />
        We have the Answers</p>
        </div>
        <div className="below-left-main">
          <p>Everything you need to know about <span className="conti">The Sibling Newsletter</span></p>
        </div>
      </div>
      <div className="accordion-container">
        <Accordion
          title="How can our school partner with Sibling?"
          answer="Schools can reach out to us through our contact page to discuss partnership opportunities and get set up with a dedicated portal."
        />
        <Accordion
          title="What benefits does the newsletter offer to our students?"
          answer="The newsletter provides valuable mental health resources, productivity tips, and personal growth strategies tailored specifically for teenagers."
        />
        <Accordion
          title=" Can we provide feedback or suggest topics for future editions?" 
          answer="Absolutely! We welcome feedback and topic suggestions from our partnered schools to better serve our student community."
        />
        <Accordion
          title="Is there a cost associated with subscribing to the newsletter?" 
          answer="No, the newsletter is free of cost for all students from partnered schools."
        />
        <Accordion
          title="How is the privacy of our students protected?" 
          answer="We take privacy seriously. We do not collect any student information nor do we ask schools for any student data. All access is managed through the school’s dedicated portal, ensuring privacy and security."
        />
        <Accordion
          title="Can our school contribute content to the newsletter?" 
          answer="Yes, we encourage contributions from our partnered schools. Students and teachers can submit articles, stories, and other content for consideration."
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
