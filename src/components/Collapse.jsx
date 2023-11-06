import React, { useState, useRef, useEffect } from "react";
const Collapse = ({ children, isOpen, size }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);
  return (
    <div
      style={{
        overflow: "hidden",
        height,
        transition: "height 0.3s ease-in-out",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
export default Collapse;
