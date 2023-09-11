import AccordionItem from "./AccordionItem";
import "./AccordionItem.css";

function Accordion({ items }) {
  return (
    <div className="accordion">
      {" "}
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Accordion;
