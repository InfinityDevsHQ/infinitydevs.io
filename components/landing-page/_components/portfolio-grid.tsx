import { Projects } from "$/constants";
import PortfolioCard from "./portfolio-card";
export default function PortfolioGrid() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="lg:mb-12 grid lg:grid-cols-3 gap-12 justify-center justify-items-center w-full">
        {Projects.map((project) => (
          <PortfolioCard
            key={project.id}
            imageUrl={project.images[0]}
            tag={project.name}
            pills={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
