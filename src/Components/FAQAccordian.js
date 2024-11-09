// used in product page
import React, { useState } from 'react';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-white rounded-lg bg-gradient-to-br from-neutral-800 to-black backdrop-blur-10 w-[900px] min-w-[400px] p-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white font-bold text-xl mr-4">
          {isOpen ? '-' : '+'}
        </span>
        <h3 className="text-lg font-semibold">{question}</h3>
      </div>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

export default FAQAccordion;