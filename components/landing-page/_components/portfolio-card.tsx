import Heading from "$/app/_components/heading";
import Image from "next/image";

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
    <div className={`bg-purple-900/40 rounded-2xl ${className} w-full`}>
      <Image
        src={imageUrl}
        alt={`${imageUrl}`}
        width={300}
        height={300}
        className="p-4 mx-auto"
      />
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
        <Heading size="h4" className="font-bold">
          {tag}
        </Heading>
      </div>
    </div>
  );
}
