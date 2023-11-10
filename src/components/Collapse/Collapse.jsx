import "./Collapse.scss";
import { useState } from "react";
import Arrow from "./arrow.svg";
const Collapse = ({ title, content, size="small" }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className={`collapse${size ? ` collapse_${size}` : ""}`}>
      <div className="collapse__title" onClick={toggle}>
        <h3>{title}</h3>
        <img src={Arrow} alt="arrow" className={`arrow${open ? "_open" : ""}`} />
      </div>
      {open && (
        <div className="collapse__content">
          {typeof content === "string" ? (
            <p>{content}</p>
          ) : (
            content.map((item, index) => <p key={index}>{item}</p>)
          )}
        </div>
      )}
    </div>
  );
}
export default Collapse;
