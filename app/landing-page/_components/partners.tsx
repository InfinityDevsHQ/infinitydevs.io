import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex items-center justify-between">
      <span>
        <Image
          src={"/indeed-logo.png"}
          alt="Indeed Logo"
          width={200}
          height={2000}
        />
      </span>
      <span>
        <Image
          src={"/clutch-logo.png"}
          alt="Clutch Logo"
          width={200}
          height={200}
        />
      </span>
      <span>
        <Image
          src={"/google-logo.png"}
          alt="Google Logo"
          width={200}
          height={200}
        />
      </span>
      <span>
        <Image
          src={"/good-firm-logo.png"}
          alt="Good Firm logo"
          width={200}
          height={200}
        />
      </span>
    </div>
  );
}
