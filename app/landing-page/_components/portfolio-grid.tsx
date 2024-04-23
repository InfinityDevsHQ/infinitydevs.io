import PortfolioCard from "./portfolio-card";
export default function PortfolioGrid() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className=" lg:mb-12 grid lg:grid-cols-3 3xl:grid-cols-5 gap-12 items-center justify-center justify-items-center">
          <PortfolioCard
            imageUrl="/portfolio/portfolio-1.png"
            tag="Animation"
            pills={["web development", "react"]}
            className="lg:hidden 3xl:block"
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-2.png"
            tag="Animation"
            pills={["web development", "react"]}
            className="lg:hidden 3xl:block"
          />
          <PortfolioCard
            imageUrl="/portfolio/portfolio-3.png"
            tag="Animation"
            pills={["web development", "react"]}
            className="lg:hidden 3xl:block"
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
        <div className="flex gap-12 mb-9">
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
