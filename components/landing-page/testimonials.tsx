import Heading from "../../app/_components/heading";
import ReviewsGallery from "./_components/reviews-gallery";

export default function Testimonials() {
  return (
    <section
      className="px-5 py-8 mx-auto md:px-8 md:py-12 mx-auto testimonials-bg"
      id="Testimonials"
    >
      <div className="flex items-center justify-center">
        <div className="box-max-width">
          <Heading
            size="h2"
            className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center max-w-[950px] mx-auto"
          >
            <span>success</span> stories from <br /> our clients
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
