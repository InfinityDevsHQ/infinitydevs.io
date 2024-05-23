import React from "react";
import smoothScroll from "../utils/smoothScroll";

export type DesktopNavProps = {
  className?: string;
};
export default function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav
      className={`text-white text-lg capitalize ${className} absolute top-0 right-0 mt-10 mr-10 `}
    >
      <ol className="flex items-center gap-12 text-center">
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
            onClick={() => smoothScroll({ sectionId: "about-us" })}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary"
            onClick={() => smoothScroll({ sectionId: "Testimonials" })}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            type="button"
            className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary mr-8"
            onClick={() => smoothScroll({ sectionId: "contact-us" })}
          >
            Contact Us
          </button>
        </li>
      </ol>
    </nav>
  );
}
