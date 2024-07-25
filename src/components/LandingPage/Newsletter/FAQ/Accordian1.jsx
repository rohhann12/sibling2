import React, { useState } from "react";
import './FAQ2.css';

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 align-middle">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="md:text-[18px] text-[16px] flex justify-between w-3/4  text-left"
      >
        <span>{title}</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>  
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-700 text-sm mt-3 font-bold ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[3vh] md:text-[1.5vh] w-3/4  text-left">{answer}</div> 
      </div>
    </div>
  );
};

export default Accordion;
