import HeroSection from "./landing-page/hero-section";
import HowWeWork from "./landing-page/how-we-work";
import WhoWeAre from "./landing-page/who-we-are";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhoWeAre />
        <HowWeWork />
      </main>
    </>
  );
}
