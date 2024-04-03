import Heading from "$/app/_components/heading";
import Image from "next/image";
export type ReviewProps = {
  imageUrl?: string;
  name?: string;
  review?: string;
  className?: string;
};
export default function Review({
  imageUrl,
  name,
  review,
  className,
}: ReviewProps) {
  return (
    <div
      className={`px-6 py-4 rounded-3xl  max-w-96 2xl:max-w-[30rem] bg-purple-900 border border-white ${className}`}
    >
      <div className="flex items-center gap-4 mb-2">
        <span>
          <Image
            src={imageUrl || ""}
            alt="Client-photo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </span>
        <Heading size="h4" className="uppercase">
          {name}
        </Heading>
      </div>
      <p className="text-white text-center">{review}</p>
    </div>
  );
}
