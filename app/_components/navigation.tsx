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

  const scrollToAboutUs = () => {
    const contactSection = document.getElementById("about-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`text-white text-lg capitalize ${className} absolute top-0 right-0 mt-10 mr-10 `}
    >
      <ol className='flex items-center gap-12 text-center'>
        <li>
          <button
            className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary'
            onClick={scrollToAboutUs}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary'
            onClick={scrollToTestimonials}
          >
            Testimonials
          </button>
        </li>
        <li>
          <button
            className='text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-primary mr-8'
            onClick={scrollToContact}
          >
            Contact Us
          </button>
        </li>
      </ol>
    </nav>
  );
}
