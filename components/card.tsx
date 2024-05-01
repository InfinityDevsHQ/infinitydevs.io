import { ReactNode } from "react";
import Heading from "$/app/_components/heading";
export type CardProps = {
  icon?: ReactNode;
  title?: string;
  children: string;
  className?: string
};
export default function Card({ icon, title, children, className }: CardProps) {
  return (
    <div className={`flex flex-col gap-6 mt-5 items-center px-6 py-4 rounded-3xl text-center  border border-purple-400/30 ${className}`}>
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
