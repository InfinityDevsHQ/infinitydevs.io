import ContactUs from "./landing-page/contact-us";
import Footer from "./_components/footer";
import HeroSection from "./landing-page/hero-section";
import HowWeWork from "./landing-page/how-we-work";
// import OurPartners from "./landing-page/our-partners";
import Portfolio from "./landing-page/portfolio";
import Technologies from "./landing-page/technologies";
import Testimonials from "./landing-page/testimonials";
import WhoWeAre from "./landing-page/who-we-are";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <WhoWeAre />
        <HowWeWork />
        <Technologies />
        <Portfolio />
        <Testimonials />
        {/* <OurPartners /> */}
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
