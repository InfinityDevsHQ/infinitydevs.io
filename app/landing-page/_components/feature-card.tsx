import Heading from "$/app/_components/heading";
import { ReactNode } from "react";

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};
export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 px-12 py-8 rounded-3xl bg-white">
      <span className="flex items-center justify-center common-gradient text-white w-24 h-24 rounded-full">
        {icon}
      </span>
      <Heading size="h3" className="font-bold uppercase text-zinc-700">
        {title}
      </Heading>
      <p className="text-center">{text}</p>
    </div>
  );
}
