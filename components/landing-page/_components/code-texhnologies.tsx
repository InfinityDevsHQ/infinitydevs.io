import Image from "next/image";
export default function CodeTechnologies() {
  return (
    <>
      <div className="lg:flex justify-center sm:hidden md:flex gap-16 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/Adobe Xd.png"}
              alt="Adobe Xd logo"
              width={120}
              height={120}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/figma.png"}
              alt="figma logo"
              width={120}
              height={120}
            />
          </span>
        </div>
      </div>
      <div className="justify-center flex lg:hidden gap-6 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/python_logo.png"}
              alt="python logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/django_logo.png"}
              alt="django logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/postgresql.png"}
              alt="postgresql logo"
              width={60}
              height={60}
            />
          </span>
        </div>
      </div>
    </>
  );
}
