import Image from "next/image";
export default function CodeTechnologies() {
  return (
    <div className="grid lg:grid-cols-5 items-center mb-12">
      <div className="flex flex-col gap-4">
        <span className="flex items-center justify-center">
          <Image
            src={"/word-press-logo.png"}
            alt="WordPress logo"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/mysql-logo.png"}
            alt="My Sql logo"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <span className="flex items-center justify-center">
          <Image
            src={"/nodejs-logo.png"}
            alt="nodejs logo"
            width={100}
            height={100}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/codeigniter-logo.png"}
            alt="codeigniter logo"
            width={100}
            height={100}
          />
        </span>
      </div>
      <div className="flex flex-col gap-12">
        <span className="flex items-center justify-center">
          <Image
            src={"/php-logo.png"}
            alt="php logo"
            width={100}
            height={100}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/react-logo.png"}
            alt="react.js logo"
            width={180}
            height={120}
          />
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <span className="flex items-center justify-center">
          <Image
            src={"/mangodb-logo.png"}
            alt="php logo"
            width={100}
            height={100}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/vue-logo.png"}
            alt="php logo"
            width={100}
            height={100}
          />
        </span>
      </div>
      <div className="flex flex-col gap-8">
        <span className="flex items-center justify-center">
          <Image
            src={"/bootstap-logo.png"}
            alt="php logo"
            width={100}
            height={100}
          />
        </span>
        <span className="flex items-center justify-center">
          <Image
            src={"/vue-logo.png"}
            alt="php logo"
            width={100}
            height={100}
          />
        </span>
      </div>
    </div>
  );
}
