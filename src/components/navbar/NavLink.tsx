import { RefObject } from "react";

interface NavLinkProps {
  link: string;
  name: string;
  handleScroll: (ref: HTMLElement) => void;
  domRef: RefObject<HTMLDivElement>;
}

export default function NavLink({
  link,
  name,
  handleScroll,
  domRef,
}: NavLinkProps) {
  return (
    <li className="inline-block sm:text-lg">
      <a
        href={`#${link}`}
        onClick={() => handleScroll(domRef.current!)}
        className="text-primary font-bold transition-colors no-underline hover:text-light focus:outline-none focus:underline focus:underline-offset-8 "
      >
        {name}
      </a>
    </li>
  );
}
