"use client"
import Button from "$/components/button"
import Straps from "./_components/straps"
import Header from "$/app/_components/header"
import { ArrowRight, Send } from "lucide-react"
import Typewriter from "typewriter-effect"
import smoothScroll from "$/app/utils/smoothScroll"

export default function HeroSection() {
  return (
    <>
      <section className="overflow-x-hidden relative h-screen w-screen hero-bg mx-auto md:pt-10 md:pb-20 md:px-8 px-5 py-8">
        <Header className="absolute top-0" />
        <div className="flex items-center justify-center">
          <div className="box-max-width mt-20 lg:mt-28 3xl:mt-96 sm:mt-44">
            <span className="flex gap-2.5 max-w-max common-border mx-auto items-center justify-between px-4 py-2 mb-6 md:mb-6 lg:mb-8 text-sm text-zinc-300 font-semibold rounded-full">
              <button
                type="button"
                onClick={() => smoothScroll({ sectionId: "Testimonials" })}
              >
                What Others Say About Us
              </button>
              <ArrowRight size={20} />
            </span>
            <h1 className="mb-6 md:mb-6 lg:mb-8 text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl text-white text-center font-bold sm:mt-12 gradient-text !leading-[1.3]">
              Crafting Infinite <br />
              <span className="flex justify-center">
                <span className="gradient-text pr-2 flex">
                  <span className="">{"{"}</span>
                  <Typewriter
                    options={{
                      strings: ["Software", "Design", "Ai"],
                      autoStart: true,
                      loop: true,
                      cursor: "",
                    }}
                  />
                  <span className="">{"}"}</span>
                </span>
                Solutions
              </span>
            </h1>
            <p className="main-descriptions text-center mb-6 md:mb-6 lg:mb-8 sm:mt-12">
              Your go-to destination for cutting-edge software solutions.
            </p>
            <Button
              scrollTarget="contact-us"
              className="mx-auto bg-blue-900/40 flex items-center gap-2 px-4 py-2 self-start common-border !rounded-full text-white"
            >
              Book Consultation
              <Send className="rotate-45" size={20} />
            </Button>
          </div>
        </div>
        {/* <Straps /> */}
      </section>
    </>
  )
}
