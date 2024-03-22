import Heading from "../_components/heading";
import { PlayCircle } from "lucide-react";
export default function HowWeWork() {
  return (
    <section className="bg-slate-900  px-8 py-4">
      <Heading
        size="h2"
        className="uppercase mb-3 md:mb-6 lg:mb-8 font-bold text-center"
      >
        <span>Who</span> we are
      </Heading>
      <div className="flex items-center justify-center w-full uppercase text-base sm:text-xl font-bold text-zinc-300">
        <div className="hidden md:grid grid-cols-3 box-max-width items-center justify-items-center">
          <div className="flex flex-col self-start">
            <h2 className="mt-12">1. Requirement Gathering</h2>
            <br />
            <h2 className="mt-80">3. Prototyping</h2>
            <br />
            <h2 className="mt-72">5. Testing</h2>
          </div>
          <div className="flex flex-col gap-12">
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
          </div>
          <div className="flex flex-col">
            <h2 className="mt-52">2. Brain Storming</h2>
            <h2 className="mt-80">4. Development</h2>
            <h2 className="mt-[22rem]">6. Deliver to the client</h2>
          </div>
        </div>
        <div className="flex md:hidden flex-col gap-12 max-width-[800px]">
          <div className="flex justify-between gap-4 items-center">
            <h3>1. Requirement Gathering</h3>
            <PlayCircle size={32} />
          </div>
          <div className="flex  justify-between items-center">
            <PlayCircle size={32} />
            <h3>2. Brain Storming</h3>
          </div>
          <div className="flex  justify-between items-center">
            <h3>3. Prototyping</h3>
            <PlayCircle size={32} />
          </div>
          <div className="flex  justify-between items-center">
            <PlayCircle size={32} />
            <h3>4. Development</h3>
          </div>
          <div className="flex  justify-between items-center">
            <h3>5. Testing</h3>
            <PlayCircle size={32} />
          </div>
          <div className="flex  justify-between items-center">
            <PlayCircle size={32} />
            <h3>6. Deliver to client</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
