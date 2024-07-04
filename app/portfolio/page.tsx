import Portfolio from "$/components/portfolio/portfolio";
import PortfolioDetails from "$/components/portfolio/portfolio-details";

export default function PortfolioPage() {
  return (
    <section className="pt-24 bg-slate-900">
      <Portfolio />
      <PortfolioDetails />
    </section>
  );
}
