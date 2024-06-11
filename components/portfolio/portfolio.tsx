import Heading from "../../app/_components/heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PortfolioGrid from "./portfolio-grid";
import { Checkbox } from "../ui/checkbox";
export default function Portfolio() {
  const Filters = [
    "Logo Design",
    "UI/UX Design",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Vue.js",
  ];
  return (
    <section className="bg-slate-900">
      <div className="px-5 py-8 md:py-12 md:px-8 xl:px-20 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-12 mb-12">
            <Heading
              size="h2"
              className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
            >
              <span>our</span> portfolio
            </Heading>
            <div className="flex items-center gap-6">
              {Filters.map((filter, index) => (
                <Checkbox key={index} pill>
                  {filter}
                </Checkbox>
              ))}
            </div>
          </div>
        </div>
        <PortfolioGrid />
      </div>
    </section>
  );
}
