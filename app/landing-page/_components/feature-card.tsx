import Heading from "$/app/_components/heading";
import { ReactNode } from "react";

export type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};
export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className='bg-color flex flex-col gap-5 sm:gap-6 sm:mt-5 items-center px-2 lg:px-0 py-6 rounded-3xl text-center'>
      <span className='flex items-center justify-center common-gradient text-white w-24 h-24 rounded-full'>
        {icon}
      </span>
      <Heading
        size='h3'
        className='font-bold uppercase text-center text-zinc-700'
      >
        {title}
      </Heading>
      <p className='text-center px-2 sm:px-6 md:px-8 text-center'>{text}</p>
    </div>
  );
}
