"use client";
import { useState, useEffect } from "react";
import Button from "$/components/button";
import Link from "next/link";
import Straps from "./_components/straps";
import Header from "../_components/header";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const wordsToAnimate = ["Software", "Design", "Ai"];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % wordsToAnimate.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [wordsToAnimate.length]);

  const scrollToTestimonials = () => {
    const contactSection = document.getElementById("Testimonials");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="overflow-x-hidden relative height-hero w-screen bg-slate-900">
        <Header className="absolute top-0" />
        <div className="flex items-center justify-center">
          <div className="box-max-width mt-20 lg:mt-40 3xl:mt-96 sm:mt-44">
            <Link
              href={"/"}
              className="flex max-w-max common-border mx-auto items-center justify-between px-2 py-1 mb-3 md:mb-6 lg:mb-8 text-sm text-zinc-300 font-semibold"
            >
              <button onClick={scrollToTestimonials}>
                What Others Say About Us
              </button>
              <ArrowRight size={20} />
            </Link>
            <h1 className="flex flex-col gap-4 mb-3 md:mb-6 lg:mt-0 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl  text-white text-center font-semibold zoomin sm:mt-12">
              <span className="gradient-text">Crafting Infinite</span>
              <span>
                {wordsToAnimate.map((word, index) => (
                  <>
                    {index === activeIndex && (
                      <span className="flex items-center gap-2 justify-center">
                        <span
                          key={index}
                          className={
                            index === activeIndex
                              ? "max-w-max text-center typing gradient-text"
                              : ""
                          }
                        >
                          {wordsToAnimate[activeIndex]}
                        </span>
                        <span className=" self-stretch block z-50 w-2 common-gradient cursor" />
                        <span className="gradient-text">Solutions</span>
                      </span>
                    )}
                  </>
                ))}
              </span>
            </h1>
            <p className="main-descriptions text-center mb-4 md:mb-8 lg:mb-10 sm:mt-12 lg:mt-0">
              Empowering your digital future with expert software development
              and design services.
            </p>
            <Button
              scrollTarget="contact-us"
              className="text-center block mx-auto mb-6 md:mb-10 lg:mb-12"
            >
              Book free consultation
            </Button>
          </div>
        </div>
        <Straps />
      </section>
    </>
  );
}
