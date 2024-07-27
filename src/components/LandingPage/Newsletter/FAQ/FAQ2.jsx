import React from "react";
import Accordion from "./Accordian1.jsx";
import './FAQ2.css';
import '../../../../App.css';
import '../../../../fonts/gilroy/Gilroy-SemiBold.ttf';
import '../../../../fonts/gilroy/Gilroy-Bold.ttf';
import "../../../../fonts/Manrope/static/Manrope-Regular.ttf";
import "../../../../fonts/Montserrat/static/Montserrat-Regular.ttf";
import "../../../../fonts/Montserrat/static/Montserrat-Medium.ttf";
import "../../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf";

const FAQ = () => {
  function navigateToSection() {
    window.location.href = "#contacT";
  }

  return (
    <>
      <div className="faq1-container">
        <div className="faq1-left-side">
          <div className="faq1-heading-top_right">
            <p>FAQ</p>
          </div>
            <div className="faq1-Main-heading1">
              <p className="faq1-heading">Got Questions?<br />We Have the Answers</p>
            </div>
            <div className="faq1-below-left-main">
              <p>Everything you need to know about <span className="faq1-conti"> <br />The Sibling Newsletter</span></p>
            </div>
        </div>
        <div className="faq1-accordion-container">
          <Accordion
            title="How can our school partner with Sibling?"
            answer="Schools can reach out to us through our contact page to discuss partnership opportunities and get set up with a dedicated portal."
          />
          <Accordion
            title="What benefits does the newsletter offer to our students?"
            answer="The newsletter provides valuable mental health resources, productivity tips, and personal growth strategies tailored specifically for teenagers."
          />
          <Accordion
            title="Can you provide feedback or suggest topics for future editions?"
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
      <div className="faq1-bottom-text text-[Montserrat-Semibold] text-[1.6vh]">
        <p className="faq1 pt-2 font-bold">Still have questions?</p>
        <p className="pt-2 font-semibold">Can't find the answer you're looking for? Please get in touch with us </p>
        <div className="pt-4"><button className="faq1-b-bottom pt-2 font-[Gilroy-SemiBold] font-white" onClick={navigateToSection}>Get in touch</button></div>
      </div>
    </>
  );
};

export default FAQ;
