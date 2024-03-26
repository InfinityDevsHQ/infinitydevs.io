import ContactUs from "./landing-page/contact-us";
import Footer from "./landing-page/footer";
import HeroSection from "./landing-page/hero-section";
import HowWeWork from "./landing-page/how-we-work";
import OurPartners from "./landing-page/our-partners";
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
        <Testimonials />
        <OurPartners />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
