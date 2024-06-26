import Heading from "../../app/_components/heading"
import CodeTechnologies from "./_components/code-texhnologies"
import Features from "./_components/features"

export default function Technologies() {
  return (
    <section className="px-5 py-8 md:px-8 md:py-12 mx-auto">
      <div className="flex flex-col gap-12 items-center justify-center">
        <div className="box-max-width flex flex-col gap-10">
          <Heading
            size="h2"
            className="uppercase font-bold text-center max-w-96 md:mt-10 mx-auto"
          >
            <span>Technologies</span> we work on
          </Heading>
          <p className="main-descriptions2 text-center sm:px-10 md:px-20 lg:px-32">
            Our team specializes in Adobe Xd, Figma, HTML, Tailwind CSS,
            React.js, Next.js, Node.js, MongoDB, Python, Django and PostgreSQL
            for crafting innovative software solutions.
          </p>
        </div>
        <CodeTechnologies />
        <Features />
      </div>
    </section>
  )
}
