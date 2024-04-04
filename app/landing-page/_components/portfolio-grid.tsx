import PortfolioCard from "./portfolio-card";
import Image from "next/image";
export default function PortfolioGrid() {
  return (
    <div className="relative">
      <Image
        src={"/backgrounds/net.png"}
        className="absolute w-full h-full z-10"
        width={0}
        height={0}
        alt="backround"
      />
      <div className="flex items-center justify-center">
        <div className=" lg:mb-12 grid lg:grid-cols-3 3xl:grid-cols-5 gap-12 items-center justify-center justify-items-center">
          <PortfolioCard
            imageUrl="/portfolio/portfolio-1.png"
            tag="Animation"
            pills={["web development", "react"]}
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-2.png"
            tag="Animation"
            pills={["web development", "react"]}
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-3.png"
            tag="Animation"
            pills={["web development", "react"]}
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-4.png"
            tag="Animation"
            pills={["web development", "react"]}
            className="lg:hidden 3xl:block"
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-5.png"
            tag="Animation"
            pills={["web development", "react"]}
            className="lg:hidden 3xl:block"
          />
        </div>
      </div>
      <div className="hidden lg:flex 3xl:hidden items-center justify-center ">
        <div className="flex gap-12">
          <PortfolioCard
            imageUrl="/portfolio/portfolio-4.png"
            tag="Animation"
            pills={["web development", "react"]}
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-5.png"
            tag="Animation"
            pills={["web development", "react"]}
          />
        </div>
      </div>
    </div>
  );
}
