import Heading from "../_components/heading";
import ReviewsGallery from "./_components/reviews-gallery";

export default function Testimonials() {
  return (
    <section className="bg-slate-900 px-8 py-4" id="Testimonials">
      <div className="flex items-center justify-center">
        <div className="box-max-width">
          <Heading
            size="h2"
            className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
          >
            <span>success</span> stories from{" "}
            <span className="block text-white">our clients</span>
          </Heading>
          <p className="main-descriptions text-center">
            We&apos;re a nationally recognized web design company with a
            targeted local presence. What does that mean for you? Your site is
            expertly designed and marketed by professionals who are wizards when
            it comes to turing users into raving fanatics and generating
            consistent leads for your business.
          </p>
          <p className="main-descriptions text-center mb-4 md:mb-8 lg:mb-10">
            Design with style provides a full service.
          </p>
        </div>
      </div>
      <ReviewsGallery />
    </section>
  );
}
