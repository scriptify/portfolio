import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { pageview } from "../../util/analytics";

if (typeof window !== "undefined") {
  smoothscroll.polyfill();
}

interface Props {
  target: string;
  className?: string;
}

const ScrollLink: React.FC<Props> = ({ children, target, className }) => {
  function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    pageview(window.location.pathname + target);
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
