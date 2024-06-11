import PortfolioCard from "./portfolio-card";
export default function PortfolioGrid() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="lg:mb-12 grid lg:grid-cols-3 gap-12 items-center justify-center justify-items-center w-full">
        <PortfolioCard
          imageUrl="/portfolio/portfolio-1.png"
          tag="Graphic Design"
          pills={["Tailwind Css"]}
        />
        <PortfolioCard imageUrl="/portfolio/portfolio-2.png" tag="Web Design" />
        <PortfolioCard
          imageUrl="/portfolio/portfolio-3.png"
          tag="Web Development"
        />
      </div>
    </div>
  );
}
