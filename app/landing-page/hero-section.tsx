import Button from "$/components/button";
import Link from "next/link";
import Straps from "./_components/straps";
import Header from "../_components/header";
export default function HeroSection() {
  return (
    <>
      <section className="overflow-x-hidden relative flex items-center justify-center h-screen w-screen bg-slate-900">
        <Header className="absolute top-0" />
        <div className="box-max-width">
          <Link
            href={"/"}
            className="flex w-52 mx-auto items-center px-2 py-1 mb-3 md:mb-6 lg:mb-8 text-sm text-zinc-300 font-semibold bg-blue-900/40 rounded-full"
          >
            <span>What Others Say About Us</span>
            <span>{/* Arrow right icon here */}</span>
          </Link>
          <h1 className="flex flex-col gap-4 mb-3 md:mb-6 lg:mb-8 uppercase  text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl  text-white text-center font-semibold">
            <span>
              <span>Transform</span> Business with
            </span>
            <span>smart and tech savvy</span>
            <span>solutions</span>
          </h1>
          <p className="main-descriptions text-center mb-4 md:mb-8 lg:mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, nesciunt nobis! Reiciendis
            <br />
            voluptate quia sit debitis sint cum, obcaecati veritatis,
            repudiandae rem maiores in.
          </p>
          <Button className="text-center block mx-auto mb-6 md:mb-10 lg:mb-12">
            Book free consultation
          </Button>
          <Straps />
        </div>
      </section>
    </>
  );
}
