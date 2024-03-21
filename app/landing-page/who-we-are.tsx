import Heading from "../_components/heading";
import Overselves from "./_components/ourselves";
export default function WhoWeAre() {
  return (
    <section className="bg-slate-900  px-8 py-4">
      <div className="flex items-center justify-center">
        <div className="box-max-width">
          <Heading className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center">
            <span>who</span> we are
          </Heading>
          <p className="main-descriptions text-center">
            We&apos;re a nationally recognized web design company with a
            targeted local presence. What does that mean for you? Your site is
            expertly designed and marketed by professionals who are wizards when
            it comes to turing users into raving fanatics and generating
            consistent leads for your business.
          </p>
          <p className="main-descriptions text-center mb-4 md:mb-8 lg:mb-10">
            Design with style provides a full service, in house web design and
            digital marketing agency with over 13 years of experience in the
            creative industry. We develop integrated marketing solutions that
            drive business and boost revenue. We don&apos;t need to outsource
            your work overseas or to robots. We are real people, with a real
            passion for what we do.
          </p>
        </div>
      </div>
      <Overselves />
    </section>
  );
}
