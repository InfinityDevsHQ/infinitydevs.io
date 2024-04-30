import Heading from "../_components/heading";
import CodeTechnologies from "./_components/code-texhnologies";

export default function Technologies() {
  return (
    <section className="bg-slate-900  px-8 py-4">
      <div className="flex flex-col items-center justify-center">
        <div className="box-max-width">
          <Heading
            size="h2"
            className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
          >
            <span>Technologies</span> we
            <span className="block text-white pt-5"> work on</span>
          </Heading>
          <p className="main-descriptions2 text-center">
            Our team specializes in Adobe Xd, Figma, HTML, Tailwind CSS,
            React.js, Next.js, Node js, MomgoDB, Python , Django and PostgreSQL
            for crafting innovative software solutions.
          </p>
          <CodeTechnologies />
        </div>
      </div>
    </section>
  );
}
