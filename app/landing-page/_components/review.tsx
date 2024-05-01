import Heading from "$/app/_components/heading";
import Image from "next/image";
export type ReviewProps = {
  imageUrl?: string;
  name?: string;
  review?: string;
};
export default function Review({ imageUrl, name, review }: ReviewProps) {
  return (
    <div className="px-6 py-4 rounded-3xl max-w-96 2xl:max-w-[30rem] review-bg border border-white">
      <div className="flex items-center gap-4 mb-2">
        <span className="bg-white h-10 w-10 flex justify-center items-center rounded-full" >
          <Image
            src={imageUrl || ""}
            alt="Client-photo"
            width={25}
            height={25}
            className="rounded-full"
          />
        </span>
        <Heading size="h4" className="capitalize">
          {name}
        </Heading>
      </div>
      <p className="text-white text-center">{review}</p>
    </div>
  );
}
