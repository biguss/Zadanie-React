import { useState } from "react";
import "./AccordionItem.css";

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <h3 className="accordion-title" onClick={toggleAccordion}>
        {title}
      </h3>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default AccordionItem;
