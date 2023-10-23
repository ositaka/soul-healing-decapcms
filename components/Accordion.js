import React, { useState } from 'react';

export default function Accordion({ accordions }) {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (accordionIndex) => {
    setActiveAccordion(accordionIndex === activeAccordion ? null : accordionIndex);
  };

  return (
    <div className='accordion'>
      {accordions.map((accordion, index) => (
        <div key={index}>
          <button
            onClick={() => handleAccordionClick(index)}
            aria-expanded={activeAccordion === index}
            aria-controls={`accordion-${index}`}
          >
            {accordion.title}
          </button>
          <div
            id={`accordion-${index}`}
            role="region"
            aria-labelledby={`accordion-${index}`}
            aria-hidden={activeAccordion !== index}
          >
            {accordion.content}
          </div>
        </div>
      ))}
    </div>
  );
}