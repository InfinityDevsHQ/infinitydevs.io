import ContactUs from "./landing-page/contact-us";
import HeroSection from "./landing-page/hero-section";
import HowWeWork from "./landing-page/how-we-work";
import OurPartners from "./landing-page/our-partners";
import Technologies from "./landing-page/technologies";
import WhoWeAre from "./landing-page/who-we-are";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhoWeAre />
        <HowWeWork />
        <Technologies />
        <OurPartners />
        <ContactUs />
      </main>
    </>
  );
}
