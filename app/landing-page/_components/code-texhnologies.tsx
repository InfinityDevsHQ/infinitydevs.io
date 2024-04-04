import Image from "next/image";
export default function CodeTechnologies() {
  return (
    <div className="w-full flex items-center justify-center mb-20">
      <div className="flex flex-col gap-16">
        <div className="flex  items-center justify-center">
          <div className="image-flex">
            <span className="flex items-center justify-center">
              <Image
                src={"/technologies/reactjs.png"}
                alt="reactjs logo"
                width={200}
                height={200}
              />
            </span>
            <span className="flex items-center justify-center">
              <Image
                src={"/technologies/vue.png"}
                alt="vue logo"
                width={200}
                height={200}
              />
            </span>
            <span className="flex items-center justify-center">
              <Image
                src={"/technologies/tailwind.png"}
                alt="tailwind logo"
                width={200}
                height={200}
              />
            </span>
            <span className="flex items-center justify-center">
              <Image
                src={"/technologies/mangodb.png"}
                alt="mangodb logo"
                width={200}
                height={200}
              />
            </span>
            <span className="flex items-center justify-center">
              <Image
                src={"/technologies/nodejs.png"}
                alt="Nodejs logo"
                width={200}
                height={200}
              />
            </span>

            <span className="flex items-center justify-center">
              <Image
                src={"/technologies/python.png"}
                alt="Python logo"
                width={200}
                height={200}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
