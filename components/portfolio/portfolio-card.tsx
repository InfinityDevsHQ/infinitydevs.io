import Heading from "$/app/_components/heading";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export type PortfolioCardProps = {
  imageUrl: string;
  tag: string;
  pills?: string[];
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
      className={`bg-purple-900/40 rounded-2xl ${className} w-full border border-indigo-600/40 px-2.5 cursor-pointer`}
    >
      <div className="flex items-center justify-center p-4">
        <AspectRatio ratio={300 / 300}>
          <Image
            src={imageUrl}
            alt={`${tag} Snapshots`}
            width={1200}
            height={400}
          />
        </AspectRatio>
      </div>
      <div className="p-4 flex flex-col gap-2 border-t">
        {pills?.length && (
          <div className="flex gap-4">
            {pills?.map((pill, index) => (
              <span
                key={index}
                className="flex common-border max-w-max items-center justify-between px-2 py-1 text-sm text-zinc-300 font-semibold bg-blue-900/40 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        )}
        <Heading size="h4" className="font-bold max-w-max">
          {tag}
        </Heading>
      </div>
    </div>
  );
}
