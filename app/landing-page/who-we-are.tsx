import Heading from "../_components/heading";
import Overselves from "./_components/ourselves";

export default function WhoWeAre() {
  return (
    <section
      className=" flex flex-col gap-6 px-8 py-4 mb-16 who-bg"
      id="about-us"
    >
      <div className="flex items-center justify-center">
        <div className="box-max-width">
          <Heading
            size="h2"
            className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
          >
            <span>who</span> we are
          </Heading>
          <p className="main-descriptions text-center">
            At Infinity Devs, we are passionate about crafting cutting-edge
            software solutions that exceed expectations. Our dedicated team of
            experienced developers and designers collaborate seamlessly to bring
            your vision to life with exceptional precision and creativity.
            Together, we strive to create innovative web apps, MVPs, landing
            pages, and proof of concepts, driving your success with top-notch
            code quality and design expertise.
          </p>
        </div>
      </div>
      <Overselves />
    </section>
  );
}
