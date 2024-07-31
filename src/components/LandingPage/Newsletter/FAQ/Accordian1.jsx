import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
   <>  
    <div className="py-2 w-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full text-left font-bold"
      >
        <span>{title}</span>
        {accordionOpen ? <span>-</span> : <span>+</span>}
      </button>  
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-md mt-3  ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-left">{answer}</div>
      </div>
    </div>
   </>
  );
};

export default Accordion;