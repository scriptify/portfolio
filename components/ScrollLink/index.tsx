import React from "react";
import smoothscroll from "smoothscroll-polyfill";

if (typeof window !== "undefined") {
  console.log("polyfill smoothscroll");
  smoothscroll.polyfill();
}

interface Props {
  target: string;
  className?: string;
}

const ScrollLink: React.FC<Props> = ({ children, target, className }) => {
  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const elem = document.querySelector(target);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <a href={target} onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink;
