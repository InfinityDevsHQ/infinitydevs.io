import Portfolio from "$/components/portfolio/portfolio";
import PortfolioDetails from "$/components/portfolio/portfolio-details";

export default function PortfolioPage() {
  return (
    <section className="mt-24">
      <Portfolio />
      <PortfolioDetails />
    </section>
  );
}
