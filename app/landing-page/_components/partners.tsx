import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
      <span>
        <Image
          src={"/partners/partner-1.png"}
          alt=""
          width={200}
          height={200}
        />
      </span>
      <span>
        <Image
          src={"/partners/partner-2.png"}
          alt=""
          width={200}
          height={200}
        />
      </span>
      <span>
        <Image
          src={"/partners/partner-3.png"}
          alt=""
          width={200}
          height={200}
        />
      </span>
      <span>
        <Image
          src={"/partners/partner-4.png"}
          alt=""
          width={200}
          height={200}
        />
      </span>
    </div>
  );
}
