import Heading from "../_components/heading";
import CodeTechnologies from "./_components/code-texhnologies";
import Features from "./_components/features";

export default function Technologies() {
  return (
    <section className="bg-slate-900  px-8 py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="box-max-width">
          <Heading
            size="h2"
            className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
          >
            <span>Technologies</span> we work on
          </Heading>
          <p className="main-descriptions text-center mb-4 md:mb-8 lg:mb-10">
            <span>
              Our team speacializes in React.js/Neext.js, Vuej.s, Tailwind CSS,
              MangoDB, Node.js, Express.js and Python
            </span>
            <br />
            <span>for crafting innovative software solutions.</span>
          </p>
          <CodeTechnologies />
        </div>
        <Features />
      </div>
    </section>
  );
}
