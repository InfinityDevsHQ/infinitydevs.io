"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
export type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header
      className={`flex items-center justify-between w-full  px-4 pt-8 ${className}`}
    >
      <div>
        <Image
          src={"/logo-light.png"}
          width={200}
          height={200}
          alt="Infinity Devs Logo"
        />
      </div>
      <nav className="hidden lg:block text-white text-lg capitalize font-bold">
        <ol className="flex items-center gap-12">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Insiahts</Link>
          </li>
          <li>
            <Link href={"/"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/"}>contact us</Link>
          </li>
          <li>
            <Link href={"/"}>careers</Link>
          </li>
        </ol>
      </nav>
      <div>
        <div className="lg:hidden">
          <button
            aria-label="Sidebar-menu-open-button"
            type="button"
            className="text-white font-bold"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={32} />
          </button>

          {sidebarOpen && (
            <div className="flex fixed top-0 z-50 right-0 h-screen w-screen">
              <div className="flex-1 flex justify-center bg-black/40 px-6">
                <button
                  aria-label="Sidebar menu close button"
                  type="button"
                  className="text-white text-4xl w-full h-16"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={32} />
                </button>
              </div>
              <div className="bg-white  h-full w-3/4 md:w-1/2">
                <nav className="text-zinc-800 text-4xl capitalize font-bold h-full">
                  <ol className="h-full flex flex-col items-center justify-evenly">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/"}>About Us</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Insiahts</Link>
                    </li>
                    <li>
                      <Link href={"/"}>Portfolio</Link>
                    </li>
                    <li>
                      <Link href={"/"}>contact us</Link>
                    </li>
                    <li>
                      <Link href={"/"}>careers</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
