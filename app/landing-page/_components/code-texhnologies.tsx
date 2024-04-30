import Image from "next/image";
export default function CodeTechnologies() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-12 mt-12">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/Adobe Xd.png"}
              alt="Adobe Xd logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/figma.png"}
              alt="figma logo"
              width={100}
              height={100}
            />
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-6 gap-16 items-center mb-12 mt-12">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/HTML.png"}
              alt="html logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/tailwind_css_logo.png"}
              alt="tailwind css logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/React.png"}
              alt="reactjs logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center filter invert">
            <Image
              src={"/technologies/Next js.png"}
              alt="Nextjs logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/nodejs.png"}
              alt="nodejs logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/mangodb.png"}
              alt="mongodb logo"
              width={100}
              height={100}
            />
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-16 items-center mb-12 mt-12">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/python_logo.png"}
              alt="python logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/django_logo.png"}
              alt="django logo"
              width={100}
              height={100}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/postgresql.png"}
              alt="postgresql logo"
              width={100}
              height={100}
            />
          </span>
        </div>
      </div>
    </>
  );
}
