import React, { useState } from "react";
import './FAQ2.css';

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 w-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className=" w-full md:text-[2.3vh] text-[2vh] flex justify-between md:w-3/4  text-left"
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
        <div className="w-full overflow-hidden text-[1.9vh] md:text-[1.7vh] md:w-3/4  text-left">{answer}</div> 
      </div>
    </div>
  );
};

export default Accordion;
