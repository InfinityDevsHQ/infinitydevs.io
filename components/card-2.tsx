import { ReactNode } from "react";
import Heading from "$/app/_components/heading";
export type CardProps = {
  icon?: ReactNode;
  title?: string;
  children: string;
};
export default function CardVission({ icon, title, children }: CardProps) {
  return (
    <div className="flex flex-col gap-6 items-center h-fit px-6 py-6 rounded-3xl text-center bg-slate-800 border border-purple-400/30">
      <span>{icon}</span>
      <Heading size="h2" className="uppercase font-bold">
        {title}
      </Heading>
      <p className="text-lg lg:text-xl 2xl:text-2xl text-zinc-300 mb-12">
        {children}
      </p>
    </div>
  );
}
