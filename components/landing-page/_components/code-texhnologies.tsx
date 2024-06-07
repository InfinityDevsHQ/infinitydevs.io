import Image from "next/image"

export default function CodeTechnologies() {
  return (
    <div className="flex flex-col gap-7 sm:gap-16 py-8 sm:py-14">
      <div className="flex gap-6 sm:gap-10 justify-center items-center">
        <Image
          alt="xd logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/xd.svg"}
        />
        <Image
          alt="figma logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/figma.svg"}
        />
        <Image
          alt="vue logo"
          width={100}
          height={100}
          className="sm:hidden w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/vue.svg"}
        />
      </div>
      <div className="flex gap-4 sm:gap-10 justify-center items-center">
        <Image
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          alt="html"
          width={100}
          height={100}
          src={"/technologies/html.svg"}
        />
        <Image
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          alt="tailwind logo"
          width={100}
          height={100}
          src={"/technologies/tailwind.svg"}
        />
        <Image
          alt="js logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/js.svg"}
        />
        <Image
          alt="react logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/react.svg"}
        />
        <Image
          alt="next logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/next.svg"}
        />
        <Image
          alt="vue logo"
          width={100}
          height={100}
          className="hidden sm:block w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/vue.svg"}
        />
      </div>
      <div className="flex gap-6 sm:gap-10 justify-center items-center">
        <Image
          alt="django logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/dj.svg"}
        />
        <Image
          alt="python logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/python.svg"}
        />
        <Image
          alt="postgres logo"
          width={100}
          height={100}
          className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:translate-y-[-12px] hover:scale-105 transition-all duration-300 ease-in-out"
          src={"/technologies/postgres.svg"}
        />
      </div>
    </div>
  )
}
