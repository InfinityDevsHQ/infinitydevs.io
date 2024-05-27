import Image from "next/image";
export default function CodeTechnologies() {
  return (
    <>
      <div className="flex justify-center gap-16 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/Adobe Xd.png"}
              alt="Adobe Xd logo"
              width={120}
              height={120}
              className="hidden lg:inline-block"
            />
            <Image
              src={"/technologies/Adobe Xd.png"}
              alt="Adobe Xd logo"
              width={29}
              height={29}
              className="lg:hidden"
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
              className="hidden lg:inline-block"
            />
            <Image
              src={"/technologies/figma.png"}
              alt="figma logo"
              width={29}
              height={29}
              className="lg:hidden"
            />
          </span>
        </div>
      </div>

      <div className="flex gap-8 lg:gap-16 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/HTML.png"}
              alt="html logo"
              width={120}
              height={120}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/tailwind_css_logo.png"}
              alt="tailwind css logo"
              width={120}
              height={120}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/React.png"}
              alt="reactjs logo"
              width={120}
              height={120}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center filter invert">
            <Image
              src={"/technologies/Next js.png"}
              alt="Nextjs logo"
              width={120}
              height={120}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/nodejs.png"}
              alt="nodejs logo"
              width={120}
              height={120}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/mangodb.png"}
              alt="mongodb logo"
              width={120}
              height={120}
            />
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-16 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/python_logo.png"}
              alt="python logo"
              width={120}
              height={120}
              className="hidden lg:inline-block"
            />
            <Image
              src={"/technologies/python_logo.png"}
              alt="python logo"
              width={29}
              height={29}
              className="lg:hidden"
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/django_logo.png"}
              alt="django logo"
              width={120}
              height={120}
              className="hidden lg:inline-block"
            />
            <Image
              src={"/technologies/django_logo.png"}
              alt="django logo"
              width={29}
              height={29}
              className="lg:hidden"
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/postgresql.png"}
              alt="postgresql logo"
              width={120}
              height={120}
              className="hidden lg:inline-block"
            />
            <Image
              src={"/technologies/postgresql.png"}
              alt="postgresql logo"
              width={29}
              height={29}
              className="lg:hidden"
            />
          </span>
        </div>
      </div>
    </>
  );
}
