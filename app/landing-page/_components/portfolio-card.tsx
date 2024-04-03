import Heading from "$/app/_components/heading";
import Image from "next/image";

export type PortfolioCardProps = {
  imageUrl: string;
  tag: string;
  pills: string[];
  className?: string;
};
export default function PortfolioCard({
  imageUrl,
  tag,
  pills,
  className,
}: PortfolioCardProps) {
  return (
    <div
      className={`bg-purple-900/40 rounded-2xl w-80 xl:w-[28rem]  2xl:w-[32rem] 3xl:w-[30rem] ${className}`}
    >
      <div className="w-full flex items-center justify-center p-4 border-b">
        <Image src={imageUrl} alt={`${imageUrl}`} width={300} height={300} />
      </div>
      <div className="px-4 py-2 flex flex-col gap-2">
        <div className="flex gap-4">
          {pills.map((pill, index) => (
            <span
              key={index}
              className="flex common-border  max-w-max items-center justify-between px-2 py-1  text-sm text-zinc-300 font-semibold bg-blue-900/40 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>
        <Heading size="h3" className="font-bold">
          {tag}
        </Heading>
      </div>
    </div>
  );
}
