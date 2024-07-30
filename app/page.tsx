import ContactUs from "../components/landing-page/contact-us";
import Footer from "../components/gernal/footer";
import HeroSection from "../components/landing-page/hero-section";
import HowWeWork from "../components/landing-page/how-we-work";
import OurPartners from "../components/landing-page/our-partners";
import Portfolio from "../components/portfolio/portfolio";
import Technologies from "../components/landing-page/technologies";
import Testimonials from "../components/landing-page/testimonials";
import WhoWeAre from "../components/landing-page/who-we-are";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhoWeAre />
        <HowWeWork />
        <Technologies />
        {/* <Portfolio /> */}
        <Testimonials />
        {/* <OurPartners /> */}
        <ContactUs />
      </main>
    </>
  );
}
