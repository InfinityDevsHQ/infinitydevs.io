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

  const scrollToTestimonials = () => {
    const contactSection = document.getElementById("Testimonials");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`text-white text-lg capitalize font-bold ${className} absolute top-0 right-0 mt-10 mr-8`}
    >
      <ol className="flex items-center gap-12 text-center">
        <li>
          <button>About Us</button>
        </li>
        <li>
          <button onClick={scrollToTestimonials}>Testimonials</button>
        </li>
        <li>
          <button onClick={scrollToContact}>Contact Us</button>
        </li>
      </ol>
    </nav>
  );
}
