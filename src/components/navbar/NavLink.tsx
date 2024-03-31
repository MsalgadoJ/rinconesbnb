import React from "react";

export default function NavLink({ link, name, handleScroll, domRef }) {
  return (
    <li className="inline-block">
      <a
        href={`#${link}`}
        onClick={() => handleScroll(domRef.current)}
        className="text-primary font-bold transition-colors hover:text-light"
      >
        {name}
      </a>
    </li>
  );
}
