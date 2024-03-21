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
      <div className="flex items-center justify-center w-full box-max-width">
        <div className="uppercase text-xl font-bold text-zinc-300">
          <div className="flex flex-col gap-12">
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
            <PlayCircle size={130} />
          </div>
        </div>
      </div>
    </section>
  );
}
