"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import DesktopNav from "./navigation";

export type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
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

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <header
      className={`flex items-center justify-between w-full px-4 pt-4 lg:pt-8 ${className}`}
    >
      <div>
        <Image
          src={"/logo-light.png"}
          width={200}
          height={200}
          alt='Infinity Devs Logo'
        />
      </div>
      <DesktopNav className='hidden lg:block' />
      <div>
        <div className='lg:hidden'>
          <button
            aria-label='Sidebar-menu-open-button'
            type='button'
            className='text-white font-bold'
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={32} />
          </button>
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                className='flex fixed top-0 z-50 right-0 h-screen w-screen'
                initial='closed'
                animate='open'
                exit='closed'
                variants={sidebarVariants}
              >
                <div className='bg-gray-900  h-full w-full'>
                  <div className='px-6 py-4'>
                    <button
                      aria-label='Sidebar menu close button'
                      type='button'
                      className='text-white text-4xl w-full flex justify-end'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <X size={32} />
                    </button>
                  </div>
                  <nav className='flex items-center justify-center text-zinc-300 text-4xl capitalize font-bold h-full'>
                    <ol className='h-full flex flex-col items-center justify-center gap-14'>
                      <li>
                        <button>About Us</button>
                      </li>
                      <li>
                        <button onClick={scrollToTestimonials}>
                          Testimonials
                        </button>
                      </li>
                      <li>
                        <button onClick={scrollToContact}>Contact Us</button>
                      </li>
                      <li>
                        <Link href={"/"}></Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
