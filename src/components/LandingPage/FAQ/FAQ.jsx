import React from "react";
import Accordion from "./Accordian";
import './FAQ.css';
import '../../../App.css'
import '../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
const FAQ = () => {
  return (
    <div className="body">
      <div className="heading-top_right">
        <p>NEED HELP? LOOK HERE</p>
      </div>
      <div className="heading">
        <p>Answers to your Questions</p>
      </div>
      <p className="category">General</p>
      <div className="accordion-container">
        <Accordion
          title="What is Sibling?"
          answer="Sibling is a mental health and wellness community designed for teenagers. We provide comprehensive support to enhance student well-being and academic success."
        />
        <Accordion
          title="Do you charge any fees for your services?"
          answer="No, all our services are free of charge."
        />
        <Accordion
          title="How can I contact you if I have more questions?" 
          answer="You can reach out to us via email at info@hqsibling.in"
        />
      </div>
      <p className="category1">Newsletter by Sibling</p>
      <div className="accordion-container">
        <Accordion
          title="What topics does the newsletter cover?"
          answer="Our newsletter covers a wide range of topics related to mental health and wellness."
        />
        <Accordion
          title="How often is the newsletter sent out?"
          answer="The newsletter is sent out once a month."
        />
        <Accordion
          title="How can I subscribe to the newsletter?" 
          answer="Your institution can subscribe to our newsletter by visiting our website and signing up. The newsletter will be accessible to you on our school portal."
        />
        <Accordion
          title="Can I unsubscribe if I no longer want to receive the newsletter?" 
          answer="Yes, you can unsubscribe from the newsletter by writing us an email."
        />
        <Accordion
          title="Who writes the articles in the newsletter?" 
          answer="Our newsletter is written by a dedicated team of experts, including neuroscientists, psychologists, and other experienced writers."
        />
      </div>
    </div>
  );
};

export default FAQ;
