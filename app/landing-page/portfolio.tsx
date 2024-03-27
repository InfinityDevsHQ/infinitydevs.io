import Heading from "../_components/heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioGrid from "./_components/portfolio-grid";
export default function Portfolio() {
  return (
    <section className="bg-slate-900  px-8 py-4">
      <div className="flex items-center justify-center">
        <div>
          <Heading
            size="h2"
            className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
          >
            <span>our</span> portfolio
          </Heading>
          <Link
            href={"/"}
            className="flex common-border max-w-max mx-auto items-center justify-between px-2 py-1 mb-3 md:mb-6 lg:mb-8 text-sm text-zinc-300 font-semibold bg-blue-900/40 rounded-full"
          >
            <span>What Others Say About Us</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <PortfolioGrid />
    </section>
  );
}
