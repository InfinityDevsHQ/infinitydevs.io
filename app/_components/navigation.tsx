import Link from "next/link";
import React from "react";

export type DesktopNavProps = {
  className?: string;
};
export default function Navigation({ className }: DesktopNavProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className={`text-white text-lg capitalize font-bold ${className}`}>
      <ol className="flex flex-wrap lg:flex-nowrap items-center gap-12 text-center">
        <li>
          <button>About Us</button>
        </li>
        <li>
          <button onClick={scrollToContact}>Contact Us</button>
        </li>
      </ol>
    </nav>
  );
}
