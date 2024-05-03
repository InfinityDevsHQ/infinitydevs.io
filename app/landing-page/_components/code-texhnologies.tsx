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
      {/* for mobile view */}
      <div className=" justify-center lg:hidden md:hidden sm:flex gap-6 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/Adobe Xd.png"}
              alt="Adobe Xd logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/figma.png"}
              alt="figma logo"
              width={60}
              height={60}
            />
          </span>
        </div>
      </div>

      <div className="md:grid lg:grid-cols-6 sm:hidden md:grid-cols-6 gap-16 items-center my-8">
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
      {/* for mobile view */}
      <div className="sm:flex sm:justify-center gap-6 md:hidden items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/tailwind_css_logo.png"}
              alt="tailwind css logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/React.png"}
              alt="reactjs logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center filter invert">
            <Image
              src={"/technologies/Next js.png"}
              alt="Nextjs logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/nodejs.png"}
              alt="nodejs logo"
              width={60}
              height={60}
            />
          </span>
        </div>
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/mangodb.png"}
              alt="mongodb logo"
              width={60}
              height={60}
            />
          </span>
        </div>
      </div>

      <div className="lg:flex justify-center sm:hidden md:flex gap-16 items-center">
        <div className="image-flex">
          <span className="flex items-center justify-center">
            <Image
              src={"/technologies/python_logo.png"}
              alt="python logo"
              width={120}
              height={120}
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
            />
          </span>
        </div>
      </div>
      {/* for mobile view */}
      <div className="justify-center sm:flex md:hidden gap-6 items-center">
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
